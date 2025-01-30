import {Injectable} from "@nestjs/common";
@Injectable()
export class CalcService {
    /**
     * @param weight
     * @param age
     * @param height
     */
  async forStaticMass(weight: number, age: number, height: number){
        /*Миффлин-Сан Жеора
        (10 x вес (кг) + 6.25 x рост (см) – 5 x возраст (г) + 5) x A - для мужчин;
        (10 x вес (кг) + 6.25 x рост (см) – 5 x возраст (г) - 161) x A - для женщин.*/
    return 10*weight+6.25*height-5*age+5
  }
}
