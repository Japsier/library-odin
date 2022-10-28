let bookDisplay = document.querySelector(".bookDisplay")
let bookAmount = 0;
let bookRead = [true, true, false, false, false, false]
let buttons = []
let LOFTR  = {
    title: "LOTR",
    author: "henk",
    pages: 69,
}
let potter  = {
    title: "Potter",
    author: "Erika",
    pages: 69,
}
let GVR  = {
    title: "GVR",
    author: "piet",
    pages: 69,
}
let SenW  = {
    title: "Suske en Wiske",
    author: "jan",
    pages: 69,
}
let Sent  = {
    title: "Suske en Wiske",
    author: "jan",
    pages: 69,
}
let Seng  = {
    title: "Suske en Wiske",
    author: "jan",
    pages: 69,
}

let myLibrary = [LOFTR, potter, GVR, SenW, Sent, Seng]


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
        authorDivs[counter].innerText = `Author: ${item.author}`
        bookDivs[counter].appendChild(authorDivs[counter])

        pagesDivs[counter] = document.createElement("div")
        pagesDivs[counter].classList.add(`pages${counter}`, "pages")
        pagesDivs[counter].innerText = `Pages : ${item.pages}`
        bookDivs[counter].appendChild(pagesDivs[counter])

        buttons[counter] = document.createElement("button")
        buttons[counter].classList.add(`read${counter}`, "read")
        if (bookRead[counter] === true) {
            buttons[counter].innerText = "Book Read, Wel Done!"
            buttons[counter].style.background = "green"
        } else {
            buttons[counter].innerText = "Book Not Read (yet)"
            buttons[counter].style.background = "red"
        }
        
        bookDivs[counter].appendChild(buttons[counter])

        


        counter++
    })
}

displayBooks()
addBookToLibrary()
 
 
 
 
 
  //const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read")
  //console.log(thehobbit.info())
  