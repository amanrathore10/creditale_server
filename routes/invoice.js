let express = require('express');
let invoice_router = express.Router()

let invoice_ctrl = require('../controllers/invoice')
invoice_router.post('/create_invoice',invoice_ctrl.create_invoice)
invoice_router.get('/get_invoice_by_agent/:agent_id',invoice_ctrl.get_invoice_by_agent)
invoice_router.get('/get_invoice_by_retailer/:retailer_id',invoice_ctrl.get_invoice_by_retailer)
invoice_router.get('/get_invoice_by_id/:id',invoice_ctrl.get_invoice_by_id)
invoice_router.get('/get_all_invoice',invoice_ctrl.get_all_invoice)


module.exports = invoice_router;