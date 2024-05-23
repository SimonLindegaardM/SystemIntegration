import { Router } from "express";

const router = Router();

const users = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Bib"},
    {id: 3, name: "Dob"},
];

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/api/users", (req,res) => {
    res.send({data: users});
});


/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Returns the users that was created
 */
router.post("/api/users", (req,res) => {
    res.send({data: users});
});


export default router;