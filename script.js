let bookDisplay = document.querySelector(".bookDisplay");
let addBookButton = document.querySelector(".addBookButton")
let body = document.querySelector("body")
let header = document.querySelector("header")
let container = document.querySelector(".container")
let bookAmount = 0;
let bookRead = []
let buttons = []


let myLibrary = []


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function getUserBookInfo() {
    let formPrompt = document.createElement("div")
    formPrompt.classList.add("formPrompt")
    bookDisplay.appendChild(formPrompt)

    let formHeader = document.createElement("h2")
    formHeader.innerText = "Add A Book To Your Library"
    formPrompt.appendChild(formHeader)

    let formTitle = document.createElement("input")
    formTitle.classList.add("formTitle")
    formTitle.placeholder = "Book Title:"
    formPrompt.appendChild(formTitle)

    let formAuthor = document.createElement("input")
    formAuthor.classList.add("formAuthor")
    formAuthor.placeholder = "Book Author:"
    formPrompt.appendChild(formAuthor)

    let formPages = document.createElement("input")
    formPages.classList.add("pages")
    formPages.placeholder = "Total Pages:"
    formPrompt.appendChild(formPages)

    let readDiv = document.createElement("div")
    formPrompt.appendChild(readDiv)

    let readLabel = document.createElement("label")
    readLabel.for = "readCheckboxID"
    readLabel.innerText = "Have you read the book?"
    readDiv.appendChild(readLabel)

    let readInput = document.createElement("input")
    readInput.type = "checkbox"
    readInput.id = "readCheckboxID"
    readDiv.appendChild(readInput)

    let formButtons = document.createElement("div")
    formButtons.classList.add("formButtons")
    formPrompt.appendChild(formButtons)

    let submitButton = document.createElement("button")
    submitButton.innerText = "Submit"
    formButtons.appendChild(submitButton)

    let returnButton = document.createElement("button")
    returnButton.innerText = "Return"
    formButtons.appendChild(returnButton)

    submitButton.addEventListener("click", () => {
        console.log(formTitle.value)
        console.log(formAuthor.value)
        console.log(formPages.value)
        console.log(readInput.checked)
        addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, readInput.checked)
    })

    returnButton.addEventListener("click", () => {
        displayBooks()
    })
    
    


}
function addBookToLibrary(title, author, pages, read) {
    removeBookDisplay()
    myLibrary.push(new Book(title, author, pages, read)) 
    displayBooks()
}
function removeBookDisplay() {
    bookDisplay.remove()
}
function displayBooks() {
    let counter = 0;
    let bookDivs = [];
    let titleDivs = []
    let authorDivs = []
    let pagesDivs = []

    //remove old book display with all books

    //add new book display with all books
    bookDisplay = document.createElement("div")
    bookDisplay.classList.add("bookDisplay")
    container.appendChild(bookDisplay)

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
        if (item.read === true) {
            buttons[counter].innerText = "Book Read, Well Done!"
            buttons[counter].style.background = "green"
        } else {
            buttons[counter].innerText = "Book Not Read (yet)"
            buttons[counter].style.background = "red"
        }

        bookDivs[counter].appendChild(buttons[counter])

        


        counter++
    })
}


addBookButton.addEventListener("click", () => {
    getUserBookInfo()

})




