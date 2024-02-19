import { Router } from "express";
import Container from "typedi";
import GamesController from "../controllers/gamesController";

const gameRouter = Router()

const gameController = Container.get(GamesController);

gameRouter.post("/", (request, response)=>gameController.create(request, response));
gameRouter.get("/", (request, response)=>gameController.getAll(request, response));
gameRouter.get("/:gameId", (request, response)=>gameController.getOne(request, response))
gameRouter.delete("/:gameId", (request, response)=> gameController.delete(request, response));
gameRouter.patch("/:gameId", (request, response)=>gameController.update(request, response))

export default gameRouter