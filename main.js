const inputAdd = document.querySelector("#titleTask")
const submitBtn = document.querySelector(".submit")

const listTask = document.querySelector(".listTask")
const noTask = document.querySelector(".noTask")

const inputTitle = document.querySelector("#titleTask")
const inputPlace = document.querySelector("#place")
const inputDeadLine = document.querySelector("#deadline")
const inputDescription = document.querySelector("#description")
const inputUrgency = document.querySelectorAll(".urgencyRadio")

const colors = document.querySelectorAll(".urgencyLabel")

const slideAdd = document.querySelector(".slideAdd")
const slideClose = document.querySelector(".slideClose")
const formAdd = document.querySelector(".formAdd")

slideAdd.addEventListener('click', () => {
    formAdd.style.display = 'flex'
    slideAdd.style.display = 'none'
    slideClose.style.display = 'block'
})

slideClose.addEventListener('click', () => {
    formAdd.style.display = 'none'
    slideClose.style.display = 'none'
    slideAdd.style.display = 'block'
})

colors.forEach(element => {
    element.addEventListener('click', () => {
        colors.forEach(el => {
            el.classList.remove('selected')
        })
        element.classList.add('selected')
    })
});

submitBtn.addEventListener('click', () => {
    let selectedRadio = ''
    inputUrgency.forEach(element => {
        if (element.checked) {
            selectedRadio = element
        }
    });
    if(inputTitle.value === '' || inputPlace.value === '' || inputDeadLine.value === '' || inputDescription.value === '' || selectedRadio.value === '') {
        return
    }
    const title = inputTitle.value
    const place = inputPlace.value
    const deadline = inputDeadLine.value
    const descr = inputDescription.value
    const color = selectedRadio.value
    
    const newTask = new Task(title, place, deadline, descr, color)
    listTask.innerHTML += newTask.createTemplate()
    noTask.style.display = 'none'
    listTask.style.display = 'flex'
})