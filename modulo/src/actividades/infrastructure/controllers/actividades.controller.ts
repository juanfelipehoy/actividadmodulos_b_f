import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { 
  CreateActividadUseCase, 
  GetActividadUseCase, 
  GetAllActividadesUseCase, 
  UpdateActividadUseCase, 
  DeleteActividadUseCase 
} from '../../../application/use-cases';
import { CreateActividadDto, UpdateActividadDto } from '../../../application/dto';

@Controller('actividades')
export class ActividadesController {
  constructor(
    private readonly createActividadUseCase: CreateActividadUseCase,
    private readonly getActividadUseCase: GetActividadUseCase,
    private readonly getAllActividadesUseCase: GetAllActividadesUseCase,
    private readonly updateActividadUseCase: UpdateActividadUseCase,
    private readonly deleteActividadUseCase: DeleteActividadUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createActividadDto: CreateActividadDto) {
    return await this.createActividadUseCase.execute(createActividadDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getActividadUseCase.execute(id);
  }

  @Get()
  async findAll() {
    return await this.getAllActividadesUseCase.execute();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateActividadDto: UpdateActividadDto) {
    return await this.updateActividadUseCase.execute(id, updateActividadDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.deleteActividadUseCase.execute(id);
  }
}