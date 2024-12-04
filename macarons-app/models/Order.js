const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        macaronId: { type: mongoose.Schema.Types.ObjectId, ref: 'Macaron' },
        quantity: { type: Number, required: true }
      }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;
  