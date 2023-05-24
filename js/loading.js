export default class Loading {
  constructor() {
    this.$characterImageContainer = document.querySelector("#img-container");
    this.$characterNameContainer = document.querySelector("#name-container");
    this.render();
  }
  setState(isLoading) {
    if (isLoading) this.render();
  }
  buildImage() {
    return `
            <div class="lds-dual-ring"></div>
        `;
  }
  buildName() {
    return `
            Loading...
        `;
  }
  render() {
    this.$characterImageContainer.innerHTML = this.buildImage();
    this.$characterNameContainer.innerHTML = this.buildName();
  }
}
