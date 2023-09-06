import axios from "axios";


async function fetchdata(url){
    const response = await axios.get(url);
    if(response.ok){
        return response;
    }else{
        const errorBody = await response;
        const errormessage = await errorBody.error;
        throw Error(errormessage);
    }
}

export async function fetchnotes(){
    const response = await fetchdata("http://localhost:5003/api/notes/1")
    return response.data
}