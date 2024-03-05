import { bassApi } from "../../api/baseApi";

 const authApi = bassApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            })
        })
    })
 })
 export const{useLoginMutation}=authApi