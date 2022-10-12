var dollar = 750;
var euro = 120;
var dollarKurs = 10966 * dollar;
var euroKurs = 11181 * euro;
var sum = dollarKurs + euroKurs;
var heading = document.querySelector(".heading");
var money = Number(prompt("pulingizni kiriting"));
if(money >= sum){
    heading.textContent = "Oq yo'l, Jonibek";
}else{
    heading.textContent = "Uyda o'tir";
}
