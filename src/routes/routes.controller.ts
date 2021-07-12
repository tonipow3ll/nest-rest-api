import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateReqDto } from './dto/create-req.dto';
import { RoutesService } from './routes.service';
import { Item } from './interfaces/item.interface'


@Controller('routes')
export class RoutesController {
    // have to inject the Service as a dependency in the constructor
    constructor( private readonly routesservice: RoutesService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.routesservice.findAll()
    }

    // Two ways of writing the below get request, can use param, then param.id, or param.whateverhere, or use ID only. One needs to be commented out for this route to work. 
    
    //OPTION 1
    // @Get(':id')
    // findOne(@Param () param): string {
    //     return `Get a specific item from DB via ID. ID# ${param.id}`;
    // }

    // OPTION 2

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.routesservice.findOne(id);
    }
    @Post()
    create(@Body() createReqDto: CreateReqDto): Promise<Item> {
        return this.routesservice.create(createReqDto)
    }
    @Delete(':id')
    delete(@Param('id') id):string {
        return `Deleted ID ${id}`
    }
    @Put(':id')
    update(@Body() updateReqDto: CreateReqDto , @Param('id') id) {
        return `Updated ${id} - Name${updateReqDto.name}`
    }
}
