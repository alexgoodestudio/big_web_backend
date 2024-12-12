const service = require("../tables/tables.service");

async function tableExists(req, res, next) {
    const { table_id } = req.params;
    const table = await service.read(Number(table_id));

    if(table !== undefined) {
        res.locals.table = table;
        next()
    } else {
        next({
            message: `this table_id (${table_id}) does not exist`,
            status: 404,
        });
    }
}


module.exports = tableExists