import axios from "axios"
const base_url = process.env.NODE_ENV === 'development'? "http://localhost:3004/api/projects" : "/api/projects"

const GetProjects =()=>{
    return axios.get(base_url)
}

export default {GetProjects}