const macaronSchema = new mongoose.Schema({
    name: { type: String, required: true },
    flavor: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 }
  });
  
  const Macaron = mongoose.model('Macaron', macaronSchema);
  module.exports = Macaron;
  