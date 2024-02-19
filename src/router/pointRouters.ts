import { Router } from "express";
import PointService from "../services/points.service";
import PointsController from "../controllers/pointsController";
import Container from "typedi";

const pointRouter = Router()
const pointController = Container.get(PointsController);

pointRouter.post("/", (request, response)=>pointController.create(request, response))
pointRouter.get("/:userId", (request, response)=>pointController.getOne(request, response))

export default pointRouter