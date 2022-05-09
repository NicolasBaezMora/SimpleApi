import { Router } from "express";
import { response } from "express";

const users = [];
let id = 1;

const router = Router();

router.post("/demo/register", (req, res = response) => {
    const { name, lang } = req.body;
    users.push(
        {
            id,
            name,
            lang
        }
    );
    id++;
    return res.json(
        {
            ok: true,
            messages: "Registered user",
            users
        }
    );
});

router.get("/demo/greeting", (req, res = response) => {
    const { name } = req.body;
    let message = "Usuario no registrado";
    users.forEach((user) => {
        if (name == user.name) {
            switch (user.lang) {
                case "EN":
                    message = `Hello ${user.name}`;
                    break;
                case "FR":
                    message = `Salut ${user.name}`;
                    break;
                case "ES":
                    message = `Hola ${user.name}`;
                    break;
            }
        }
    });
    return res.json(
        {
            ok: true,
            message
        }
    );
});


export default router;