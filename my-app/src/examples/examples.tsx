import React from 'react';

let a: string = 'a' // присвоение переменной тип строкам
let name: boolean | null = true 
// присвоение переменной тип булеан или нулл, может менять свой тип на указанные через (| или)
 let names: Array<string> = ['React', 'TypeScript', 'Redux', 'Hooks']
 // присвоение переменной тип массива со строками
 // names.push(1) error
 let names2: number[] = [1, 2, 3]
 // альтернативный вариант обьявления массива с типом чесел
 let sex: 'male' | 'female' // создание собственного тиа
 
let user = {
	sayHello(message: string) { alert('Hello!')},
	name: 'Alis',
	age: 29,
	isAuth: true,
	adress: null
} // неявное присвоение типа к объёкту user

function examples() {
	return (
		<div>
			
		</div>
	);
}

export default examples;
