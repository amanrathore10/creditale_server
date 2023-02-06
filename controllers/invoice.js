const models = require('../db/models');
exports.get_invoice_by_agent = async (req,res)=>{
    let {agent_id} = req.params;
   
    try{
        let result = await models.invoices.get_invoice_by_agent({agent_id});
        res.send({data:result})
    }catch(err){
        res.status(400).send({
            message: err?.message? err.message: JSON.stringify(err),
        })
    }
}

exports.get_invoice_by_id = async (req,res)=>{
    let {id} = req.params;
   
    try{
        let result = await models.invoices.get_invoice_by_id(id);
        res.send({data:result})
    }catch(err){
        res.status(400).send({
            message: err?.message? err.message: JSON.stringify(err),
        })
    }
}

exports.get_invoice_by_retailer = async (req,res)=>{
    let {retailer_id} = req.params;

    try{
        let result = await models.invoices.get_invoice_by_retailer({retailer_id});
        res.send({data:result})
    }catch(err){
        res.status(400).send({
            message: err?.message? err.message: JSON.stringify(err),
        })
    }
}

exports.get_all_invoice = async (req,res)=>{
    try{
        let result = await models.invoices.get_all_invoice();
        res.send({data:result})
    }catch(err){
        res.status(400).send({
            message: err?.message? err.message: JSON.stringify(err),
        })
    }
}

exports.create_invoice = async (req,res)=>{
    let data = req.body;
    try{
        let result = await models.invoices.add_invoice(data)
        res.status(200).send({
            message:"invoice added successfully",
            data: result
        })

    }catch(err){
        res.status(400).send({
            message: err?.message? err.message: JSON.stringify(err),
        })
    }
}
