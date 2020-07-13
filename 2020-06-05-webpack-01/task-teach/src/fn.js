import axios from "axios";
export const kkb = async () => {
    console.log("欢迎来到开课吧")
    // http://localhost:8888/getData
    const res = await axios.get("/api/getData");
    console.log(res);

    const result = await axios.post("/api/login");
    console.log(result);

    const ref = await axios.get("/res/getData");
    console.log(ref);
}
