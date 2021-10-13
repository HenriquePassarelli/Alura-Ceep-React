export default class ArrayNotes {
    constructor() {
        this.notes = []
        this._subscriptions = [];
    }

    newNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify()
    }

    subscribe(func) {
        this._subscriptions.push(func)
    }

    unsubscribe(func) {
        this._subscriptions = this._subscriptions.filter(f => f !== func)
    }

    notify() {
        this._subscriptions.forEach(func => func(this.notes))
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notify()
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}