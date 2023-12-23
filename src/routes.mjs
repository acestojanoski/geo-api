import { Router } from "express";
import { service } from "./service.mjs";
import { LocateResponse } from "./dto.mjs";

export const routes = Router();

routes.get("/ping", (_, res) => {
  res.json({ result: "pong" });
});

routes.get("/locate/:ip?", async (req, res) => {
  try {
    const ip =
      req.params.ip ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress;

    const country = await service.locateIp(ip);

    if (!country) {
      res.status(404).json({ message: `Cannot locate ip ${ip}` });
      return;
    }

    res.json(new LocateResponse(country));
  } catch (error) {
    console.error("error", error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
});
