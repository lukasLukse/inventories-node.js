import express from "express";

import {
  LOGIN,
  CREATE_COMPANY,
  GET_COMPANY_BY_ID,
  DELETE_COMPANY_BY_ID,
  VALIDATE_LOGIN,
} from "../controller/company.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/company", CREATE_COMPANY);
router.post("/login", LOGIN);
router.get("/login/validate", auth, VALIDATE_LOGIN);
router.get("/company/:id", GET_COMPANY_BY_ID);
router.delete("/company/:id", DELETE_COMPANY_BY_ID);

export default router;
