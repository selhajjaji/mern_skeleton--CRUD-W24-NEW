import Supplements from '../models/supplements.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// GET /store/supplements - Get all supplement items
const list = async (req, res) => {
  try {
    const supplements = await Supplements.find().select('name description price quantity created updated');
    return res.json(supplements);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// GET /store/supplements/:id - Get a supplement item by id
const read = async (req, res) => {
  try {
    const supplement = await Supplements.findById(req.params.id);
    if (!supplement) {
      return res.status(404).json({ message: 'Supplement not found' });
    }
    return res.json(supplement);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// POST /store/supplements - Add new supplement item
const create = async (req, res) => {
  const supplements = new Supplements(req.body);
  try {
    await supplements.save();
    return res.status(201).json({
      message: 'Supplement added successfully!',
      supplement: supplements
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// DELETE /store/supplements - Delete all supplement items
const removeAll = async (req, res) => {
  try {
    await Supplements.deleteMany({});
    return res.status(200).json({
      message: 'All supplements deleted successfully!'
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// DELETE /store/supplements/:id - Delete a supplement item by id
const remove = async (req, res) => {
  try {
    const deletedSupplement = await Supplements.findByIdAndDelete(req.params.id);
    if (!deletedSupplement) {
      return res.status(404).json({ message: 'Supplement not found' });
    }
    return res.json({
      message: 'Supplement deleted successfully!',
      supplement: deletedSupplement
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, read, list, remove, removeAll };
