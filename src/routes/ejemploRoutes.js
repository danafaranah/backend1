import { Router } from "express";
import userCtrl from "../controllers/ejemploController.js";

const route = Router();

route.get("/", userCtrl.getData)
route.get("/:id", userCtrl.getDataById)

route.post("/", userCtrl.saveData)
route.put("/:id", userCtrl.update)
route.delete("/:id", userCtrl.deleteData)

export default route