const form = document.getElementById("myForm");
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Show SweetAlert when the form is submitted
  swal('Enviado correctamente', {
    icon: 'success',
    button: 'Aceptar',
  }).then(() => {
    // After showing the SweetAlert, submit the form
    form.submit();
  });
});

