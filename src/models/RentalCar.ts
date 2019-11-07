import { prop, arrayProp, Ref, getModelForClass } from "@typegoose/typegoose";

export class RentalCar {
    @prop()
    name: string;
    @prop()
    model: string;
    @prop()
    brand: string;
    @prop()
    image: string;
    @prop()
    description: string;
    @prop()
    rentalCompany: string;
    @prop()
    rentStartDate?: Date;
    @prop()
    rentEndDate?: Date;
}

export const RentalCarModel = getModelForClass(RentalCar)
