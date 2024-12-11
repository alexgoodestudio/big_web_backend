const service = require("./subscribers.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const empty = require("../middleware/emptySubscribeForm");
const emailExists = require("../middleware/emailExists");
const haveAtSymbol = require("../middleware/haveAtSymbol")

async function list(req, res) {
  const data = await service.list();
  res.status(200).json({ data });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({data});
}

async function read(req, res, next) {
  const { subscriber_id } = req.params;
  try {
    const data = await service.read(subscriber_id);
    if (data) {
      res.json({ data });
    } else {
      res.status(404).json({ error: "Subscriber not found" });
    }
  } catch (error) {
    next(error);
  }
}


async function destroy(req, res) {
  const { subscriber_id } = req.params;
  await service.destroy(subscriber_id); 
  res.status(204).end(); 
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [empty, emailExists,haveAtSymbol, asyncErrorBoundary(create)],
  read: asyncErrorBoundary(read),
  destroy: asyncErrorBoundary(destroy)
};