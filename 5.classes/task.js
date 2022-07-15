//Задание №1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100){
		this.name = name,
		this.releaseDate = releaseDate,
		this.pagesCount = pagesCount,
		this._state = state,
		this.type = null
	}

	fix(){
		this.state *= 1.5
	}

	set state(newState){
		if (newState < 0) this._state = 0
		else if (newState > 100) this._state = 100
		else this._state = newState
	}

	get state(){
		return this._state
	}
}

class Magazine extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount, state){
		super(name, releaseDate, pagesCount, state),
		this.type = 'magazine'
	}
}

class Book extends PrintEditionItem{
	constructor(author, name, releaseDate, pagesCount, state){
		super(name, releaseDate, pagesCount, state),
		this.author = author,
		this.type = 'book'
	}
}

class NovelBook extends Book{
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state),
		this.type = 'novel'
	}
}

class FantasticBook extends Book{
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state),
		this.type = 'fantastic'
	}
}

class DetectiveBook extends Book{
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state),
		this.type = 'detective'
	}
}


//Задание №2
class Library {
	constructor(name){
		this.name = name,
		this.books = []
	}

	addBook(book) {
		if (book.state > 30) this.books.push(book)
	}

	findBookBy(type, value) {
		let book = this.books.find( item => item[type] === value)
		return book ? book : null
	}

	giveBookByName(bookName) {
		let book = this.books.findIndex( item => item.name === bookName)
		return book >= 0 ? this.books.splice(book, 1)[0] : null
	}
}

let newLib = new Library('Библиотека')

newLib.addBook(new NovelBook('Гоголь', 'Нос', 1700, 100, 20) )
newLib.addBook(new FantasticBook('Свифт', 'Гуливер', 1800, 300, 50) )
newLib.addBook(new DetectiveBook('Кристи','Пуаро', 1900, 500, 70) )
newLib.addBook(new Magazine('Караван истории', 2000, 400, 80) )
newLib.addBook(new NovelBook('Тургенев','Му-му', 1919, 250) )

newLib.findBookBy('releaseDate', 1919);

let myBook = newLib.giveBookByName('Гуливер') 

if(myBook){
	myBook.state -= 20
	myBook.fix()
	newLib.addBook(myBook)
} 


//Задание №3
class Student{
    constructor(name, gender, age) {
	    this.name = name
	    this.gender = gender
	    this.age = age 
	    this.marks = {}   	
    }
	addMark(mark, subject) {
		if (mark < 1 || mark > 5) return "Ошибка, оценка должна быть числом от 1 до 5"
		if (subject in this.marks) this.marks[subject].push(mark)
		else this.marks[subject] = [mark]
	} 
	getAverageBySubject(subject){
		if (!this.marks[subject]) return "Несуществующий предмет"
		return this.marks[subject].reduce( (a, b) => a + b ) / this.marks[subject].length
		// let average = this.marks[subject].reduce( (a, b) => a + b ) / this.marks[subject].length
		// return `Средний балл по предмету ${subject} ${average}`
	}
	getAverage() {
	  if(!Object.keys(this.marks).length) return 'Нет оценок'
	  let allMarks = []
	  for(let subj in this.marks){
	  	allMarks.push(...this.marks[subj])
	  }
	  return allMarks.reduce( (a, b) => a + b ) / allMarks.length
	}
	exclude(reason) {
	  delete this.subject 
	  delete this.marks  
	  this.excluded = reason
	}
}
