export default class Character {
    constructor({ name, image, status }) {
        this.name = name
        this.image = image
        this.status = status
        this.$characterImageContainer = document.querySelector('#img-container')
        this.$characterNameContainer = document.querySelector('#name-container')
        this.$answers = document.querySelector('#answer-container')
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
    buildAnswer() {
        return `
        <button onclick="chooseAnswer('Alive')" class="my-5 sm:my-0 px-8 mx-2  py-2 bg-blue-900 hover:bg-blue-700 transition easy-in-out duration-500 text-white font-semibold"> 
            Alive 
        </button>
        <button onclick="chooseAnswer('Dead')" class="my-5 sm:my-0 mx-2 px-8 py-2 bg-blue-900 hover:bg-blue-700 transition easy-in-out duration-500 text-white font-semibold"> 
            Dead 
        </button>
        `
    }
    render() {
      this.$characterImageContainer.innerHTML = this.buildImage()
      this.$characterNameContainer.innerHTML = this.buildName()
      this.$answers.innerHTML = this.buildAnswer()
    }
}
