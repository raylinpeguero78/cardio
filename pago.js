document.addEventListener('DOMContentLoaded', function() {
  const paypalButtonContainer = document.getElementById('paypal-button-container');
  const amountInput = document.getElementById('amount-input');
  const payButton = document.getElementById('pay-button');

  payButton.addEventListener('click', function() {
      const amount = parseFloat(amountInput.value);

      if (!isNaN(amount) && amount > 0) {
          paypal.Buttons({
              createOrder: function(data, actions) {
                  return actions.order.create({
                      purchase_units: [{
                          amount: {
                              value: amount.toFixed(2) // Asegura que el valor tenga dos decimales
                          }
                      }]
                  });
              }
          }).render("#paypal-button-container");
      } else {
          alert('Ingrese un monto válido mayor a cero.');
      }
  });
});
