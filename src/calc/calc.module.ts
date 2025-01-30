import {Module} from "@nestjs/common";
import {AuthService} from "../auth/auth.service";
import {CalcService} from "./services/calc.service";
import {CalcController} from "./controllers/calc.controller";

@Module({
    providers: [CalcService],
    controllers: [CalcController],
    exports: [CalcService],
})
export class CalcModule {}
