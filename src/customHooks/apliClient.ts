import { create } from "axios";

export const apiClient = create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})