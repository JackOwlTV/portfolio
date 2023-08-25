const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    pictures: { type: String, required: true },
    link: { type: String, required: false },
    githublink: { type: String, required: true },
    html: { type: Boolean, required: true },
    css: { type: Boolean, required: true },
    react: { type: Boolean, required: true },
    js: { type: Boolean, required: true },
});

module.exports = mongoose.model('Project', projectModel);