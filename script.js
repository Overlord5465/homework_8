window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button");
  b.addEventListener("click", onClick);
  defaultValues();
});

const para2 = document.querySelector('#answer');

function onClick(event) {
  event.preventDefault();
  let f1 = document.getElementsByName("field1");
  if(f1[0].value<=100 && f1[0].value>=1)
    para2.textContent = f1[0].value * parseInt(para.textContent) +" рублей.";
  else
    para2.textContent = "Ошибка\n"+ f1[0].value + "∉[1;100]";
}

const select = document.querySelector('#product');
const para = document.querySelector('#value');

select.addEventListener('change', setProduct);

function setProduct(event) {
  event.preventDefault();
  const choice = select.value;

  if (choice === 'Конфета') {
    para.textContent = '5 рублей';
  } else if (choice === 'Булочка') {
    para.textContent = '30 рублей';
  } else if (choice === 'Батончик') {
    para.textContent = '50 рублей';
  } else if (choice === 'Плитка шоколада') {
    para.textContent = '100 рублей';
  } else if (choice === 'Торт'){
    para.textContent = '300 рублей';
  }
}

//------------------------------------------------------------------------------

const parent = document.querySelector('#parent');
const drink1 = document.querySelector('#drink1');
const drink2 = document.querySelector('#drink2');
const drink3 = document.querySelector('#drink3');

drink1.addEventListener('change', createChild1);
drink2.addEventListener('change', createChild2);
drink3.addEventListener('change', createChild3);

function createChild1() {
  deleteChild();

  let box = document.createElement("div");
  box.id = "box";
  parent.appendChild(box);
  
  end(box);
  
}

function createChild2() {
  deleteChild();

  let box = document.createElement("div");
  box.id = "box";
  parent.appendChild(box);

  let child0 = document.createElement("p");
  child0.id="coffee";
  child0.textContent="У нас в ассортименте имеются следующие добавки: ";
  box.appendChild(child0);

  ////////

  let child10 = document.createElement("span");
  child10.textContent="Молоко(+20 рублей)";
  box.appendChild(child10);

  let child1 = document.createElement("input");
  child1.id = "check1";
  child1.setAttribute("type", "checkbox");
  box.appendChild(child1);

  let child11 = document.createElement("br");
  box.appendChild(child11);

  /////////

  let child20 = document.createElement("span");
  child20.textContent="Шоколад(+30 рублей)";
  box.appendChild(child20);

  let child2 = document.createElement("input");
  child2.id = "check2";
  child2.setAttribute("type", "checkbox");
  box.appendChild(child2);

  let child21 = document.createElement("br");
  box.appendChild(child21);

  /////////


  let child30 = document.createElement("span");
  child30.textContent="Зефир(+25 рублей)";
  box.appendChild(child30);

  let child3 = document.createElement("input");
  child3.id = "check3";
  child3.setAttribute("type", "checkbox");
  box.appendChild(child3);

  let child31 = document.createElement("br");
  box.appendChild(child31);

  end(box);

}

function createChild3() {
  deleteChild();

  let box = document.createElement("div");
  box.id = "box";
  parent.appendChild(box);

  let child0 = document.createElement("span");
  child0.textContent="Выберите вкус: ";
  box.appendChild(child0);

  let child = document.createElement("select");
  child.id="select00";
  box.appendChild(child);
  let option1 = document.createElement("option");
  child.appendChild(option1);
  option1.text="Яблочный";
  let option2 = document.createElement("option");
  child.appendChild(option2);
  option2.text="Апельсиновый";
  let option3 = document.createElement("option");
  child.appendChild(option3);
  option3.text="Персиковый";
  let option4 = document.createElement("option");
  child.appendChild(option4);
  option4.text="Виноградный";

  let child1 = document.createElement("span");
  child1.id="valueJuice";
  child1.textContent=" 30 рублей";
  box.appendChild(child1);

  child.addEventListener('change', setValueJuice);

  end(box);
}


function setValueJuice() {

  let select = document.querySelector("#select00");
  let para= document.querySelector("#valueJuice");

  const choice = select.value;

  if (choice === 'Яблочный') {
    para.textContent = ' 30 рублей';
  } else if (choice === 'Апельсиновый') {
    para.textContent = ' 40 рублей';
  } else if (choice === 'Персиковый') {
    para.textContent = ' 50 рублей';
  } else if (choice === 'Виноградный') {
    para.textContent = ' 60 рублей';
  }
}

