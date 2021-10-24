'use strict';
//----Получение элементов со страницы-----
const box = document.getElementById('box');  //Получение html элемента по id 
console.log(box);
console.dir(box);

const btns = document.getElementsByTagName('button'); //получение элементов по имени тега, получаем коллекцию
console.log(btns);
const btns1 = document.getElementsByTagName('button');  // получаем второй элемент коллекции
console.log(btns1[2]);  // либо можно указать тут номер элемента коллекции

const circles = document.getElementsByClassName('circle');  //получаем элемент по классу
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //указываем сss селектор: уникальный идентификатор через решетку, 
                                                    //класс, вложенность класса, псевдоклассы, атрибуты, комбинации.  Точка указывает пренадлежность к классу    
console.log(hearts);  // Получаем html коллекцию

hearts.forEach(item => {     // в методе forEach в качестве аргумента передаем callback функциюю
    console.log(item);     //  item элемента html коллекции
}); 

const oneHeart = document.querySelector('.heart');  //Получаем первый элемент в классе heart
console.log(oneHeart); 

const onediv = document.querySelector('div'); //получаем первый div элемент со страницы
console.log(onediv); 

//----Действие с элементами на странице-----
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';   // прописываем стили в формате css. Одно и тоже что две строчки выше
//box.style.cssText = `background-color: blue; width: ${num}px`;   // пердаем ширину из переменной

// инлайн стили приорететнее css, поэтому мы видим изменения
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {      //   перебор всех элементов превдо массива 
//     hearts[i].style.backgroundColor = 'blue'; 
// }
hearts.forEach (item => {
    item.style.backgroundColor = 'blue'; 
})

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
