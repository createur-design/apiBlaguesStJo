const express = require("express");
const router = express.Router();
const blaguesController = require("./../controllers/blagues");

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Retrieve all blagues
 *     description: Retrieve a list of all blagues
 *     responses:
 *       '200':
 *         description: A list of blagues
 *       '500':
 *         description: Internal server error
 */
router.get("/blagues", blaguesController.findAll);
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Retrieve a blague by ID or get a random blague
 *     description: Retrieve a blague by the specified ID or get a random blague if ID is not provided
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blague (optional)
 *         schema:
 *           type: string
 *       - in: query
 *         name: random
 *         description: Flag to indicate whether to retrieve a random blague
 *         schema:
 *           type: boolean
 *     responses:
 *       '200':
 *         description: A blague object
 *       '404':
 *         description: Blague not found
 *       '500':
 *         description: Internal server error
 */
router.get("/blagues/:id", blaguesController.findByIdOrRandom);

module.exports = router;
