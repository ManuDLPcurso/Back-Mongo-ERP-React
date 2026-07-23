import Client from "../models/Client.js";
import * as db from "../config/db.js";

export const getClients = async (req, res) => {
  const clients = (await Client.find().sort({
    city: 1}));
  res.json(clients);
  console.log("Get correcto")
};

/* export const getClientById = async (req, res) => {
  const client = await Client.findById(req.params._id)
  res.json(client);
  console.log("Get correcto")
};
 */
export const createClient = async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).json(client);
  console.log("Add correcto")
};

export const updateClient = async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  res.json(client);
  console.log("Put correcto")
};

export const deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params._id);
  res.sendStatus(204);
  console.log("Del correcto")
};
