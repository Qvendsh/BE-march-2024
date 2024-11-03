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

    public async updateById(userId:number, dto:IUser):Promise<IUser>{
        if(!dto.name || dto.name.length < 3){
            throw new ApiError(
                'name is required and should be at least 3 characters long',
                400
            )
        }
        if(!dto.email || !dto.email.includes("@")){
            throw new ApiError(
                'email is required and should include "@"',
                400
            )
        }
        if(!dto.password || dto.password.length < 6){
            throw new ApiError(
                'password is required and sould be at least 6 characters',
                400
            )
        }
        return await userRepository.updateById(userId,dto)
    }

    public async deleteById(userId:number):Promise<void>{
        const user = await userRepository.getById(userId)
        if(!user){
            throw new ApiError('User not found', 404)
        }
        return await userRepository.deleteById(userId)
    }
}

export const userService = new UserService()