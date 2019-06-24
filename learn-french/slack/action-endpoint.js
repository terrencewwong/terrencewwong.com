module.exports = (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body.challenge);
};
