# ITGIRLschool_JS_Week_10

Теоретические вопросы
1. Какие есть способы объявления функций?
- Function Declaration
- Function Expression
- Стрелочная функция

2. Приведите примеры вызова одной и той же функции всеми известными вам способами.
Function Declaration
function sum(a, b) {
    return a + b;
}

Function Expression
const sum = function(a, b) {
    return a + b;
};

Стрелочная функция
const sum = (a, b) => a + b;

ИЛИ

const sum = (a, b) => {
    return a + b;
};

Функция мгновенного вызова
(function(a, b) {
    return a + b;
})(2, 3);

3. В чём разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
Тестирование - проверка работы и выявление ошибок.  Отладка - исправление выявленных в процессе тестирования ошибок.
Логирование - запись логов с помощью console.log. Оно позволяет понять, что происходило в коде на определенной строке. Логирование используется для того, чтобы понять из-за чего появляется ошибка. 

4. В чём разница между Function Expression и Function Declaration?
- Function Declaration объявляется отдельной инструкцией в основном потоке кода. Function Expression создается внутри другого выражения (переменной).
- function Expression создается, когда выполнение скрипта доходит до нее, и затем уже может использоваться. Function Declaration можно использовать во всем скрипте.

5. Что делает функция `console.log()`?
console. log — выводит текст в консоль в виде сообщения журнала.

6. По какой причине, мы можем использовать до объявления функцию, объявленную через `Function Declaration`, но не можем ту, которая объявлена через `Function Expression` ?
Function Expression создается, когда выполнение скрипта доходит до нее, и затем уже может использоваться. Function Declaration можно использовать во всем скрипте.

7. Что такое глобальная зона видимости функций?
Это область видимости вне любых функций. Переменные, объявленные в ней, видны везде.

8. Что вернёт код? 
function showX(x)
{ 
	return x;
}
console.log(showX(28));

28
    
9. Что выведет этот код?
function sum(x, y=0) {
  return x+y;
} 
console.log(sum(5));

5
    
10. Что выведет код?
console.log(foo); 
let foo = "Cat";
console.log(foo);

Cat

Практическое задание
1. Создана страница, в консоли которой выводится сообщение «Я учу JavaScript!».
2. Создана галерея переключения изображений с двумя кнопками.

Задание по звездочкой реализовано в папке leap.