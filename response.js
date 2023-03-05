
let mysit=document.querySelector('.fa-gear');
console.log(mysit)
document.querySelector('.togg').onclick= function() {
mysit.classList.toggle('fa-spin')
document.querySelector('.sitt').classList.toggle('open')
}
let mycolor=localStorage.getItem('color-option');

 if(mycolor!== null){
    document.documentElement.style.setProperty('--main-color',mycolor)
    document.querySelectorAll('.sitt .color-list li').forEach((ele)=>{
        ele.classList.remove('active');
        
        if(ele.dataset.color === mycolor){
            ele.classList.add('active')
        
        }
    })  
 }

const myli=document.querySelectorAll('.sitt .option li');
myli.forEach(li=>{

    li.addEventListener('click',(e)=>{

document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
localStorage.setItem('color-option',e.target.dataset.color)
e.target.parentElement.querySelectorAll('.active').forEach(Element=>{
    Element.classList.remove('active');
    e.target.classList.add('active')
})
    })
})
/*background*/
let backgroundvar=true,
img;
let localback=localStorage.getItem('back-option');
if(localback !== null){
    document.querySelectorAll('.rondom span').forEach(e=>{
        e.classList.remove('active')
    })
    if(localback === 'true'){
        backgroundvar=true
        document.querySelector('.yes').classList.add('active')

    }else{
        backgroundvar=false
        document.querySelector('.no').classList.add('active')
    }
    
    
}
document.querySelectorAll('.sitt .rondom span').forEach((ele)=>{
    
    ele.addEventListener('click',(e)=>{
        e.target.parentElement.querySelectorAll('.active').forEach(e=>{e.classList.remove('active')});
        e.target.classList.add('active')
        if(e.target.dataset.background == 'yes'){
backgroundvar=true;
background()
localStorage.setItem('back-option',true)
        }else{
            backgroundvar=false;
            clearInterval(img)
            localStorage.setItem('back-option',false)
        }
    })
    
    
    }
)  


let landing=document.querySelector('.landing'),
arryimg=['nature2.jpg','nature3.jpg','nature4.jpg','nature5.jpg','nature.jpg'];


// make rondom background
function background(){
    if(backgroundvar == true){
     img=setInterval(()=>{
    let rondomE=Math.floor(Math.random()* arryimg.length);
    landing.style.backgroundImage='url(image/'+arryimg[rondomE]+')'
},3000)}}
background()
/*start skills*/
let myskills=document.querySelector('.skills');
window.onscroll=function(){
    let myskillofset=myskills.offsetTop;
   let  myskillouter=myskills.offsetHeight;
let windowhight=this.innerHeight;
let windowscroll=this.pageYOffset;
console.log(windowhight)
console.log(windowscroll)
console.log(myskillofset)
console.log(myskillouter)
    if(windowscroll > (myskillofset+myskillouter-windowhight)){
      let myspan= document.querySelectorAll('.skills .skill-box .prog span');
      myspan.forEach(span=>{
        span.style.width=span.dataset.pro
        })
    }
}
/* start gallery*/
let image=document.querySelectorAll('.gallery img');
image.forEach((img)=>{
    img.addEventListener('click',()=>{
        let myoverlay=document.createElement('div');
        myoverlay.className='popup-lay';
        document.body.appendChild(myoverlay)
        let mypopupbox=document.createElement('div');
        mypopupbox.className='pop-box';
        let myimage=document.createElement('img');
        myimage.src=img.src;
        if(img.alt !== ''){
            let heading=document.createElement('h3'),
            textno=document.createTextNode(img.alt);
            heading.appendChild(textno);
            mypopupbox.appendChild(heading)
        }
        document.URL.onclick=function(){
            console.log('hello')
        }
       mypopupbox.appendChild(myimage)
       document.body.appendChild(mypopupbox)
let close=document.createElement('span'),
closetx=document.createTextNode('x');
close.append(closetx)
close.className='close-bu';
mypopupbox.appendChild(close)
    })
})
document.addEventListener('click',function(e){
    if(e.target.className == 'close-bu'){
e.target.parentElement.remove()
document.querySelector('.popup-lay').remove()}

})
// start nav
let mybullit=document.querySelectorAll('.bullits');
// mybullit.forEach((ele)=>{
//     ele.addEventListener('click',(e)=>{
//         document.querySelector(e.target.dataset.sec).scrollIntoView({
//             behavior: 'smooth'
//         })
//     })
// })
gotoexactplace(mybullit)
let mylink=document.querySelectorAll('.landing .links a');

function gotoexactplace(e){
    e.forEach((ele)=>{
        ele.addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.sec).scrollIntoView({
            behavior:'smooth'
        })})
    })
}
gotoexactplace(mylink)
function makeactive(e){
    e.target.parentElement.querySelectorAll('.active').forEach(e=>{e.classList.remove('active')});
    e.target.classList.add('active')
}
//bullit
let mybullitspan=document.querySelectorAll('.sitt .option .bullit span');
let mynav=document.querySelector('.nav');
let localbullit=localStorage.getItem('bullit-op');
if(localbullit !== null){
    mybullitspan.forEach(ele=>{
        ele.classList.remove('active')
    })
if(localbullit == 'block'){
    mynav.style.display='block';
   
    document.querySelector('.sitt .option .bullit .yes').classList.add('active')
}else{
    mynav.style.display='none'
    document.querySelector('.sitt .option .bullit .no').classList.add('active')
}
}
mybullitspan.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
  makeactive(e);
  if(e.target.dataset.bullit == 'yes'){
    mynav.style.display='block';
    localStorage.setItem('bullit-op','block')

  }else{
    mynav.style.display='none'
    localStorage.setItem('bullit-op','none')
  }      
    })
})
//reset 
document.querySelector('.sitt .reset').onclick=function(){
    localStorage.clear();
    // if you wnat to clear som option you can use
    // localStorage.removeItem('bullit-op')
    window.location.reload()
}
// toogle menue
let mytoggle=document.querySelector('.toggle'),
mylinksul=document.querySelector('.links');
mytoggle.onclick=function(e){
    e.stopPropagation()
if(mylinksul.classList.contains('open')){
    mylinksul.classList.remove('open')
    mytoggle.classList.remove('acti')
}else{
    mylinksul.classList.add('open')
    mytoggle.classList.add('acti')
}
}
document.addEventListener('click',function(e){
    if(e.target !== mytoggle && e.target !== mylinksul ){
        if(mylinksul.classList.contains('open')){
            mylinksul.classList.remove('open')
            mytoggle.classList.remove('acti')}  
    }
})
document.onkeydown=function(){
    if(mylinksul.classList.contains('open')){
        mylinksul.classList.remove('open')
        mytoggle.classList.remove('acti')
    } 
}
mylinksul.onclick=function(e){
    e.stopPropagation()
}