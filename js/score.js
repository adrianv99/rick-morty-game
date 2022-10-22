export default class Score {
    constructor({ startPoints }) {
        this.points = startPoints
        this.$scoreContainer = document.querySelector('#score-container')
        this.scoreStorage(this.points)
        this.render()
    }
    buildScore() {
        return `
            <h2 class="text-3xl font-semibold mt-8">Score: ${localStorage.getItem("points")}</h2>
        `
    }
    upScore() {
        this.points++
        this.scoreStorage(this.points)
    }
    cleanScore() {
        this.points = 0
        this.scoreStorage(this.points)
    }
    scoreStorage(points) {
        localStorage.setItem("points", points)
    }
    render() {
        this.$scoreContainer.innerHTML = this.buildScore()
    }
}
