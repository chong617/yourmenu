import axios from "axios";
import { baseUrl } from '../component/shared/baseUrl';


export default {
    postFeedback(url = baseUrl + 'postfeedback/')
    {
        return{
            fetchAll:() => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newFeedback => axios.post(url,newFeedback),
            update: (id,updateFeedback) => axios.put(url+id,updateFeedback),
            delete: id => axios.delete(url+id)
        }
    }
}