const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp:meuapp@cluster0.py9mekf.mongodb.net/properteis?retryWrites=true&w=majority';
const connection = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports = connection