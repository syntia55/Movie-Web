export default class DataMovie {
    static async getMovie(keyword) {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${keyword}&apikey=21e73044`
        );

        const json = await response.json();
        if (json.Response == "True") {
            return json;
        } else {
            throw new Error(json.Error);
        }
    }
}
