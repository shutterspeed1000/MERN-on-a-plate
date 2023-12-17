module.exports = {
  async getTest(req, res) {
    try {
      res.send("Test");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
