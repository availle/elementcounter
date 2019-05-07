export default class Power {
    constructor(requirements, description) {
        this.requirements = requirements
        this.description = description
        this.powerActive = this.powerActive.bind(this)
    }

    powerActive(elements) {
        return Object.keys(this.requirements).reduce((acc, key) => {
            if (!elements[key] || elements[key] < this.requirements[key]) {
                return false
            } else return acc
        }, true)
    }
}