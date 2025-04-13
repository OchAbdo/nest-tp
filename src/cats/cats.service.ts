import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly repocat : Repository<Cat>
  ){}


  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = await this.repocat.create(createCatDto);
    const newcat = await this.repocat.save(cat);
    return newcat;
  }

  async findAll(): Promise<Cat[]> {
    const list = await this.repocat.find();
    return list ;
  }

  async findOne(id: number):Promise<Cat> {
    const cat = await this.repocat.findOneBy({id})
    if(!cat)
      throw new NotFoundException("User not found");
    return cat 
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    await this.repocat.update(id , updateCatDto);
    const cat = await this.findOne(id);
    return cat ;
  }

  async remove(id: number): Promise<void> {
    await this.repocat.delete(id);
  }
}
