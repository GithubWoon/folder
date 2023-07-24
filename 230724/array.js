// let fruit = "apple";
// console.log("과일 이름은?" + fruit );

// let fruit2 = "apple";
// console.log("과일 이름은?" + fruit2 );

// let fruit3 = "apple";
// console.log("과일 이름은?" + fruit3 );

let fruits = ["apple", "kiwi", "orange", "banana", "grape"];
console.log("과일 종류는" + fruits);
console.log("과일 종류중 세번쨰 과일은?" + fruits{2} + "입니다.");
console.log("과일 종류중 두번째 과일은?" + fruits{1} + "입니다.");

fruits[0] = "pineapple";
console.log(fruits);

fruits[2] = "tomato";
console.log(fruits);

// pop, push, includes, indexOf, slice

fruits.shift(); // 맨앞에 있는 아이템 뺌
fruits.pop(); // 마지막에 있는 아이템 뺌
fruits.unshift("cherry"); // "체리" 를 처음 배열에 추가
fruits.push("cherry"); // "체리" 를 마지막 배열에 추가
console.log(fruits.includes("apples")); // "사과" 를 포함하고 있는지 묻는다 -> 참, 거짓
console.log(fruits.indexOf("kiwi")); // 키위가 몇번째에 있는지 묻는다
console.log(fruits.slice(2)); // 앞에서 2개 잘라냄
fruits.splice(2,2) // 2번 인덱스부터 2개 제거, 시작점으로부터 몇개의 아이템 제거