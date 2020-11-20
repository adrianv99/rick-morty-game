export default class Character {
    constructor({ name, image, status }) {
        this.name = name
        this.image = image
        this.status = status
        this.$characterImageContainer = document.querySelector('#img-container')
        this.$characterNameContainer = document.querySelector('#name-container')
        this.render()
    }
    buildImage() {
        return `
          <img class="w-60 h-60 object-cover rounded-full mt-5" src=${this.image} alt=${this.name}>
        `
    }
    buildName() {
        return `
          <h3 class="text-2xl font-semibold mt-5">${this.name}</h3>
        `
    }
    render() {
      this.$characterImageContainer.innerHTML = this.buildImage()
      this.$characterNameContainer.innerHTML = this.buildName()
    }
}