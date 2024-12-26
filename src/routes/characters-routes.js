import { Router } from "express";
import { getAliveCharacters } from "../controllers/characters-controllers.js";
import { message } from "../utils/message.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "../utils/constants.js";

const router = Router();

router.get("/characters/alive", async (request, response) => {
    try {
        const characters = await getAliveCharacters();
        if (characters.length === 0) {
            message(response, RESPONSE_CODE.NOT_FOUND, RESPONSE_MESSAGE.NOT_FOUND);
        }
        message(response, RESPONSE_CODE.OK, null, { results : characters });
    }
    catch (exception) {
        message(response, RESPONSE_CODE.INTERNAL_SERVER_ERROR, RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR);
    }
});

export default router;