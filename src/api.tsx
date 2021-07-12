import axios from "axios";

const api = axios.create({
    baseURL: "https://api-rest.elice.io/org/academy/",
});

// https://api-rest.elice.io/org/academy/course/list/?filter_title=java&offset=0&count=20

export const coursesApi = {
    list: (searchTerm: string) => api.get("course/list/", {
        params: {
            filter_title: searchTerm,
            offset: 0,
            count: 20
        }
    })
}