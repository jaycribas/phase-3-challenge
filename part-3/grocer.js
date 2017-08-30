document.addEventListener("DOMContentLoaded", function(event) {
  const cartItems = []
  const cartModal = document.getElementById('cart-button')
  const modalBtn = document.getElementById('cart-button')
  const modalClose = document.getElementsByClassName('close')[0]

  // Open modal
  cartModal.addEventListener('click', function(){
    document.getElementById('modal').style.display = 'block'
  })

  // Close modal
  modalClose.addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none'
  })


})
