import express from "express";
import { QuizGeneratorController } from "./controllers/quizGenerator";

const app = express();

const quizGeneratorController: QuizGeneratorController = new QuizGeneratorController();

app.set("port", process.env.PORT || 3000);

app.route("/getNames/:Name/:Area")
    .get(quizGeneratorController.GenerateQuiz);

app.route("processQuiz")
    .post(quizGeneratorController.ProcessQuiz);

app.route("*")
    .post(quizGeneratorController.handle404)
    .get(quizGeneratorController.handle404)
    .put(quizGeneratorController.handle404)
    .delete (quizGeneratorController.handle404);

export default app;
