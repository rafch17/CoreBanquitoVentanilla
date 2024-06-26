import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Servicios/account.service';
import { ClientService } from 'src/app/Servicios/client.service';
import { ComissionService } from 'src/app/Servicios/comission.service';
import { CriptoService } from 'src/app/Servicios/cripto.service';
import { ErrorService } from 'src/app/Servicios/error.service';
import { RecaudosService } from 'src/app/Servicios/recaudos.service';

@Component({
  selector: 'app-datos-recaudo',
  templateUrl: './datos-recaudo.component.html',
  styleUrls: ['./datos-recaudo.component.css']
})
export class DatosRecaudoComponent implements OnInit {
  companyData: any;
  contrapartida: any;
  accountData: any;
  clientData: any;
  itemOrder: any;
  order: any;
  receivable: any;
  receivableCom: any;
  dataFinal: any;
  comisiones: any[] = [];
  sumaComisiones = 0;
  iva = 0;
  totalCompleto = 0;
  totalcomisiones = 0;

  constructor(private commisionService: ComissionService, private accountService: AccountService, private criptoService: CriptoService, private clientService: ClientService, private router: Router, private recaudoService: RecaudosService, private errorService: ErrorService) {

  }

  ngOnInit() {
    console.log(history.state);
    this.companyData = history.state.company;
    this.contrapartida = history.state.itemData[0];
    this.cargarItem();


  }
  procesarPago() {
    const pago: any = {
      orderItemId: this.itemOrder.id,
      paymentType: "EFE",
      owedPayment: this.itemOrder.owedAmount,
      paymentDate: new Date(),
      outstandingBalance: 0.00,
      channel: "VEN"
    }
    let dataTotal: any = {
      companyData: this.companyData,
      contrapartida: this.contrapartida,
      accountData: this.accountData,
      clientData: this.clientData,
      itemOrder: this.itemOrder,
      order: this.order,
      receivable: this.receivable,
      receivableCom: this.receivableCom,
      comisiones: this.comisiones,
      sumaComisiones: this.sumaComisiones,
      iva: this.iva,
      totalCompleto: this.totalCompleto,
      totalcomisiones: this.totalcomisiones,
    }
    console.log(pago);
    this.recaudoService.sendPayment(pago).subscribe({
      next: (data) => {
        dataTotal = { ...dataTotal, pago: data }
        //this.router.navigateByUrl("recaudos/inforecaudo", { state: dataTotal });
        this.recaudoService.setOerderItem(this.itemOrder.id, "PAG").subscribe({
          next: (data) => {
            console.log("pagado");
            this.errorService.exito("Completo", "Pago realizado exitosamente");
            this.router.navigateByUrl("recaudos");
          },
          error: (err) => {
            console.log(err);
            this.errorService.notFound("Error", "El recaudo no pudo ejecutarse")

          }
        })
      },
      error: (err) => {
        this.errorService.notFound("Error", "El recaudo no pudo ejecutarse")
        //this.router.navigateByUrl("recaudos");
      }
    });
  }
  makeDeposit() {
    //this.router.navigateByUrl("recaudos/inforecaudo")

    const transactionDTO: any = {
      accountId: this.accountData.id,
      codeChannel: "0003",
      uniqueKey: this.criptoService.generateUniqueCode(this.accountData.id, "0003", "RECVENTANILLA"),
      transactionType: "CRE",
      transactionSubtype: "PAYMENT",
      reference: "RECAUDOVENTANILLA",
      ammount: this.contrapartida.owedAmount,
      creditorAccount: this.accountData.owedAmount,
      debitorAccount: "",
      creationDate: new Date(),
      applyTax: false,
      parentTransactionKey: "",
      state: "POS"
    }
    const paymentRecordDTO: any = {
      orderItemId: this.itemOrder.id,
      paymentType: "EFE",
      owedPayment: this.itemOrder.owedPayment,
      paymentDate: new Date(),
      outstandingBalance: 0.00,
      channel: "VEN"
    }




    //console.log(data);
    //this.router.navigateByUrl("recaudos/inforecaudo",{state: data});
    this.accountService.sendTransaction(transactionDTO).subscribe({
      next: (data) => {
        const dataTotal: any = {
          account: this.accountData,
          transaction: data,
          client: this.clientData
        }
        this.dataFinal = { ...dataTotal }
        this.recaudoService.sendPayment(paymentRecordDTO).subscribe({
          next: (data) => {

            this.dataFinal = { ...this.dataFinal, paymentRecord: data };
            this.recaudoService.setOerderItem(this.itemOrder.id, "PAG").subscribe({
              next: (data) => {

                //this.dataFinal={...this.dataFinal, paymentRecord:data};
                const paymentComisionDTO: any = {
                  commissionId: this.receivableCom[0].commissionId,
                  paymentRecordId: this.dataFinal.paymentRecord.id,
                  note: "Sample note"
                }
                this.commisionService.sendPaymentCommision(paymentComisionDTO).subscribe({
                  next: (data) => {
                    this.dataFinal={...this.dataFinal,paycom:data}
                    console.log(this.dataFinal);
                    this.router.navigateByUrl("recaudos/inforecaudo", { state: this.dataFinal});
                    //todo:
                  },
                  error: (err) => {
                    this.errorService.notFound("Error", "La comision no pudo enviarse")
                  }
                })
              },
              error: (err) => {
                this.errorService.notFound("Error", "El status del recaudo no pudo cambiarse")
              }
            });

          },
          error: (err) => {
            this.errorService.notFound("Error", "El pago del recaudo no pudo ejecutarse")

          }
        });
        

      },
      error: (err) => {
        this.errorService.notFound("Error", "La transaccion del recaudo no pudo ejecutarse")
        //this.router.navigateByUrl("recaudos");
      }
    });

  }
  cargarItem() {
    this.recaudoService.getItemOrderbyId(this.contrapartida.orderItemId).subscribe((data) => {
      this.itemOrder = data;
      console.log(this.itemOrder);
      this.cargarOrder();

    });
  }
  cargarOrder() {
    this.recaudoService.getOrderById(this.itemOrder.orderId).subscribe((data) => {
      this.order = data;
      console.log(this.order);
      this.cargarReceivable();

    });
  }
  cargarReceivable() {
    this.recaudoService.getReceivableById(this.order.receivableId).subscribe((data) => {
      this.receivable = data;
      console.log(this.receivable);
      this.cargarReceivableCommision();
      this.cargarAccount();

    });
  }
  cargarAccount() {
    this.recaudoService.getAccountByCompanyId(this.receivable.companyId).subscribe((data) => {
      this.accountData = data;
      console.log(this.accountData);


    });
  }
  cargarReceivableCommision() {
    this.commisionService.searchReceivableComissionBy(this.receivable.id).subscribe((data) => {
      this.receivableCom = data;
      console.log(this.receivableCom);
      this.procesarObjetos(this.receivableCom)
        .then(resultados => {
          console.log('Resultados:', resultados);
          this.comisiones = resultados;
          this.sumaComisiones = this.calcularSumaDebtorValue(resultados);
          console.log(this.sumaComisiones);
          this.iva = this.sumaComisiones * 0.12;
          console.log(this.iva);
          this.totalcomisiones = this.sumaComisiones + this.iva;
          console.log(this.totalcomisiones);
          this.totalCompleto = this.contrapartida.owedAmount + this.sumaComisiones + this.iva;
          this.totalCompleto = parseFloat(this.totalCompleto.toFixed(2))
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
  }
  // Método para procesar los objetos
  async procesarObjetos(objetos: any[]) {
    // Array para almacenar los resultados
    const resultados: any[] = [];

    // Recorrer los objetos y buscar receivableId
    const promesas = objetos.map(async (objeto) => {
      try {
        const resultado = await this.commisionService.searchComisionesById(objeto.commissionId.toString()).toPromise();
        resultados.push(resultado);
      } catch (error) {
        console.error(`Error al buscar receivable con ID ${objeto.receivableId}`, error);
      }
    });

    // Esperar a que todas las promesas se resuelvan
    await Promise.all(promesas);

    return resultados;
  }

  calcularSumaDebtorValue(data: { debtorValue: number }[]): number {
    // Usar reduce para acumular la suma de debtorValue
    return data.reduce((acumulador, item) => acumulador + item.debtorValue, 0);
  }



}



