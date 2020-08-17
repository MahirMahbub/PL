class Book{
    constructor(private Title:string, private Author: string){
    }

    get title(){
        return this.Title
    }

    get author(){
        return this.Author
    }

    getTitle(){
        return this.title
    }

    getAuthor(){
        return this.author
    }
}

let PP = new Book("Pride and Prejudice","Jane Austen")
let H = new Book("Hamlet","William Shakespeare")
let WP = new Book("War and Peace","Leo Tolstoy")
console.log(PP.title)
console.log(PP.author)
console.log()
console.log("Title: " + PP.getTitle())
console.log("Author: " + PP.getAuthor())
console.log("\n")
console.log(H.title)
console.log(H.author)
console.log()
console.log("Title: " + H.getTitle())
console.log("Author: " + H.getAuthor())
console.log("\n")
console.log(WP.title)
console.log(WP.author)
console.log()
console.log("Title: " + WP.getTitle())
console.log("Author: " + WP.getAuthor())
