import axios from "axios";

class UnsplashApi {
    constructor() {
        this.baseURL = "https://api.unsplash.com";
        this.clientID = YOUR_API_KEY;
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID,
            },
            params: {
                query: "landscape",
                count: 1
            }
        });
    }

    async getRandomPhoto() {
        try {
            const photoResponse = await this.axiosObject.get("/photos/random");
            console.log(photoResponse.data[0].urls.regular);
            return photoResponse.data[0].urls.regular;
        } catch (error) {
            console.error(error.response);
            return 'https://bulma.io/images/placeholders/1280x960.png';
        }
    }
}
export function getPhoto() {
    const createdPhoto = new UnsplashApi().getRandomPhoto();
    return createdPhoto;
}