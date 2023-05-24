export default class Score {
  constructor({ startPoints }) {
    this.points = startPoints;
    this.$scoreContainer = document.querySelector("#score-container");
    this.store(this.points);
    this.render();
  }
  buildScore() {
    return `
            <h2 class="text-3xl font-semibold mt-8">Score: ${localStorage.getItem(
              "points"
            )}</h2>
        `;
  }
  add(points) {
    this.points += points;
    this.store(this.points);
    this.render();
  }
  reset() {
    this.points = 0;
    this.store(this.points);
    this.render();
  }
  store(points) {
    localStorage.setItem("points", points);
  }
  render() {
    this.$scoreContainer.innerHTML = this.buildScore();
  }
}
