const takeGetPhoto = () => import("./unsplash_api");
const takeGetJoke = () => import("./joke_api");
const takeJokeByTranslated = () => import("./translate_api");

class Screen {
    constructor() {
        this.getJokeButton = document.getElementById("get-joke-button");
        this.resultDiv = document.getElementById("result");

        this.getJokeButton.addEventListener("click", () => this.getJoke());
    }

    async getJoke() {
        try {

            const randomPhoto = await (await takeGetPhoto()).getPhoto();
            const randomJoke = await (await takeGetJoke()).getJoke();
            const translatedJoke = await (await takeJokeByTranslated()).jokeByTranslated(randomJoke);

            const results = {
                randomPhoto,
                randomJoke,
                translatedJoke
            }

            this.writeResultsOnScreen(results);
        } catch (error) {
            console.error(error.response);
        }
    }


    writeResultsOnScreen(results) {
        this.resultDiv.innerHTML = `
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by9">
                    <img src="${results.randomPhoto}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4 has-text-danger">${results.randomJoke}</p>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4 has-text-primary">${results.translatedJoke}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
export default function init() {
    new Screen();
}