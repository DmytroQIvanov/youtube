import {fetchUser} from "../../api/user";

export const useChannelLayoutController =async (id?:string)=>{
    const user = await fetchUser(id);

    return{ user }
}