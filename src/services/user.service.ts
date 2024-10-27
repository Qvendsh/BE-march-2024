import {userRepository} from "../repositories/user.repository";
import {IUser} from "../interfaces/user.interface";
import {ApiError} from "../errors/api-error";

class UserService{
    public async getlist():Promise<IUser[]>{
         return await userRepository.getList()
    }
    public async create(dto: Partial<IUser>):Promise<IUser>{
        if(!dto.name || dto.name.length < 3){
            throw new  ApiError(
                "name is required and should be at least 3 characters long",
                400
            )
        }
        if(!dto.email || !dto.email.includes("@")){
            throw new ApiError("email is required and should contain '@'", 400)
        }
        if(!dto.password || dto.password.length < 5){
            throw new ApiError("password is reqiured and shoyld be at least 5 characters", 400)
        }
        return await userRepository.create(dto)
    }
}

export const userService = new UserService()