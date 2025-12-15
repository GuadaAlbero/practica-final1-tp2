import { Router } from "express";
import controller from "../container/container.js";
import validateRunnerId from "../middlewares/validateRunnerId.js";
import validateNumbers from "../middlewares/validateNumbers.js";

const router = Router();

router.get("/", controller.getAll);
//REVISAR
router.post(
  "/",
  validateRunnerId,
  validateNumbers(["latitud", "longitud"]),
  controller.create
);

export default router;

