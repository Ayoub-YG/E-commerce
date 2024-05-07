const menu = document.querySelector('.list-n')
const affMenu = document.querySelector('.menu')
let nextImg = document.querySelector('.next')
const pervious = document.querySelector('.previous')
const imgcart = document.querySelector('.img-crt')
let nav = document.querySelector('.nav')
const dot = document.querySelector('.dot')
const title = document.querySelector('.titre')


 
affMenu.addEventListener ('click',function (){
    menu.classList.toggle('active')
    nextImg.classList.toggle('none')
    pervious.classList.toggle('none')
       
})





const counter = document.querySelector('.number-S');
let counterN = parseInt(counter.textContent)
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const numberOfSneak= document.querySelector('.numder-of-S')

plus.addEventListener('click',function(){
    counterN +=  1
    counter.textContent=counterN
    numberOfSneak.textContent = counterN
})
minus.addEventListener('click',function(){
  if (counterN > 0){
    counterN = counterN - 1
  }
  counter.textContent=counterN
  numberOfSneak.textContent = counterN
})

const cart = document.querySelector('.imgg');
const Ccart = document.querySelector('.cart');
const price = document.querySelector('.priceN')
const priceT= document.querySelector('.prix')

cart.addEventListener('click',function(){
    Ccart.classList.toggle('cart-active')
    priceT.textContent = parseInt(price.textContent)*parseInt(numberOfSneak.textContent)
})


const Image = document.querySelector('.img-back')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')


img1.addEventListener('click', function(){
  strImg = "image-product/image-product0-1.jpg"
  Image.setAttribute('src',strImg)
})
img2.addEventListener('click', function(){
  strImg = "image-product/image-product0-2.jpg"
  Image.setAttribute('src',strImg)
})
img3.addEventListener('click', function(){
  strImg = "image-product/image-product0-3.jpg"
  Image.setAttribute('src',strImg)
})
img4.addEventListener('click', function(){
  strImg = "image-product/image-product0-4.jpg"
  Image.setAttribute('src',strImg)
})


let counterImg = 1
let counterTTL = 0


function updqteImg (strback , img1a ,img2b , img3c , img4d){
  Image.setAttribute('src',strback)
  img1.setAttribute('src',img1a)
  img2.setAttribute('src',img2b)
  img3.setAttribute('src',img3c)
  img4.setAttribute('src',img4d)
}

// dynamic click sur product

const prod1 = document.querySelector('.item1')
const prod2 = document.querySelector('.item2')
const prod3 = document.querySelector('.item3')
const prod4 = document.querySelector('.item4')
const prod5 = document.querySelector('.item5')
const prod6 = document.querySelector('.item6')
const prod7 = document.querySelector('.item7')
const prod8 = document.querySelector('.item8')
const prod9 = document.querySelector('.item9')
const prod10 = document.querySelector('.item10')
const prod11 = document.querySelector('.item11')
const prod0 = document.querySelector('.item0')

prod1.addEventListener('click',function(){
  let strback = 'image-product/image-product1-1.jpg'
  let img11 = 'image-product/image-product1-1.jpg'
  let img22 = 'image-product/image-product1-2.jpg'
  let img33 = 'image-product/image-product1-3.jpg'
  let img44 = 'image-product/image-product1-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product1-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product1-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product1-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product1-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=1
  counterImg =1
  price.textContent = 130
  slider(counterImg)
  title.textContent = 'S.Oliver Sneakers X chic and soft '
})


prod2.addEventListener('click',function(){
  let strback = 'image-product/image-product2-1.jpg'
  let img11 = 'image-product/image-product2-1.jpg'
  let img22 = 'image-product/image-product2-2.jpg'
  let img33 = 'image-product/image-product2-3.jpg'
  let img44 = 'image-product/image-product2-4.jpg'
  
  imgcart.setAttribute('src',strback)

  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product2-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product2-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product2-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product2-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=2
  counterImg =1
  price.textContent = 230
  slider(counterImg)
  title.textContent = 'Sneakers Newbalance X-UA-Compatible'
 
})

