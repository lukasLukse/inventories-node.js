import express from "express";

import {
  CREATE_INVENTORY,
  GET_COMPANY_INVENTORIES,
  GET_INVENTORY_BY_ID,
  DELETE_INVENTORY_BY_ID,
} from "../controller/inventory.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/inventory", auth, CREATE_INVENTORY);
router.get("/inventory/company", auth, GET_COMPANY_INVENTORIES);
router.get("/inventory/:id", GET_INVENTORY_BY_ID);
router.delete("/inventory/:id", DELETE_INVENTORY_BY_ID);

export default router;