function end(box){

  let child30 = document.createElement("br");
  box.appendChild(child30);
  let child31 = document.createElement("br");
  box.appendChild(child31);

  let child0 = document.createElement("span");
  child0.textContent="Сколько стаканов налить?";
  box.appendChild(child0);

  let child = document.createElement("input");
  child.setAttribute("type","number");
  child.setAttribute("name","field2");
  child.setAttribute("min","1");
  child.setAttribute("max","10");
  child.setAttribute("value","1");
  box.appendChild(child);

  let child2 = document.createElement("button");
  child2.id = "button2";
  child2.textContent="Посчитать";
  box.appendChild(child2);

  let child1 = document.createElement("p");
  child1.id="result00";
  child1.textContent="";
  box.appendChild(child1);

  child2.addEventListener("click", onClick2);
}

function deleteChild() {
  if(document.querySelector("#box"))
    parent.removeChild(document.querySelector("#box"));
}

function onClick2(event) {
  event.preventDefault();

  if(document.querySelector("#select00")){

    let para= document.querySelector("#valueJuice");
    let para2 = document.getElementById("result00")
    let f1 = document.getElementsByName("field2");
    if(f1[0].value<=10 && f1[0].value>=1)
      para2.textContent = "Итого с вас: " + f1[0].value * parseInt(para.textContent) +" рублей.";
    else
      para2.textContent = "Ошибка\n"+ f1[0].value + "∉[1;10]";

  } else if(document.querySelector("#coffee")){
    let para11= document.querySelector("#check1");
    let para22= document.querySelector("#check2");
    let para33= document.querySelector("#check3");
    let para2 = document.getElementById("result00")
    let f1 = document.getElementsByName("field2");
    if(f1[0].value<=10 && f1[0].value>=1)
      para2.textContent = "Итого с вас: " + f1[0].value * ( 
        100+
        20*para11.checked+
        30*para22.checked+
        25*para33.checked
        ) +" рублей.";
    else
      para2.textContent = "Ошибка\n"+ f1[0].value + "∉[1;10]";
  } else{
    let para2 = document.getElementById("result00")
    let f1 = document.getElementsByName("field2");
    if(f1[0].value<=10 && f1[0].value>=1)
      para2.textContent = "Итого с вас: " + f1[0].value * 10 +" рублей.";
    else
      para2.textContent = "Ошибка\n"+ f1[0].value + "∉[1;10]";
  }

}

//------------------------------------------------------------------------------

if(window.innerWidth>400){
  createImages();
  createPoint3();
}

if(window.innerWidth<=400){
  createImage();
  createPoint8();
}

function createImages() {
  
  let gallery = document.querySelector("#gallery")
  let img1 = document.createElement("img");
  img1.id = "window_1";
  img1.setAttribute("src" , "./images/number_1.jfif");

  let img2 = document.createElement("img");
  img2.id = "window_2";
  img2.setAttribute("src" , "./images/number_2.jfif");

  let img3 = document.createElement("img");
  img3.id = "window_3";
  img3.setAttribute("src" , "./images/number_3.jfif");

  let button = document.createElement("button");
  button.id = "button_left";
  button.classList="";// надо класс дописать
  gallery.appendChild(button);
  button.addEventListener("click", onClick_left);

  gallery.appendChild(img1);
  gallery.appendChild(img2);
  gallery.appendChild(img3);

  let button2 = document.createElement("button");
  button2.id = "button_right";
  button2.classList="";// надо класс дописать
  gallery.appendChild(button2);
  button2.addEventListener("click", onClick_right);
}
function createImage() {
  
  let gallery = document.querySelector("#gallery")
  let img1 = document.createElement("img");
  img1.id = "window_1";
  img1.setAttribute("src" , "./images/number_1.jfif");

  let button = document.createElement("button");
  button.id = "button_left";
  button.classList="";// надо класс дописать
  gallery.appendChild(button);
  button.addEventListener("click", onClick_left_2);

  gallery.appendChild(img1);

  let button2 = document.createElement("button");
  button2.id = "button_right";
  button2.classList="";// надо класс дописать
  gallery.appendChild(button2);
  button2.addEventListener("click", onClick_right_2);
}
function createPoint3(){
  let points = document.querySelector("#points")
  let point1 = document.createElement("div");
  point1.id = "point_1";
  points.appendChild(point1);
  point1.setAttribute("class","temp_point");

  let point2 = document.createElement("div");
  point2.id = "point_2";
  points.appendChild(point2);

  let point3 = document.createElement("div");
  point3.id = "point_3";
  points.appendChild(point3);

}
function createPoint8(){
  let points = document.querySelector("#points")
  let point1 = document.createElement("div");
  point1.id = "point_1";
  points.appendChild(point1);
  point1.setAttribute("class","temp_point");

  let point2 = document.createElement("div");
  point2.id = "point_2";
  points.appendChild(point2);

  let point3 = document.createElement("div");
  point3.id = "point_3";
  points.appendChild(point3);

  let point4 = document.createElement("div");
  point4.id = "point_4";
  points.appendChild(point4);

  let point5 = document.createElement("div");
  point5.id = "point_5";
  points.appendChild(point5);

  let point6 = document.createElement("div");
  point6.id = "point_6";
  points.appendChild(point6);

  let point7 = document.createElement("div");
  point7.id = "point_7";
  points.appendChild(point7);

  let point8 = document.createElement("div");
  point8.id = "point_8";
  points.appendChild(point8);

}

