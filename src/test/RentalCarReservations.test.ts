import mongoose from "mongoose";
import { RentalCarReservation } from "../models/RentalCarReservation";
import { RentalCar } from "../models/RentalCar";
import { getModelForClass } from "@typegoose/typegoose";

describe("Reservations", () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "test" });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

   it("Should save a Reservation", async () => { 
      expect.assertions(5);
      const RentalCarReservationModel = getModelForClass(RentalCarReservation)
      const RentalCarModel = getModelForClass(RentalCar)

      const rv = new RentalCarReservationModel({
        reservationNumber: 2255,
        underName: { name:'eze', email: 'roberto.ezequiel@pwc.com' },
        bookingTime: new Date(),
        bookingAgent: {name:'pedro alquileres', url:'www.pedroalquileres.com'},
        pickupLocation: { name: 'Carrasco', address:{streetAddress: 'Carrasco', addressLocality: 'Aeropuerto', addressRegion: "MVD", postalCode:1882, addressCountry: 'UY'}, telephone: '45552' },
        pickupTime: new Date('December 17, 2019 03:24:00'),
        dropoffLocation: { name: 'Carrasco', address:{streetAddress: 'Carrasco', addressLocality: 'Aeropuerto', addressRegion: "MVD", postalCode:1882, addressCountry: 'UY'}, telephone: '45552' },
        dropoffTime: new Date('December 21, 2019 03:24:00'),
        price: 300,
        priceCurrency: 'USD'});
        rv.reservationFor = await new RentalCarModel({ 
          name: 'Tesla Model S', 
          model: 'P100D', 
          brand: 'Tesla', 
          image:'algo.url', 
          description:'The Tesla Model S is an all-electric five-door liftback',
          rentalCompany:'Avis'}).save();

    const spy = jest.spyOn(rv, "save");
    await rv.save();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
    expect(rv.reservationNumber).toBe(2255);
    expect(rv.underName.name).toBe('eze');
    expect(rv.reservationFor.brand).toBe('Tesla');
  });
});