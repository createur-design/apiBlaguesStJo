const data = require("./../DB/blagues");
const getRandomInt = require("./../utils/getRandomInt");

const blaguesController = {
  findAll: (req, res) => {
    res.status(200).json({ blagues: data });
  },
  findByIdOrRandom: (req, res) => {
    const id = req.params.id;
    if (id === "random") {
      const indexRandom = getRandomInt(data.length);
      const result = data[indexRandom];

      res.status(200).json({ result });
    } else {
      const result = data.find((elem) => elem.id === Number(id));
      res.status(200).json({ blague: result });
    }
  },
};

module.exports = blaguesController;
