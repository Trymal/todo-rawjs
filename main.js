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

let tasks = []



const initTask = (title = '', place = '', deadline = '', descr = '', color = '', done = false) => {
    let manually = false
    if(title === '' && place === '' && deadline === '' && descr === '' && color === '') {
        let selectedRadio = ''
        inputUrgency.forEach(element => {
            if (element.checked) {
                selectedRadio = element
            }
        });
        if(inputTitle.value === '' || inputPlace.value === '' || inputDeadLine.value === '' || inputDescription.value === '' || selectedRadio.value === '') {
            return
        }
        title = inputTitle.value
        place = inputPlace.value
        deadline = inputDeadLine.value
        descr = inputDescription.value
        color = selectedRadio.value

        manually = true
    }
    
    const newTask = new Task(title, place, deadline, descr, color, done)
    listTask.innerHTML += newTask.createTemplate()
    noTask.style.display = 'none'
    listTask.style.display = 'flex'

    inputTitle.value = ''
    inputPlace.value = ''
    inputDescription.value = ''

    formAdd.style.display = 'none'
    slideClose.style.display = 'none'
    slideAdd.style.display = 'block'

    for (let index = 0; index <= newTask.id; index++) {
        const htmlTask = document.querySelector("#task" + index)
        htmlTask.addEventListener('click', () => {
            if (!htmlTask.classList.contains('done')) {
                htmlTask.classList.add('done')
                tasks[index].done = true
            }
            else {
                htmlTask.classList.remove('done')
                tasks[index].done = false
            }
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
        const deleteTask = document.querySelector("#delete" + index)
        deleteTask.addEventListener('click', () => {
            htmlTask.remove()
            if (listTask.innerText === '') {
                listTask.style.display = 'none'
                noTask.style.display = 'flex'
            }
            tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
    }
    if(manually) {
        tasks.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

const createTask = (title, place, deadline, descr, color, done) => {
    initTask(title, place, deadline, descr, color, done)
}

if (localStorage.getItem('tasks') != null) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(element => {
        createTask(element.title, element.place, element.deadline, element.description, element.urgency, element.done)
    });
}

const listeners = () => {

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
    })

    submitBtn.addEventListener('click', () => {
        initTask()
    })
}

listeners()