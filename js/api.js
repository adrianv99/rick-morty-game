export default class API {
    // fetch a random character with status alive or dead from the api 
    async fetchCharacter() {

        do {
            var id = Math.floor(Math.random() * 592) + 1;

            var response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            var data = await response.json();

        } while (data.status == 'unknown');

        return data;

    }
}
