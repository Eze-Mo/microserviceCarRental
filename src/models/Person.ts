import { prop } from "@typegoose/typegoose";

export class Person {
    @prop()
    name: string;
    @prop()
    email: string;
}
