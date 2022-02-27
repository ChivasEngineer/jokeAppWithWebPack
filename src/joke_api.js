import axios from "axios";

class JokeApi {
    constructor() {
        this.baseURL = "https://api.chucknorris.io/jokes";
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
        });
    }

    async getRandomJoke() {
        try {
            const jokeResponse = await this.axiosObject.get("/random");
            console.log(jokeResponse.data.value);
            return jokeResponse.data.value;
        } catch (error) {
            console.error(error.response);
        }
    }
}
export function getJoke() {
    const createdJoke = new JokeApi().getRandomJoke();
    return createdJoke;
}