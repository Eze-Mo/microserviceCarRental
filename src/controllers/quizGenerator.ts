import { Response, Request } from "express";
import myquiz from "./quiz.json";
import { Score } from "../models/score";
export class QuizGeneratorController {
    public GenerateQuiz(req: Request, res: Response) {
        
        const name = req.params["Name"];

        switch (req.params["Area"]) {
            case "Sports":
                res.status(200).json(myquiz.quiz.Sports);
                console.log("Request made for user " + name);
                break;
            case "Music":
                res.status(200).json(myquiz.quiz.Music);
                console.log("Request made for user " + name);
                break;
            case "Node.js":
                console.log("Request made for user " + name);
                res.status(200).json(myquiz.quiz.NodeJs);
                break;
            default:
                res.status(404).send({ message: "Invalid Category " + name });
                break;
        }
    }

    public ProcessQuiz(req: Request, res: Response) {
        let score: number = 0;
        const userScore = new Score();
        userScore.name = req.body["name"];
        switch (req.body["chosenArea"]) {
            case "Sports":
                req.body["chosenAnswers"].forEach( userAnswer => {
                    Object.keys(myquiz.quiz.Sports).forEach(key => {
                        if(myquiz.quiz.Sports[key].answer ===  userAnswer) score++;
                        });
                });
                userScore.score = score;                
                res.status(200).json(userScore);
                break;
            case "Music":
                    req.body["chosenAnswers"].forEach( userAnswer => {
                        Object.keys(myquiz.quiz.Music).forEach(key => {
                            if(myquiz.quiz.Music[key].answer ===  userAnswer) score++;
                            });
                    });
                    userScore.score = score;                
                    res.status(200).json(userScore);
                break;
            case "Node.js":
                    req.body["chosenAnswers"].forEach( userAnswer => {
                        Object.keys(myquiz.quiz.NodeJs).forEach(key => {
                            if(myquiz.quiz.NodeJs[key].answer ===  userAnswer) score++;
                            });
                    });
                    userScore.score = score;                
                    res.status(200).json(userScore);
                break;
        
            default:
                res.status(404).send({ message: "Invalid Category "});
                break;
        }
        
    }
    public handle404(req: Request, res: Response){
        console.log(req.url + " invalid url");
        res.status(404).send("invalid URL");
    }
}