prod3.addEventListener('click',function(){
  let strback = 'image-product/image-product3-1.jpg'
  let img11 = 'image-product/image-product3-1.jpg'
  let img22 = 'image-product/image-product3-2.jpg'
  let img33 = 'image-product/image-product3-3.jpg'
  let img44 = 'image-product/image-product3-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product3-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product3-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product3-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product3-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=3
  counterImg =1
  price.textContent = 180
  slider(counterImg)
  title.textContent = 'Sneakers Adidas balle X-UA-Compatible'
})

prod4.addEventListener('click',function(){
  let strback = 'image-product/image-product4-1.jpg'
  let img11 = 'image-product/image-product4-1.jpg'
  let img22 = 'image-product/image-product4-2.jpg'
  let img33 = 'image-product/image-product4-3.jpg'
  let img44 = 'image-product/image-product4-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product4-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product4-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product4-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product4-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=4
  counterImg =1
  price.textContent = 250
  slider(counterImg)
  title.textContent = 'Sneakers Nike X-UA-Compatible'
 
})

prod5.addEventListener('click',function(){
  let strback = 'image-product/image-product5-1.jpg'
  let img11 = 'image-product/image-product5-1.jpg'
  let img22 = 'image-product/image-product5-2.jpg'
  let img33 = 'image-product/image-product5-3.jpg'
  let img44 = 'image-product/image-product5-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product5-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product5-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product5-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product5-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=5
  counterImg =1
  price.textContent = 270
  slider(counterImg)
  title.textContent = 'Sneakers Nike X Air jordan 1 '
})

prod6.addEventListener('click',function(){
  let strback = 'image-product/image-product6-1.jpg'
  let img11 = 'image-product/image-product6-1.jpg'
  let img22 = 'image-product/image-product6-2.jpg'
  let img33 = 'image-product/image-product6-3.jpg'
  let img44 = 'image-product/image-product6-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product6-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product6-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product6-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product6-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=6
  counterImg =1
  price.textContent = 260
  slider(counterImg)
  title.textContent = 'Sneakers Air jordan 3 X black toe'
 
})

// prod7.addEventListener('click',function(){
//   let strback = 'image-product/image-product7-1.jpg'
//   let img11 = 'image-product/image-product7-1.jpg'
//   let img22 = 'image-product/image-product7-2.jpg'
//   let img33 = 'image-product/image-product7-3.jpg'
//   let img44 = 'image-product/image-product7-4.jpg'

//   imgcart.setAttribute('src',strback)
  
//   updqteImg(strback ,img11 ,img22 ,img33,img44)
//   let strImg
//   img1.addEventListener('click', function(){
//     strImg = 'image-product/image-product7-1.jpg'
//     Image.setAttribute('src',strImg)
//   })
//   img2.addEventListener('click', function(){
//     strImg = 'image-product/image-product7-2.jpg'
//     Image.setAttribute('src',strImg)
//   })
//   img3.addEventListener('click', function(){
//     strImg = 'image-product/image-product7-3.jpg'
//     Image.setAttribute('src',strImg)
//   })
//   img4.addEventListener('click', function(){
//     strImg = 'image-product/image-product7-4.jpg'
//     Image.setAttribute('src',strImg)
//   })
//   counterTTL=6
//   counterImg =1
//   price.textContent = 260
//   slider(counterImg)
//   title.textContent = 'Sneakers izeey x black black'
// })

prod7.addEventListener('click',function(){
  let strback = 'image-product/image-product7-1.jpg'
  let img11 = 'image-product/image-product7-1.jpg'
  let img22 = 'image-product/image-product7-2.jpg'
  let img33 = 'image-product/image-product7-3.jpg'
  let img44 = 'image-product/image-product7-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product7-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product7-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product7-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product7-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=7
  counterImg =1
  price.textContent = 130
  slider(counterImg)
  title.textContent = 'Sneakers izeey x black black'
})
prod8.addEventListener('click',function(){
  let strback = 'image-product/image-product8-1.jpg'
  let img11 = 'image-product/image-product8-1.jpg'
  let img22 = 'image-product/image-product8-2.jpg'
  let img33 = 'image-product/image-product8-3.jpg'
  let img44 = 'image-product/image-product8-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product8-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product8-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product8-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product8-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=8
  counterImg =1
  price.textContent = 100
  slider(counterImg)
   title.textContent = 'Sneakers Nike x style air force one white'
})
prod9.addEventListener('click',function(){
  let strback = 'image-product/image-product9-1.jpg'
  let img11 = 'image-product/image-product9-1.jpg'
  let img22 = 'image-product/image-product9-2.jpg'
  let img33 = 'image-product/image-product9-3.jpg'
  let img44 = 'image-product/image-product9-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product9-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product9-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product9-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product9-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=9
  counterImg =1
  price.textContent = 110
  slider(counterImg)
  title.textContent = 'Sneakers Adidas X-UA-Compatible'
})
prod10.addEventListener('click',function(){
  let strback = 'image-product/image-product10-1.jpg'
  let img11 = 'image-product/image-product10-1.jpg'
  let img22 = 'image-product/image-product10-2.jpg'
  let img33 = 'image-product/image-product10-3.jpg'
  let img44 = 'image-product/image-product10-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product10-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product10-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product10-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product10-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=10
  counterImg =1
  price.textContent = 260
  slider(counterImg)
  title.textContent= 'Sneakers Newbalance Air '
 
})

