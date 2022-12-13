const carouselLeft=document.querySelector('.carousel');
const carouselRight=document.querySelector('.car2');
const review1=document.querySelector('.review1')
const review2=document.querySelector('.review2')
const btnOne=document.querySelector('.one')
const btnTwo=document.querySelector('.two')
const logoOne=document.querySelector('.nium')
const logoTwo=document.querySelector('.palau')
const background=document.querySelector('.titles')
const containerCar=document.querySelector('.containerCar');
const containerCar2=document.querySelector('.containerCar2');
const infoSection=document.querySelector('.infoSection');
const img=document.querySelector('.img1');
const sectionValue=document.querySelector('.sectionValue');
const sectionLast=document.querySelector('.sectionLast');
const container=document.querySelector('.container');
const elementFooter1=document.querySelector('.opacity');
const elementFooter2=document.querySelector('.opacity2');
const elementFooter3=document.querySelector('.opacity3');
const button=document.querySelector('.btn');
const navBar=document.querySelector('.topNav')
const hamburger=document.querySelector('.hamburger')
const myLinks=document.querySelector('.myLinks');
const navButtons=document.querySelectorAll('.decoration');
const shop=document.querySelector('.cart')
const listProducts=document.querySelector('.wrapProducts');
const productsDisplay=[];
const lastProds=document.querySelector('.chk4')
const allProds=document.querySelector('.chk1')
const cheapProds=document.querySelector('.chk2')
const expensiveProds=document.querySelector('.chk3');
const register=document.querySelector('.register')
const form=document.querySelector('.login-form-wrap')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const loginBtn=document.querySelector('#login');
const accountsArray=[];
const p11=document.querySelector('.p11');
const field1=document.querySelector('.input1');
const field2=document.querySelector('.input2');
const h2=document.querySelector('.h2')
const h1hi=document.querySelector('.h1hi');
const btnRegister=document.querySelector('.registerbtn')
const user=document.querySelector('#user');
const email=document.querySelector('#email')
const passwordreg=document.querySelector('#psw')
const repeatpswreg=document.querySelector('#psw-repeat');
const productsPrices=[];
const cartList=document.querySelector('.list')
const btnAdd=document.querySelectorAll('.add')
const currentCart=[];
const list= document.querySelector('.list');
const cart=document.querySelector('.cart')
const loader=document.querySelector('.loader');
const body=document.querySelector('body')


////Loader 

////!Loader!

///////////Hamburger Menu
function event1(e) {
  myLinks.classList.remove('justNone');
  myLinks.classList.add('active');
  hamburger.classList.add('justNone');
}
hamburger.addEventListener('click',function(e){
  e.preventDefault();
  event1();
})
//////// !Hamburger Menu

///////LOGIN PAGE
if(document.URL.includes("login.html")){
  const Account=function(userName, password, email, repeatPassword){
    console.log(this)
    this.userName=userName;
    this.password=password;
    this.email=email;
    this.repeatPassword=repeatPassword;
    }
    const account1 = new Account('Jonas', 'Plesescu1');
    const account2 = new Account('Ionut', 'Jonas1');
    console.log(account1) 
    const accountAdd=function(acc,arr){
      return arr.push(acc);
      
    }
    accountAdd(account1,accountsArray);
    accountAdd(account2,accountsArray);
    console.table(accountsArray);
    // Person.prototype.calcAge=function(){
    //     console.log(2037-this.birthYear);
    // }
  
  
  // register.addEventListener('click' ,function(e){
  //   e.preventDefault();
  //   navBar.scrollIntoView({behavior: 'smooth'});
  // })
  
  btnRegister.addEventListener('click',function(e){
    e.preventDefault();
    const newAccount=new Account(user.value,passwordreg.value, email.value, repeatpswreg.value);
    accountsArray.push(newAccount)
    if (accountsArray.push(newAccount)) {
      alert(`Te-ai inregistrat cu succes,${user.value}`)
    }
  console.log(accountsArray)
  })
  
  
  console.log(accountsArray)
  loginBtn.addEventListener('click',function(e){
    e.preventDefault()
      
      accountsArray.forEach(function(acc){
    
        if(acc.userName===username.value && acc.password ===password.value){
          console.log(`${acc.userName} te-ai logat cu parola ${acc.password}`);
          form.style.display='none'
          h2.classList.add('justNone');
          field2.classList.add('justNone');
          field1.classList.add('justNone');
          p11.classList.add('justNone');
          loginBtn.classList.add('justNone');
          p11.classList.add('justNone');
          h1hi.innerHTML=`Welcome in our vision, ${acc.userName}. You will be returned soon to product page.`
          h1hi.classList.remove('justNone');
          // container.style.display='none';
         
        }
      })
      redirect();
    })
    
    const redirect=function(){
      if(h1hi.classList.contains('active')===false){
    
        setTimeout(function(){document.location.href = "../products.html"},2000);
      }
    }
}

