const mongoose = require('../mongo_connector');
const InvoiceSchema = new mongoose.Schema(
    {
      title: String,
      description: String,
      agent_id: String,
      supplier_id: String,
      retailer_id: String,
      amount: mongoose.Decimal128,
      payment_mode: String,
      payment_status: String,
    },
    { timestamps: true }
  );

InvoiceSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.amount = ret.amount.toString();
        return ret;
      },
});

const Invoices = mongoose.model("invoices", InvoiceSchema);

exports.get_invoice_by_retailer = async ({retailer_id})=>{
    let data  = await Invoices.find({retailer_id}).exec();
    return data
}

exports.get_invoice_by_agent = async ({agent_id})=>{
    let data  = await Invoices.find({agent_id}).exec();
    return data
}

exports.get_invoice_by_id = async ({id})=>{
    let data  = await Invoices.findById(id).exec();
    return data
}

exports.get_all_invoice = async ()=>{
    let data  = await Invoices.find().exec();
    return data
}


exports.add_invoice = async (inv_data)=>{
    let {title,description,agent_id,supplier_id,retailer_id,amount,payment_mode,payment_status} = inv_data;
    let data  = await Invoices.save({
        title,description,agent_id,supplier_id,retailer_id,amount,payment_mode,payment_status
    }).exec();
    return data
}
