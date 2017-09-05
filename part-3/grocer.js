document.addEventListener("DOMContentLoaded", function(event) {
  const cartItems = []
  const modalBtn = document.getElementById('cart-button')
  const modalClose = document.getElementsByClassName('close')[0]
  const addBtns = document.getElementsByClassName('add-to-cart')
  const modalItemList = document.getElementById('modal-item-section')
  const modalTotalAmount = document.getElementById('items-total')

  // Open modal
  modalBtn.addEventListener('click', function(){
    document.getElementById('modal').style.display = 'block'
    setModalHTML()
    modalItemList.innerHTML = setModalHTML()
    modalTotalAmount.innerHTML = `$${cartTotal()}`
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
        'name': document.getElementsByClassName('item-name')[i].textContent,
        'price': document.getElementsByClassName('item-price')[i].textContent
      }
      cartItems.push(item)

      counter()
    })
  }

  // Set modal content
  function setModalHTML(){
    let modalHTML = ''
    for(let item of cartItems){
      modalHTML += "<li class='item flex flex-row-between'>"
      modalHTML += "<span class='item-name'>" + item.name + "</span>"
      modalHTML += "<span class='item-price'>" + item.price + "</span></li>"
    }
    return modalHTML
  }

  // Add total
  function cartTotal(){
    let prices = []
    let total = 0
    for(let item of cartItems){
      prices.push(Number(item.price.substr(1)))
    }
    return prices.reduce(function(sum, num){
      return sum + num
    })

  }

})