//////////!LOGIN PAGE
//////////////////// PRODUCT PAGE
if ( document.URL.includes("products.html") ) {
  const cardCreate=function(path,textH2,price){
    const newDiv=document.createElement("div");
    newDiv.className=`card`;
    // newDiv.className='justNone'
    const newImagine=document.createElement('img');
    newImagine.className="imgProd"
    newImagine.src=path;
    newDiv.appendChild(newImagine)
    const newText=document.createElement("h2");
    newText.className="white add"
    newText.textContent=textH2
    newDiv.appendChild(newText);
    const newPrice=document.createElement("h3");
    newPrice.className="white prod"
    newPrice.textContent=price;
    newDiv.appendChild(newPrice);
    const buttonAdd=document.createElement('a');
    buttonAdd.className="aclass"
    buttonAdd.innerHTML=`
    <button class="topDiscover add">
      <p class="p">Add to cart</p>
      <img class="arrow" src="img/arrowpng.parspng.com_.png" />
    </button>`;
    newDiv.appendChild(buttonAdd)
    productsDisplay.push(newDiv)
    const currentDiv=document.getElementById("card")
    document.querySelector('.wrapProducts').insertBefore(newDiv, currentDiv);
    
   
  
  }
  cardCreate("img/rippleP2.png","Ripple Dairy-free Half&Half Soy","5.55$");
  cardCreate("img/rippleP3.png",`Ripple Dairy-free`+`\n`+'Half&Half 0% fat',"4.55$");
  cardCreate("img/rippleP5.png","Ripple Dairy-free Half&Half 3% fat","3.75$");
  cardCreate("img/rippleP4.png","Ripple Dairy-free Half&Half EggWhite","7.59$");
  cardCreate("img/rippleP5.png","Ripple Dairy-free Half&Half Vegan","6.25$");
  cardCreate("img/rippleP2.png","Ripple Dairy-free Half&Half Coconut","2.65$");
  cardCreate("img/rippleP4.png","Ripple Dairy-free Half&Half Macadamia","8.35$");
  cardCreate("img/rippleP3.png","Ripple Dairy-free Half&Half Hazelnut","9.65$");
  cardCreate("img/rippleP3.png","Ripple Dairy-free Half&Half Goat","9.85$");
  
  
  lastProds.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target){
    let lastProdArray=[];
     if (Object.keys(productsDisplay).length===productsDisplay.length){
      lastProdArray.push(productsDisplay.slice(3,6));
      console.log(lastProdArray);
      productsDisplay.forEach(function(element){
        element.style.display='none'
      })
      lastProdArray[0].forEach(function(element){
        element.style.display=''
      })
      
     }
     
  }
    // element.children[2].textContent;
  })
  expensiveProds.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target){
      let lastProdArray=[];
       if (Object.keys(productsDisplay).length===productsDisplay.length){
        lastProdArray.push(productsDisplay.slice(-3));
        console.log(lastProdArray);
        productsDisplay.forEach(function(element){
          element.style.display='none'
        })
        lastProdArray[0].forEach(function(element){
          element.style.display=''
        })
        
       }
       
    }
      // element.children[2].textContent;
    })
  
  allProds.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target){
      productsDisplay.forEach(function(element){
        element.style.display=''
      })
    }
  })
}



// productsDisplay.forEach(function(element){
//   console.log(element.children[2].outerText)
// })



