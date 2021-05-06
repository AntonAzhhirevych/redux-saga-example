/*

Вид функций, могут приостанавливать выполнения и возвращать промежуточный результат
-возвращает объект
-при вызове next возвращает и сохраняет промежуточное состояние
-генераторы являются перебираемыми объектами.
-генераторы создаются при помощи функций-генераторов function* f(…) {…}.
-внутри генераторов и только внутри них существует оператор yield.
-внешний код и генератор обмениваются промежуточными результатами посредством вызовов next/yield.

Методы:
-next() - запускает выполнение кода до ближайшей инструкции yield.
-return() - остонавливает выполнения 
-throw


-yield используется для остановки и возобновления функций-генераторов
-достижении yield выполнение функции приостанавливается
 а соответствующее значение – возвращается во внешний кодвсегда является объект с двумя свойствами:

  *(value: значение из yield).
  *(done: true, если выполнение функции завершено, иначе false.)

*/

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();

/*
.next()
*/

// console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

/*
.return()
*/

// console.log(generator.next());
// console.log(generator.return());
// console.log(generator.next());

/*
.throw()
-отловить с помощью try catch
*/

// console.log(generator.next());
// console.log(generator.throw(new Error('error')));
// console.log(generator.next());
