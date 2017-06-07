const foodForm = document.querySelector('form')
const obj={};

function foodClick(ev) {
    ev.preventDefault()
    //const formArea = ev.target
    console.log(ev.target)
    const list = document.querySelector('ul')
    const newFood = foodForm.food.value
//listAdder(list, newFood)
listMaker(newFood,list)
}
function listMaker(newFood,list){
const objec={}
const old=list.querySelectorAll('div')
const newer=document.createElement('ul')
listAdder(newer,newFood)
console.log(old[0]);
console.log(old.length)
for(let i=0;i<old.length;i++){
newer.appendChild(old[i])

}
list.remove()
document.querySelector('body').appendChild(newer)
console.log(newer)

}




function listAdder(list,newFood) {
const listPiece=document.createElement('div')//('li')
const but =document.createElement('button')
but.style.width='70px'
but.style.height='70px'
but.textContent='GOOD?'
but.class=newFood
const deleateBut =document.createElement('button')
deleateBut.style.width='100px'
deleateBut.style.height='70px'
deleateBut.textContent='DELEATE?'
deleateBut.class=newFood

//but.type=newFood //'foodie'

//but.onclick=changeColor()
listPiece.class=newFood
listPiece.textContent=newFood
listPiece.appendChild(but)
listPiece.appendChild(deleateBut)
listPiece.class=newFood
//listPiece.addEventListener('click',changeColor)

//list.addEventListener('click',changeColor)
list.appendChild(listPiece)
but.addEventListener('click',changeColor)
deleateBut.addEventListener('click',had)
console.log(but.type)
}

function had(ev){
    const list = document.querySelector('ul')
const del=ev.target
console.log(del.class)
console.log(document.querySelector('ul'))
const doc=document.querySelector('ul')
console.log(doc.querySelectorAll('div'))
const jad=doc.querySelectorAll('div')
for(let i=0; i<jad.length;i++){
   
    console.log(jad[i].class);
   if(jad[i].class===del.class){
jad[i].remove()
   } 
}
//debugger
}

function changeColor(ev){
const list = document.querySelector('ul')
const del=ev.target
console.log(del.class)
console.log(document.querySelector('ul'))
const doc=document.querySelector('ul')
console.log(doc.querySelectorAll('div'))
const jad=doc.querySelectorAll('div')
for(let i=0; i<jad.length;i++){
   
    console.log(jad[i].class);
   if(jad[i].class===del.class){
     const butter=jad[i].querySelector('button')
     if(jad[i].style.backgroundColor==='green'){
         butter.textContent='Meh'
jad[i].style.backgroundColor='red'}
else{
     butter.textContent='Good'
 jad[i].style.backgroundColor='green'   
 
}
   } }

}

function changeColo(ev){
//console.log('.'+ev.target.class)
const doc = ev.target
//doc=document.querySelector('.'+ev.target.class)
//console.log(doc)
if(doc.style.backgroundColor==='blue'){
doc.style.backgroundColor = 'red'
}
else{
doc.style.backgroundColor = 'blue'

}

//console.log(document)

}

foodForm.addEventListener('submit', foodClick)
