import express from "express";
import { QuizGeneratorController } from "./controllers/quizGenerator";
import bodyParser from "body-parser";



const app = express();

const quizGeneratorController: QuizGeneratorController = new QuizGeneratorController();

app.set("port", process.env.PORT || 3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://nodecourse.z15.web.core.windows.net"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json());

app.route("/getNames/:Name/:Area")
    .get(quizGeneratorController.GenerateQuiz);

app.route("/processQuiz")
    .post(quizGeneratorController.ProcessQuiz);

  app.route("*")
     .post(quizGeneratorController.handle404)
     .get(quizGeneratorController.handle404)
    .put(quizGeneratorController.handle404)
    .delete (quizGeneratorController.handle404);

export default app;
