"use strict";

// Задача 1 Программа для решения квадратных уравнений
function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;

	} else if (d === 0) {
		let x = -b / (2 * a)
		arr.push(x);

	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	};

	return arr;
}

// Задача 2 Калькулятор для расчёта выплат по ипотеке
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	if (Number.isNaN(percent)) {
		console.log('Неприменимое значение')
		return false
	};

	if (Number.isNaN(contribution)) {
		console.log('Неприменимое значение')
		return false
	};

	if (Number.isNaN(amount)) {
		console.log('Неприменимое значение')
		return false
	};

	if (Number.isNaN(countMonths)) {
		console.log('Неприменимое значение')
		return false
	};

	let monthPercent = percent / 100 / 12;
	let body = amount - contribution;
	let monthlyPayment = body * (monthPercent + monthPercent / ((Math.pow((1 + monthPercent), countMonths) - 1)));
	let totalAmount = (monthlyPayment * countMonths).toFixed(2);
	totalAmount = Number(totalAmount);
	return totalAmount;
}