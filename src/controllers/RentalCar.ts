import { Response, Request } from "express";
import mongoose from "mongoose"
import { RentalCarReservation, RentalCarReservationModel } from "../models/RentalCarReservation"
import { getModelForClass } from "@typegoose/typegoose";
import { RentalCar, RentalCarModel } from "../models/RentalCar";

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "test" });

// const mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://carrental:Q5UfmqtskePzjIepPs6RqdN7DCM9QxMPcozqqqpJXH3XGGa1mbHVamqELra0mRStwgWMswVKJ47UPKWOKE9v4A%3D%3D@carrental.documents.azure.com:10255/?ssl=true", function (err, client) {
//   client.close();
// });

export class RentalCarController {
    
    public async getRentalCarReservationList(req: Request, res: Response){
        
        const reservationList: RentalCarReservation[] = await RentalCarReservationModel.find();
        if (reservationList.length != 0) {
            res.status(200).json(reservationList);
        }
        else{
            res.status(404).send('no reservations found');
        }
    }
    public async getRentalCarReservationDetail(req: Request, res: Response) {
        try {
            req.query.id 
            const reservation: RentalCarReservation = await RentalCarReservationModel.findById(req.query.id);
            res.status(200).json(reservation);
            
        } catch (error) {
            res.status(404).send('Reservation not found');
        }
    }
    public async postRentalCarReservation(req: Request, res: Response) {
        try {
            const rentalCarReservation: RentalCarReservation = req.body;
            const rentalCarReservationModel = new RentalCarReservationModel(rentalCarReservation);
            await rentalCarReservationModel.save();
            res.status(200).send('Reservation saved Correctly');
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async getRentalCarList(req: Request, res: Response) {
        const rentalCarList: RentalCar[] = await RentalCarModel.find();
        if (rentalCarList.length != 0) {
            res.status(200).json(rentalCarList);
        }
        else{
            res.status(404).send('no reservations found');
        }
    }
    public async getRentalCarDetail(req: Request, res: Response) {
        try {
            req.query.id 
            const rentalCar: RentalCar = await RentalCarModel.findById(req.query.id);
            res.status(200).json(rentalCar);
            
        } catch (error) {
            res.status(404).send('car not found');
        }
    }
    public async postRentalCar(req: Request, res: Response) {
        try {
            const rentalCar: RentalCar = req.body;
            console.log(req.body)
            console.log(rentalCar)
            const rentalCarModel = new RentalCarModel(rentalCar);
            await rentalCarModel.save();
            res.status(200).send('Car saved Correctly');
        } catch (error) {
            res.status(400).send(error);
        }
    }
    
}