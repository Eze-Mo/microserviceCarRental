import { Response, Request } from "express";
import myquiz from "./quiz.json";
export class QuizGeneratorController {
    public GenerateQuiz(req: Request, res: Response) {
        console.log(req.url);
        
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
                res.status(200).json(myquiz.quiz.NodeJs + name);
                break;
            default:
                res.status(404).send({ message: "Invalid Category " + name });
                break;
        }
    }

    public ProcessQuiz(req: Request, res: Response) {
        // TODO Implement quiz processing
        console.log(req);
        console.log(res);
    }
    public handle404(req: Request, res: Response){
        console.log(req.url + " invalid url");
        res.status(404).send("invalid URL");
    }
}