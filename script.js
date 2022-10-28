let bookDisplay = document.querySelector(".bookDisplay")
let bookAmount = 0;
let LOFTR  = {
    title: "LOTR",
    author: "henk",
    pages: 69,
    read: true
}
let potter  = {
    title: "Potter",
    author: "Erika",
    pages: 69,
    read: true
}
let GVR  = {
    title: "GVR",
    author: "piet",
    pages: 69,
    read: true
}
let SenW  = {
    title: "Suske en Wiske",
    author: "jan",
    pages: 69,
    read: true
}

let myLibrary = [LOFTR, potter, GVR, SenW]


function Book(title, author, pages, read) {

}

function addBookToLibrary() {

}

function displayBooks() {
    let counter = 0;
    let bookDivs = [];
    let titleDivs = []
    let authorDivs = []
    let pagesDivs = []
    let readDivs = []
    
    myLibrary.forEach(item => {
        //create divs for the books
        bookDivs[counter] = document.createElement("div")
        bookDivs[counter].classList.add(`book${counter}`, "book")
        bookDisplay.appendChild(bookDivs[counter])


        //create divs for all properties of the books
        titleDivs[counter] = document.createElement("div")
        titleDivs[counter].classList.add(`title${counter}`, "title")
        titleDivs[counter].innerText = item.title
        bookDivs[counter].appendChild(titleDivs[counter])

        authorDivs[counter] = document.createElement("div")
        authorDivs[counter].classList.add(`author${counter}`, "author")
        authorDivs[counter].innerText = item.author
        bookDivs[counter].appendChild(authorDivs[counter])

        pagesDivs[counter] = document.createElement("div")
        pagesDivs[counter].classList.add(`pages${counter}`, "pages")
        pagesDivs[counter].innerText = item.pages
        bookDivs[counter].appendChild(pagesDivs[counter])

        readDivs [counter] = document.createElement("div")
        readDivs [counter].classList.add(`read${counter}`, "read")
        readDivs [counter].innerText = item.read
        bookDivs [counter].appendChild(readDivs[counter])

        


        console.log(item.title)
        console.log(item.author)
        console.log(item.pages)
        console.log(item.read)
        counter++
    })
}

displayBooks()
addBookToLibrary()
 
 
 
 
 
  //const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read")
  //console.log(thehobbit.info())
  