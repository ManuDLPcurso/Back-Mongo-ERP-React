import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Client", ClientSchema);
