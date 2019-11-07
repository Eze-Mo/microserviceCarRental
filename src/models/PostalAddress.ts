import { prop } from "@typegoose/typegoose";

export class PostalAddress {
    @prop()
    streetAddress: string;
    @prop()
    addressLocality: string;
    @prop()
    addressRegion: string;
    
    @prop()
    postalCode: number;
    
    @prop()
    addressCountry: string;
}
