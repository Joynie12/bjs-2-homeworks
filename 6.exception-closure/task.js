﻿function parseCount(value) {
    const result = Number.parseFloat(value);
    if (!result) {
        throw new Error(`Невалидное значение`);
    } else {
        return result;
    }
    
}

function validateCount(value) {
    try {return parseCount(value);
    } catch(error) {
        return error;
    }
}

// №2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error(`Треугольник с такими сторонами не существует`);
        }
    this.a = a;
    this.b = b;
    this.c = c;
    } 
    
    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        const pp = this.perimeter / 2;
        return parseFloat(Math.sqrt((pp * (pp - this.a) * (pp - this.b) * (pp - this.c))).toFixed(3));
    }
}

function getTriangle(a ,b, c) {
    try {
        return new Triangle(a ,b, c)
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}