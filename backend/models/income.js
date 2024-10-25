const mongoose = require('mongoose');

const IncomeModel = new mongoose.Schema({
    incomesource: {
        type: String,
        required: true, 
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Income = mongoose.model('Income', IncomeModel);

module.exports = Income;
