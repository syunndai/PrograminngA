'use strict';
 let jsbook = {title:'JavaScript入門',price:2500,stock:3};

 /*console.log(jsbook);
 console.log(jsbook.title);
 console.log(jsbook['price']);
 jsbook.stock =10;
 console.log(jsbook.stock);*/
document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;
