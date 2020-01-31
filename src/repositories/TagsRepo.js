import HttpClient from "../services/HttpClient";

class TagsRepo {

    getTags = () => {
        return HttpClient.get("/tags");
    };

    createTag = (data) => {
        return HttpClient.post("/tags", data);
    };

    deleteTag = (id) => {
        return HttpClient.delete(`/tags/${id}`);
    };
}

export default new TagsRepo();
