const Item = require('../models/shoewashModel');

exports.listItems = async (req, res) => {
  try {
    const items = await Item.getAllItems(req.query.status);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    if (!req.body.name) return res.status(400).json({ error: 'Nama sepatu wajib diisi' });
    const newItem = await Item.createItem(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updated = await Item.updateItem(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.deleteItem(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
