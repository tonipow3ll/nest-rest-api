import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoutesService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>) {}
    
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find()
    }
    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id})
    }
    
    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }
}

// original hard coded data
// private readonly items: Item[] = [
//     {
//         id: "1",
//         name: "Thing one",
//         description: "some desc", 
//         qty: 100
//     },
//     {
//         id: "2",
//         name: "Thing two",
//         description: "some desc",
//         qty: 150
//     },
//     {
//         id: "3",
//         name: "Thing three",
//         description: "some desc",
//         qty: 200
//     },
// ];
