import {read, write} from "../services/fs.service";
import {IUser} from "../interfaces/user.interface";
import {ApiError} from "../errors/api-error";

class UserRepository{
    public async getList():Promise<IUser[]>{
        return await read()
    }

    public async getById(userId:number):Promise<IUser>{
        const users = await read()
        return users.find((user)=>user.id === userId)
    }

    public async create(dto: Partial<any>):Promise<IUser>{
        const users= await read()

        const newUser ={
            id: users.length ? users[users.length - 1]?.id + 1 : 1,
            name: dto.name,
            email: dto.email,
            password: dto.password
        }
        users.push(newUser)
        await write(users)

        return newUser
    }

    public async updateById(userId:number, dto: IUser):Promise<IUser>{
        const users = await read()

        const userIndex = users.findIndex((user)=> user.id === userId)
        if(userIndex === -1){
            throw new ApiError("user not found", 404)
        }
        users[userIndex].name = dto.name
        users[userIndex].email = dto.email
        users[userIndex].password = dto.password

        await write(users)

        return users[userIndex]
    }

    public async deleteById(userId:number):Promise<void>{
        const users = await read()

        const userIndex = users.findIndex((user)=>user.id === userId)
        if(userIndex === -1){
            throw new ApiError('User not found', 404)
        }
        users.splice(userIndex, 1)

        await write(users)
    }
}

export const userRepository = new UserRepository()