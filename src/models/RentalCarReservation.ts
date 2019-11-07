import { Place } from "./Place";
import { RentalCar } from "./RentalCar";
import { BookingAgent } from "./BookingAgent";
import { Person } from "./Person";
import { prop, Ref, getModelForClass } from "@typegoose/typegoose";
export class RentalCarReservation{
    @prop({ required: true })
    public reservationNumber: number;
   
     @prop()
    public bookingAgent: BookingAgent;
   
     @prop()
    underName: Person;
   
     @prop()
    public bookingTime: Date;
   
    //  @prop()
    // public reservationFor: RentalCar;
    @prop({ ref: RentalCar })
    public reservationFor: Ref<RentalCar>;
   
     @prop()
    public pickupLocation: Place;
   
     @prop()
    public pickupTime: Date;
   
     @prop()
    public dropoffLocation: Place;
   
     @prop()
    public dropoffTime: Date;
   
     @prop()
    public price: number;
   
     @prop()
    public priceCurrency: string;
}
export const RentalCarReservationModel = getModelForClass(RentalCarReservation);