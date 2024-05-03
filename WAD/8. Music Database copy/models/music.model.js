const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
  },
  filmName: {
    type: String,
    required: true,
  },
  musicDirector: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    default: "Unknown",
  },
  actress: {
    type: String,
    default: "Unknown",
  },
  favourite: {
    type: Boolean,
    default: false,
  },
});

const MusicModel = mongoose.model("music", musicSchema);

module.exports = { MusicModel };
