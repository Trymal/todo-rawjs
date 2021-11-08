class Task{

    static idTask = 0

    constructor(title, place, deadline, description, urgency) {

        this.id = Task.idTask
        this.title = title
        this.place = place
        this.deadline = deadline
        this.description = description
        this.urgency = urgency
        this.done = false
        Task.idTask++
    }

    createTemplate() {
        const date = this.deadline.split('-').reverse().join('/')

        return `
            <div class='task ${this.urgency}' id="task${this.id}">
                <h2>${this.title}</h2>
                <span class="infosTask">${date} - ${this.place}</span>
                <span class="description">${this.description}</span>
                <span class="delete" id="delete${this.id}"><i class="fas fa-times fa-lg"></i></span>
            </div>
        `
    }

}