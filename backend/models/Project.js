const mongoose = require('moongoose');

const projectModel = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String, required: false },
    githublink: { type: String, required: true },
});

module.exports = mongoose.module('Project', projectModel);