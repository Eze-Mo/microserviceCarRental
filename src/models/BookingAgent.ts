import { prop } from "@typegoose/typegoose";

export class BookingAgent{
    @prop()
    name: string;
    @prop()
    url: string;
}
