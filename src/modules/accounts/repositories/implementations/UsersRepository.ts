import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
    private repositoy: Repository<User>;

    constructor() {
        this.repositoy = getRepository(User);
    }

    async create({ id, avatar, name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const user = this.repositoy.create({
            id,
            avatar,
            name,
            email,
            password,
            driver_license
        })

        await this.repositoy.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repositoy.findOne({ email })

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repositoy.findOne({ id });

        return user;
    }
}

export { UsersRepository }