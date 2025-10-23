const Item = require('../models/shoewashModel');

exports.listItems = async (req, res) => {
  try {
    const items = await Item.getAllItems(req.query.status);
    res.json({
      success: true,
      message: 'Data sepatu berhasil diambil',
      count: items.length,
      data: items
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);
    res.json({
      success: true,
      message: 'Data sepatu berhasil ditemukan',
      data: item
    });
  } catch (err) {
    res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
  }
};

exports.createItem = async (req, res) => {
  try {
    if (!req.body.name) return res.status(400).json({ success: false, message: 'Nama sepatu wajib diisi' });

    const newItem = await Item.createItem(req.body);
    res.status(201).json({
      success: true,
      message: 'Data sepatu berhasil ditambahkan',
      data: newItem
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updated = await Item.updateItem(req.params.id, req.body);
    res.json({
      success: true,
      message: 'Data sepatu berhasil diubah',
      data: updated
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.deleteItem(req.params.id);
    res.json({
      success: true,
      message: 'Data sepatu berhasil dihapus'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
