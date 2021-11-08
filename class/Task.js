class Task{

    static idTask = 0

    constructor(title, place, deadline, description, urgency, done = false) {

        this.id = Task.idTask
        this.title = title
        this.place = place
        this.deadline = deadline
        this.description = description
        this.urgency = urgency
        this.done = done
        Task.idTask++
    }

    createTemplate() {
        const date = this.deadline.split('-').reverse().join('/')
        const done = this.done ? 'done' : 'sdfsdf'

        return `
            <div class='task ${this.urgency} ${done}' id="task${this.id}">
                <h2>${this.title}</h2>
                <span class="infosTask">${date} - ${this.place}</span>
                <span class="description">${this.description}</span>
                <span class="delete" id="delete${this.id}"><i class="fas fa-times fa-lg"></i></span>
            </div>
        `
    }

}