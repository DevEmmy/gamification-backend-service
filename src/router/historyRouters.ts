import { Router } from "express";
import Container from "typedi";
import HistoryController from "../controllers/historyController";

const historyRouter = Router()
Container.set("HistoryController", HistoryController);
const historyController = Container.get(HistoryController);

historyRouter.post("/", (request, response)=>historyController.create(request, response));
historyRouter.get("/",  (request, response)=>historyController.getAll(request, response));
historyRouter.get("/:historyId", (request, response)=>historyController.getOne(request, response));
historyRouter.delete("/:historyId", (request, response)=>historyController.delete(request, response))

export default historyRouter