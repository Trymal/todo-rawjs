class Task{

    constructor(title, place, deadline, description, urgency) {

        this.title = title
        this.place = place
        this.deadline = deadline
        this.description = description
        this.urgency = urgency
        this.done = false

    }

    createTemplate() {
        return `
            <div class='task ${this.urgency}'>
                <h2>${this.title}</h2>
                <span class="infosTask">${this.deadline} - ${this.place}</span>
                <span class="description">${this.description}</span>
            </div>
        `
    }

}