function onClick_right(event) {
  event.preventDefault();
  let img1 = document.querySelector("#window_1");
  let img2 = document.querySelector("#window_2");
  let img3 = document.querySelector("#window_3");
  let point1 = document.querySelector("#point_1")
  let point2 = document.querySelector("#point_2")
  let point3 = document.querySelector("#point_3")
  if(img1.getAttribute("src")==="./images/number_1.jfif"){
    img1.setAttribute("src","./images/number_4.jfif");
    img2.setAttribute("src","./images/number_5.jfif");
    img3.setAttribute("src","./images/number_6.jfif");
    point1.setAttribute("class","");
    point2.setAttribute("class","temp_point");

  } else if(img1.getAttribute("src")==="./images/number_4.jfif"){
    img1.setAttribute("src","./images/number_7.jfif");
    img2.setAttribute("src","./images/number_8.jfif");
    img3.setAttribute("src","./images/number_9.png");
    point2.setAttribute("class","");
    point3.setAttribute("class","temp_point");
  }
}
function onClick_left(event) {
  event.preventDefault();
  let img1 = document.querySelector("#window_1");
  let img2 = document.querySelector("#window_2");
  let img3 = document.querySelector("#window_3");
  let point1 = document.querySelector("#point_1")
  let point2 = document.querySelector("#point_2")
  let point3 = document.querySelector("#point_3")
  if(img1.getAttribute("src")==="./images/number_4.jfif"){
    img1.setAttribute("src","./images/number_1.jfif");
    img2.setAttribute("src","./images/number_2.jfif");
    img3.setAttribute("src","./images/number_3.jfif");
    point2.setAttribute("class","");
    point1.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_7.jfif"){
    img1.setAttribute("src","./images/number_4.jfif");
    img2.setAttribute("src","./images/number_5.jfif");
    img3.setAttribute("src","./images/number_6.jfif");
    point3.setAttribute("class","");
    point2.setAttribute("class","temp_point");
  }

}

