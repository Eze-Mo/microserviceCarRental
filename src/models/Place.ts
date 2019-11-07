import { PostalAddress } from './PostalAddress';
import { prop } from '@typegoose/typegoose';
export class Place {
    @prop()
    name: string;
    @prop()
    address: PostalAddress;
    @prop()
    telephone: string;
}
