import axios from "axios";
export const getItems = () => {
    return axios({
        url: "/api/items"
    })
}
