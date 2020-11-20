export default class Score {
    constructor({ startPoints }) {
        this.points = startPoints
        this.$scoreContainer = document.querySelector('#score-container')
        this.render()
    }
    buildScore() {
        return `
            <h2 class="text-3xl font-semibold mt-8">Score: ${this.points}</h2>
        `
    }
    upScore() {
        this.points++
    }
    cleanScore() {
        this.points = 0
    }
    render() {
        this.$scoreContainer.innerHTML = this.buildScore()
    }
}