prod11.addEventListener('click',function(){
  let strback = 'image-product/image-product11-1.jpg'
  let img11 = 'image-product/image-product11-1.jpg'
  let img22 = 'image-product/image-product11-2.jpg'
  let img33 = 'image-product/image-product11-3.jpg'
  let img44 = 'image-product/image-product11-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product11-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product11-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product11-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product11-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=11
  counterImg =1
  price.textContent = 190
  slider(counterImg)
  title.textContent='Sneakers Nike x Air max 3'
})

prod0.addEventListener('click',function(){
  let strback = 'image-product/image-product0-1.jpg'
  let img11 = 'image-product/image-product0-1.jpg'
  let img22 = 'image-product/image-product0-2.jpg'
  let img33 = 'image-product/image-product0-3.jpg'
  let img44 = 'image-product/image-product0-4.jpg'

  imgcart.setAttribute('src',strback)
  
  updqteImg(strback ,img11 ,img22 ,img33,img44)
  let strImg
  img1.addEventListener('click', function(){
    strImg = 'image-product/image-product0-1.jpg'
    Image.setAttribute('src',strImg)
  })
  img2.addEventListener('click', function(){
    strImg = 'image-product/image-product0-2.jpg'
    Image.setAttribute('src',strImg)
  })
  img3.addEventListener('click', function(){
    strImg = 'image-product/image-product0-3.jpg'
    Image.setAttribute('src',strImg)
  })
  img4.addEventListener('click', function(){
    strImg = 'image-product/image-product0-4.jpg'
    Image.setAttribute('src',strImg)
  })
  counterTTL=0
  counterImg =1
  price.textContent = 25
  slider(counterImg)
  title.textContent = 'Sneakers trapale simple'
})
let dot1 = document.querySelector('.dot1')
let dot2 = document.querySelector('.dot2')
let dot3 = document.querySelector('.dot3')
let dot4 = document.querySelector('.dot4')

function slider(counter) {
  if (counter == 1){dot1.classList.add('actv')}
  else{
    dot1.classList.remove('actv')

  }
  if (counter == 2){dot2.classList.add('actv')} 
  else{
    dot2.classList.remove('actv')

  }
  if (counter == 3){dot3.classList.toggle('actv')} 
  else{
    dot3.classList.remove('actv')

  }
  if (counter == 4){dot4.classList.toggle('actv')} 
  else{
    dot4.classList.remove('actv')

  }
}

let strImg 
nextImg.addEventListener('click',function(){
  if (counterImg < 4 ){
     counterImg = counterImg +1
  }
  slider(counterImg)

  strImg = `image-product/image-product${counterTTL}-${counterImg}.jpg`
   
    Image.setAttribute('src',strImg)

})
pervious.addEventListener('click',function(){
  if (counterImg >1 ){
     counterImg = counterImg -1
  }
  slider(counterImg)
  strImg = `image-product/image-product${counterTTL}-${counterImg}.jpg`
    Image.setAttribute('src',strImg)
})


const obj1 = {
  a: 0,
  b: 2,
  c: 4
};
const obj2 = Object.assign({c: 5, d: 6}, obj1);
console.log(obj2.c, obj2.d);

// desktop dynmic



// mobile dynamic