function onClick_right_2(event) {
  event.preventDefault();
  let img1 = document.querySelector("#window_1");
  let point1 = document.querySelector("#point_1")
  let point2 = document.querySelector("#point_2")
  let point3 = document.querySelector("#point_3")
  let point4 = document.querySelector("#point_4")
  let point5 = document.querySelector("#point_5")
  let point6 = document.querySelector("#point_6")
  let point7 = document.querySelector("#point_7")
  let point8 = document.querySelector("#point_8")
  if(img1.getAttribute("src")==="./images/number_1.jfif"){
    img1.setAttribute("src","./images/number_2.jfif");
    point1.setAttribute("class","");
    point2.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_2.jfif"){
    img1.setAttribute("src","./images/number_3.jfif");
    point2.setAttribute("class","");
    point3.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_3.jfif"){
    img1.setAttribute("src","./images/number_4.jfif");
    point3.setAttribute("class","");
    point4.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_4.jfif"){
    img1.setAttribute("src","./images/number_5.jfif");
    point4.setAttribute("class","");
    point5.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_5.jfif"){
    img1.setAttribute("src","./images/number_6.jfif");
    point5.setAttribute("class","");
    point6.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_6.jfif"){
    img1.setAttribute("src","./images/number_7.jfif");
    point6.setAttribute("class","");
    point7.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_7.jfif"){
    img1.setAttribute("src","./images/number_8.jfif");
    point7.setAttribute("class","");
    point8.setAttribute("class","temp_point");
  } 
}
function onClick_left_2(event) {
  event.preventDefault();
  let img1 = document.querySelector("#window_1");
  let point1 = document.querySelector("#point_1")
  let point2 = document.querySelector("#point_2")
  let point3 = document.querySelector("#point_3")
  let point4 = document.querySelector("#point_4")
  let point5 = document.querySelector("#point_5")
  let point6 = document.querySelector("#point_6")
  let point7 = document.querySelector("#point_7")
  let point8 = document.querySelector("#point_8")
  if(img1.getAttribute("src")==="./images/number_8.jfif"){
    img1.setAttribute("src","./images/number_7.jfif");
    point8.setAttribute("class","");
    point7.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_7.jfif"){
    img1.setAttribute("src","./images/number_6.jfif");
    point7.setAttribute("class","");
    point6.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_6.jfif"){
    img1.setAttribute("src","./images/number_5.jfif");
    point6.setAttribute("class","");
    point5.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_5.jfif"){
    img1.setAttribute("src","./images/number_4.jfif");
    point5.setAttribute("class","");
    point4.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_4.jfif"){
    img1.setAttribute("src","./images/number_3.jfif");
    point4.setAttribute("class","");
    point3.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_3.jfif"){
    img1.setAttribute("src","./images/number_2.jfif");
    point3.setAttribute("class","");
    point2.setAttribute("class","temp_point");
  } else if(img1.getAttribute("src")==="./images/number_2.jfif"){
    img1.setAttribute("src","./images/number_1.jfif");
    point2.setAttribute("class","");
    point1.setAttribute("class","temp_point");
  } 
}

//------------------------------------------------------------------------------

const caption = document.querySelector('#caption');
const feedback_form = document.querySelector('#feedback_form');
const submit_final = document.querySelector('#submit_final');
const applicantForm = document.getElementById('last_form');


submit_final.addEventListener('click', onClick_3);
caption.addEventListener('click', changeStyle1);

function changeStyle1(){
  console.log("Функция сработала");
  if(feedback_form.getAttribute("id") ==="feedback_form"){
    history.pushState(null, null, '#feedback_form');
    feedback_form.setAttribute("id","feedback_form_off");
  } else {
    history.pushState(null, null, '#feedback_form_off');
    feedback_form.setAttribute("id","feedback_form");
  }
}

function changeStyle2(){
  console.log("Функция сработала");
  if(feedback_form.getAttribute("id") ==="feedback_form"){
    feedback_form.setAttribute("id","feedback_form_off");
  } else {
    feedback_form.setAttribute("id","feedback_form");
  }
}

function onClick_3(event) {
  //event.preventDefault();
  if(applicantForm.checkValidity()){
    event.preventDefault();
    alert("Данные успешно отправлены.");
    localStorage.clear();
    clear();
  }
}
window.addEventListener('hashchange',changeStyle2);

const input_1 = document.querySelector("#input_1");
const input_2 = document.querySelector("#input_2");
const input_3 = document.querySelector("#input_3");
const input_4 = document.querySelector("#input_4");
const input_5 = document.querySelector("#input_5");

function handler(event) {
  localStorage.setItem("input_1", input_1.value);
  localStorage.setItem("input_2", input_2.value);
  localStorage.setItem("input_3", input_3.value);
  localStorage.setItem("input_4", input_4.value);
  localStorage.setItem("input_5", input_5.checked);
}

function defaultValues(){
  let value_1 = localStorage.getItem("input_1");
  let value_2 = localStorage.getItem("input_2");
  let value_3 = localStorage.getItem("input_3");
  let value_4 = localStorage.getItem("input_4");
  let value_5 = localStorage.getItem("input_5");
  if(value_1!==null) input_1.value = value_1;
  if(value_2!==null) input_2.value = value_2;
  if(value_3!==null) input_3.value = value_3;
  if(value_4!==null) input_4.value = value_4;
  if(value_5!==null){
    if(value_5 == "true") input_5.checked = value_5;
    else input_5.checked = null;
  } 
}
function clear(){
  input_1.value = "";
  input_2.value = "";
  input_3.value = "";
  input_4.value = "";
  input_5.checked = null;
}

input_1.addEventListener('change', handler);
input_2.addEventListener('change', handler);
input_3.addEventListener('change', handler);
input_4.addEventListener('change', handler);
input_5.addEventListener('change', handler);