let bookDisplay = document.querySelector(".bookDisplay");
let addBookButton = document.querySelector(".addBookButton")
let body = document.querySelector("body")
let header = document.querySelector("header")
let container = document.querySelector(".container")


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
    body.appendChild(formPrompt)

    formPrompt.style.opacity = "1"
    container.style.opacity = "0.3"
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
        formPrompt.remove()
        container.style.opacity = "1"
    })

    returnButton.addEventListener("click", () => {
        formPrompt.remove()
        container.style.opacity = "1"
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
        let bookTitle = document.createElement("div")
        bookTitle.classList.add(`title${counter}`, "title")
        bookTitle.innerText = item.title
        bookDivs[counter].appendChild(bookTitle)

        let bookAuthor = document.createElement("div")
        bookAuthor.classList.add(`author${counter}`, "author")
        bookAuthor.innerText = `Author: ${item.author}`
        bookDivs[counter].appendChild(bookAuthor)

        let bookPages = document.createElement("div")
        bookPages.classList.add(`pages${counter}`, "pages")
        bookPages.innerText = `Pages : ${item.pages}`
        bookDivs[counter].appendChild(bookPages)

        let readButton = document.createElement("button")
        readButton.classList.add(`read${counter}`, "read")
        if (item.read === true) {
            readButton.innerText = "Book Read, Well Done!"
            readButton.style.background = "green"
        } else {
            readButton.innerText = "Book Not Read (yet)"
            readButton.style.background = "red"
        }

        bookDivs[counter].appendChild(readButton)
        readButton.addEventListener("click", () => {
            if (item.read == true) {
                item.read = false
                readButton.innerText = "Book Not Read (yet)"
                readButton.style.background = "red"
            } else {
                item.read = true
                readButton.innerText = "Book Read, Well Done!"
                readButton.style.background = "green"
            }
        }) 

        


        counter++
    })
}


addBookButton.addEventListener("click", () => {
    getUserBookInfo()

})
function clearLibrary() {
    bookDisplay.remove()
    myLibrary.length = 0
    displayBooks()
}
function createClearLibraryWarning () {

    container.style.opacity = "0.3"
    let warningPrompt = document.createElement("div")
    warningPrompt.classList.add("warningPrompt")
    body.appendChild(warningPrompt)

    let warningMessage = document.createElement("h2")
    warningMessage.innerText = "Are you sure you want to clear your library?"
    warningPrompt.appendChild(warningMessage)

    let yesButton = document.createElement("button")
    yesButton.classList.add("yesButton")
    yesButton.innerText = "yes"
    warningPrompt.appendChild(yesButton)

    let noButton = document.createElement("button")
    noButton.classList.add("noButton")
    noButton.innerText = "No"
    warningPrompt.appendChild(noButton)

    yesButton.addEventListener("click", () => {
        clearLibrary()
        container.style.opacity = "1"
        warningPrompt.remove()
    })
    noButton.addEventListener("click", () => {
        container.style.opacity = "1"
        warningPrompt.remove()
    })
}
document.querySelector(".clearButton").addEventListener("click", () => {
    createClearLibraryWarning ()
})




