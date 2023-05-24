export default class API {
  async fetchCharacters({ status }) {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?status=" + status
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error();
    }
  }
}
