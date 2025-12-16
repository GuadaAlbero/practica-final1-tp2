import { Router } from "express";
import controller from "../container/container.js";
import validateRunnerId from "../middlewares/validateRunnerId.js";
import validateNumbers from "../middlewares/validateNumbers.js";

const router = Router();

router.get("/corredores", controller.getAll);

router.post(
  "/corredores",
  validateRunnerId,
  validateNumbers(["latitud", "longitud"]),
  controller.create
);

export default router;

