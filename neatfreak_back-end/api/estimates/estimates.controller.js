const service = require("./estimates.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const empty = require("../middleware/emptySubscribeForm");
const emailExists = require("../middleware/emailExists");
const haveAtSymbol = require("../middleware/haveAtSymbol")
const emptyEstimateForm = require("../middleware/emptyEstimateForm")



async function list(req, res) {
    const data = await service.list();
    res.status(200).json({ data });
}

async function read(req, res) {
    const { estimate_id } = req.params
    console.log("READ", estimate_id)
    const readEstimateId = await service.read(estimate_id);
    res.status(200).json({
        data: readEstimateId,
    });
}

async function create(req, res) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data })
}

async function destroy(req, res) {
    const { estimate_id } = req.params;
    await service.destroy(estimate_id);
    res.status(204).end();
}

async function update(req, res) {
    const { estimate_id } = req.params;
    const existingData = await service.read(estimate_id);

    if (existingData.length === 0) {
        return res.status(404).json({ error: 'Estimate not found' });
    }

    const {
        name,
        email_address,
        phone_number,
        address,
        number_of_beds,
        number_of_baths,
        square_footage,
        additional_info,
    } = req.body.data;

    const updatedData = {
        ...existingData[0],
        name,
        email_address,
        phone_number,
        address,
        number_of_beds,
        number_of_baths,
        square_footage,
        additional_info,
    };

    await service.update(updatedData);
    res.status(200).json({ data: updatedData });
}


module.exports = {
    read: [asyncErrorBoundary(read)],
    list: [asyncErrorBoundary(list)],
    post: [emptyEstimateForm, haveAtSymbol, asyncErrorBoundary(create)],
    update: [empty, haveAtSymbol, asyncErrorBoundary(update)],
    destroy: [ asyncErrorBoundary(destroy)]
}