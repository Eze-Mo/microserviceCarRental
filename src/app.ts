import express from "express";
import { QuizGeneratorController } from "./controllers/quizGenerator";
import bodyParser from "body-parser";
import { RentalCarController } from "./controllers/RentalCar";

const app = express();

const quizGeneratorController: QuizGeneratorController = new QuizGeneratorController();
const rentalCarController: RentalCarController = new RentalCarController();

app.set("port", process.env.PORT || 3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", ["https://nodecourse.z15.web.core.windows.net","http://localhost:4200"]); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json());

app.route("/getNames/:Name/:Area")
  .get(quizGeneratorController.GenerateQuiz);

app.route("/processQuiz")
  .post(quizGeneratorController.ProcessQuiz);

app.route("/rentals")
  .get(rentalCarController.getRentalCarReservationList);
app.route("/rentals/details")
  .get(rentalCarController.getRentalCarReservationDetail)
  .put(rentalCarController.getRentalCarReservationDetail);

app.route("/cars")
  .get(rentalCarController.getRentalCarList)
  .post(rentalCarController.postRentalCar);

app.route("/cars/details")
  .get(rentalCarController.getRentalCarDetail)
  .put(rentalCarController.getRentalCarDetail);

app.route("*")
  .post(quizGeneratorController.handle404)
  .get(quizGeneratorController.handle404)
  .put(quizGeneratorController.handle404)
  .delete (quizGeneratorController.handle404);

export default app;
