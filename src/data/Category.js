

export default class Category {
    constructor() {
        this.categories = [];
        this._subscriptions = [];
    }

    subscribe(func) {
        this._subscriptions.push(func)
    }

    unsubscribe(func) {
        this._subscriptions = this._subscriptions.filter(f => f !== func)
    }

    notify() {
        this._subscriptions.forEach(func => func(this.categories))
    }

    addCategory(newCategory) {
        this.categories.push(newCategory)
        this.notify()
    }
}