/////////////////////////////////// !PRODUCT PAGE
if ( document.URL.includes("index.html")){
  loader.style.opacity='100%'
  loader.style.display='flex'
  navBar.style.opacity='10%'
  background.style.opacity='10%'
  document.querySelector('.SearchLogo').style.opacity='10%'
  document.querySelector('.titles').style.display='none'
  document.querySelector('.research').style.opacity='10%'
  setTimeout(function(){
    if(loader){
      setTimeout(function(){
        loader.style.display='none'
        navBar.style.opacity='100%'
        background.style.opacity='100%'
        document.querySelector('.SearchLogo').style.opacity='100%'
        document.querySelector('.titles').style.display='flex'
        document.querySelector('.research').style.opacity='100%'
      },2500)
    }
  },0)
  
  background.addEventListener('mouseover',function(e){
    e.preventDefault();
    setTimeout(function(){
      myLinks.classList.remove('active')
      myLinks.classList.add('justNone')
      hamburger.classList.remove('justNone')
    },1000)
    hamburger.classList.add('active')
  
  })
  cart.addEventListener('click',function(e){
    e.preventDefault(e);
    window.alert("Nu poti accesa shop-ul daca nu te-ai logat. Mergi intai pe pagina de Log In");
    setTimeout(function(){document.location.href = "/login.html"},1000);

   })
  
  carouselLeft.addEventListener('mouseover',function(e){
      e.preventDefault();
      carouselLeft.style.animationPlayState = "paused";
  })
  carouselLeft.addEventListener('mouseout',function(e){
      e.preventDefault();
      carouselLeft.style.animationPlayState = "running";
  })
  carouselRight.addEventListener('mouseover',function(e){
      e.preventDefault();
      carouselRight.style.animationPlayState = "paused";
  })
  carouselRight.addEventListener('mouseout',function(e){
      e.preventDefault();
      carouselRight.style.animationPlayState = "running";
  })
  btnTwo.addEventListener('click',function(e){
      e.preventDefault();
      console.log(e.target);
      if(e.target){
      review1.classList.remove('active')
      review1.classList.add('none');
      review2.classList.remove('none');
      review2.classList.add('active');
      logoOne.classList.add('none');
      logoTwo.classList.remove('none')
      logoTwo.classList.add('active')
      }
      
  
  })
  btnOne.addEventListener('click',function(e){
      e.preventDefault();
      console.log(e.target);
      if(e.target){
          review2.classList.remove('active')
          review2.classList.add('none');
          review1.classList.remove('none');
          review1.classList.add('active');
          logoTwo.classList.add('none');
          logoOne.classList.remove('none')
          logoOne.classList.add('active')
          }
  })
  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    // Do something with the scroll position
  }
  
  document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition)
  //   background.style.borderRadius='0%';
    if (450>window.scrollY){
      background.style.opacity='100%'
    }
    else{
      background.style.opacity='10%';
    }
    if(window.scrollY>450 && window.scrollY<700){
      
      containerCar.classList.remove('none')
      containerCar.style.opacity='100%'
      containerCar.classList.add('fade');
      containerCar2.classList.remove('none')
      containerCar2.style.opacity='100%'
      containerCar2.classList.add('fade');
    }
    if(window.scrollY>1000){
      infoSection.style.opacity='100%';
      infoSection.classList.remove('none');
      infoSection.classList.add('active');
      infoSection.classList.add('fade');
    }
    if(window.scrollY>1400){
      img.style.opacity='100%';
      img.classList.remove('none');
      img.classList.add('active');
      img.classList.add('fade');
    }
    if(window.scrollY>1800){
      sectionValue.style.opacity='100%';
      sectionValue.classList.remove('none');
      sectionValue.classList.add('active');
      sectionValue.classList.add('fade');
    }
    if(window.scrollY>2600){
      sectionLast.style.opacity='100%';
      sectionLast.classList.remove('none');
      sectionLast.classList.add('active');
      sectionLast.classList.add('fade');
    }
    if(window.scrollY>3400){
      container.style.opacity='100%';
      container.classList.remove('none');
      container.classList.add('active');
      container.classList.add('fade');
    }
  
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });
  
  
  
}
window.addEventListener('scroll',function(e){
  e.preventDefault();
  console.log(e.target);
})
button.addEventListener('click',function(e){
e.preventDefault();
navBar.scrollIntoView({behavior: 'smooth'});
})
elementFooter1.addEventListener('click',function(e){
e.preventDefault();
infoSection.scrollIntoView({behavior: 'smooth'});
})
elementFooter2.addEventListener('click',function(e){
e.preventDefault();
sectionLast.scrollIntoView({behavior: 'smooth'});
})
// elementFooter3.addEventListener('click',function(e){
//   e.preventDefault();
//   sectionLast.scrollIntoView({behavior: 'smooth'});
// }) DE ADAUGAT FORMULAR PE PAGINA NOUA!!

let str=''
let btnArray=[];
productsDisplay.forEach(function(element){
  btnArray.push(element.lastChild.firstElementChild)
})
btnArray.forEach(function(element){
  element.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target){
      // currentCart.push(element.parentElement.parentElement.textContent);
      currentCart.push(element.parentElement.parentElement.childNodes[1].innerText);
      
console.log(JSON.stringify(currentCart).replace(`[`, ' ').replace(']',','));
      list.textContent=JSON.stringify(currentCart).replace('[','').replace(']','');
      document.querySelector('.productsTotal').textContent=currentCart.length+' produse in total '
      }
    // if (e.target){
    //   currentCart.push(element.parentElement.parentElement.textContent);
    // }
    // currentCart.forEach(function(element,index){
    //   list.textContent=`${index}. ${element} is in cart.`
      
    // })
 
      
      
    })
  })


  cart.addEventListener('click',function(e){
    e.preventDefault(e);
    if(e.target.tagName==='IMG'){
      document.querySelector('.cartList').style.display='initial'
    }
    else if(!e.target==='IMG') {
      document.querySelector('.cartList').style.display='none'
    }
    else {
      console.log('da')
    }
    
      
   })


