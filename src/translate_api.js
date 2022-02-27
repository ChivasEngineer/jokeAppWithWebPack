import axios from "axios";

class TranslateApi {
    constructor(joke) {
        this.baseURL = "https://translation.googleapis.com";
        this.apiKey = YOUR_API_KEY;
        this.joke = joke;
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                key: this.apiKey,
                q: this.joke,
                target: "tr"
            }
        });
    }

    async getTranslatedJoke() {
        try {
            const jokeResponse = await this.axiosObject.get('/language/translate/v2');
            console.log(jokeResponse.data.data.translations[0].translatedText);
            return jokeResponse.data.data.translations[0].translatedText;
        } catch (error) {
            console.error(error.response.data.error.message);
            // return error.response.data.error.message;
        }
    }
}
export function jokeByTranslated(sentences) {
    const translatingByGoogleApi = new TranslateApi(sentences).getTranslatedJoke();
    return translatingByGoogleApi;
}