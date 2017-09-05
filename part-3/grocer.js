document.addEventListener("DOMContentLoaded", function(event) {
  const cartItems = []
  const modalBtn = document.getElementById('cart-button')
  const modalClose = document.getElementsByClassName('close')[0]
  const addBtns = document.getElementsByClassName('add-to-cart')

  // Open modal
  modalBtn.addEventListener('click', function(){
    document.getElementById('modal').style.display = 'block'
  })

  // Close modal
  modalClose.addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none'
  })

  // Cart button counter
  var count = 0
  function counter(){
    count++
    document.getElementById('cart-item-count').innerHTML = `(${count})`
  }

  for(let i = 0; i < addBtns.length; i++){
    addBtns[i].addEventListener('click', function(){
      let item = {
        'item-name': document.getElementsByClassName('item-name')[i].textContent,
        'item-price': document.getElementsByClassName('item-price')[i].textContent
      }
      cartItems.push(item)

      counter()
    })
  }

  // Set modal content
  

})
