import { EducatorUserModel } from "../models/user";

export const admin = async(request,response,next)=>{
    try {
       const  userId = request._id

       const user = await EducatorUserModel.findById(userId)

       if(user.role !== 'EDUCATOR'){
            return response.status(400).json({
                message : "Permission denial",
                error : true,
                success : false
            })
       }

       next()

    } catch (error) {
        return response.status(500).json({
            message : "Permission denial",
            error : true,
            success : false
        })
    }
}