function parseCount(num) {
	let result = Number.parseInt(num, 10) 
	if( isFinite(result) ) return result
	else throw new Error('Невалидное значение')
}

function validateCount(num) {
	try{
		return parseCount(num)
	} catch(e){
		return e
	}
}


class Triangle{
	constructor(a, b, c){
		let sum = [...arguments].reduce( (a, b) => a + b);
		[...arguments].forEach( side => {
			if (sum - side < side) throw new Error('Треугольник с такими сторонами не существует')
		})
		this.a = a,
		this.b = b,
		this.c = c
	}
	getPerimeter(){
		return this.a + this.b + this.c
	}
	getArea(){
		let p = this.getPerimeter() / 2
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c) ).toFixed(3)
	}

}

function getTriangle(a, b, c) {
	try{
		return new Triangle(a, b, c)
	} catch(e){
		return {
			message: "Ошибка! Треугольник не существует",
			getArea() { return this.message  },
			getPerimeter() { return this.message }
		}
	}
}



