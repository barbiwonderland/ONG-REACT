import instance from "./apiService";


export const getContacts= async ()=>{
    
    try{
        const call = await instance.get("/contacts")
        const data = call.data
        return data
    }
    catch{

        return false

    }
}