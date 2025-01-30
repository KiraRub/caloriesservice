
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import {CalcService} from "../services/calc.service";
import {CalcCountInterface} from "../interfaces/calc-count.inteface";

@Controller('calc')
export class CalcController {
    constructor(private calcService: CalcService) {}

    @HttpCode(HttpStatus.OK)
    @Post('count')
    signIn(@Body() parameters: CalcCountInterface) {
        return this.calcService.forStaticMass(parameters.weight, parameters.age, parameters.height)
    }

}
