import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly repouser : Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) : Promise<User> {
    const user = await this.repouser.create(createUserDto);
    const newuser = await this.repouser.save(user);
    return newuser;
  }

  async findAll(): Promise<User[]> {
    const list = await this.repouser.find();
    return list ;
  }

  async findOne(id: number) : Promise<User> {
    const user = await this.repouser.findOneBy({id})
    if(!user)
      throw new NotFoundException("User not found");
    return user 
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.repouser.update(id , updateUserDto);
    const user = await this.findOne(id);
    return user ;
  }

  async remove(id: number) : Promise<void> {
    await this.repouser.delete(id);
  }
}
