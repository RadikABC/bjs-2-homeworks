// Задание 1 Печатное издание
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Задание 2 Библиотека
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		let book = this.findBookBy("name", bookName);
		if (book === null) {
			return null;
		} else {
			this.books.splice(this.books.indexOf(book), 1);
			return book;
		}
	}
}