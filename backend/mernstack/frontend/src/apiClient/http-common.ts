import axios from "axios";

export default axios.create({

    baseURL: 'http://localhost:9999/',//port on ehich express server is running
    headers:{
        "Content-Type": "application/json"
    }
})