

export const DEF_AlertDefaults = {
  defaultSuccessMessage: 'Operación realizada exitosamente.',
  defaultCreationSuccessMessage: 'Registro creado exitosamente',
  defaultEditionSuccessMessage: 'Registro modificado exitosamente.',
  defaultDeletionSuccessMessage: 'Registro eliminado exitosamente.',
  defaultDeletionConfirmationMessage: '¿ Está seguro que desea eliminar el registro ?',
  defaultConfirmationMessage: '¿Esta seguro de que desea editar el registro? ',
  defaultEditConfirmationMessagePlanificacion: 'Registro modificado exitosamente.',
  defaultSwalOpts: {
    width: '530px',
    confirmButtonText: 'Aceptar',
    reverseButtons: true,
    toast: true,
    imageWidth: '135px',
    loaderHtml: '<div class="spinner-cerdito"></div>',
    customClass: {
      loader: 'custom-loader'
    }
  }
}
