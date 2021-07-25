"use strict";
let myForm=document.getElementById('myForm')
let tabelBody=document.getElementById('tBody')
let books=[];

readingFromLocalStorage();
console.log(books);
// tabelBody='';
// for (let i = 0; i < books.length; i++) {

//     books[i].render();
    
// }
render();


function Book(bookName,price,pages){
    this.bookName=bookName;
    this.price=price;
    this.pages=pages;
    books.push(this);
    settingToLocalStorage();

}

function settingToLocalStorage (){
   let  data=JSON.stringify(books);
    localStorage.setItem('allBooks',data)
}

function readingFromLocalStorage(){
    let data=localStorage.getItem('allBooks');
    let realObject=JSON.parse(data);

    if(realObject !==null){
    for (let i = 0; i < realObject.length; i++) {
       let newBook= new Book(realObject[i].bookName,realObject[i].price,realObject[i].pages); 
      
        
    }}


}

// Book.prototype.render=function(){
//     let trEl=document.createElement("tr");
//     let tdEl1=document.createElement("td");
//     let tdEl2=document.createElement("td");
//     let tdEl3=document.createElement("td");

//     tdEl1.textContent=this.bookName;
//     tdEl2.textContent=this.pages;
//     tdEl3.textContent=this.price;

//     console.log(tdEl3);

//     trEl.appendChild(tdEl1);
//     trEl.appendChild(tdEl2);
//     trEl.appendChild(tdEl3);
//     tabelBody.appendChild(trEl);

// }
function render(){
    tabelBody.innerHTML='';

for (let i = 0; i < books.length; i++) {
   

    let trEl=document.createElement("tr");
    let tdEl1=document.createElement("td");
    let tdEl2=document.createElement("td");
    let tdEl3=document.createElement("td");

    tdEl1.textContent=books[i].bookName;
    tdEl2.textContent=books[i].pages;
    tdEl3.textContent=books[i].price;

    console.log(tdEl3);

    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tabelBody.appendChild(trEl);


}}




function submitHandler (event){
    event.preventDefault();
    let bookName=event.target.bookName.value;
    let bookPrice=event.target.price.value;
    
    let pages=Math.floor(Math.random() * 500) + 1;


    let bookEl=new Book(bookName,bookPrice,pages);
    render();

}

myForm.addEventListener('submit',submitHandler)

