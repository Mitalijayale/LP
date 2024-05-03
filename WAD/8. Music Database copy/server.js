const express = require("express");
const app = express();
const { connectDB } = require("./config/dbConnection");
const { MusicModel } = require("./models/music.model");
const path = require("path");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// handle views here
app.get("/view/add", (req, res) => {
  res.render("addMusic");
});

app.get("/view/favourite", async (req, res) => {
  const songs = await MusicModel.find({ favourite: true });
  return res.render("favourite", { songs });
});

app.post("/markfavourite/:id", async (req, res) => {
  await MusicModel.updateOne({ _id: req.params.id }, { favourite: true })
    .then(() => res.redirect("/songs"))
    .catch((error) => res.send(error));
});

app.get("/view/update/:id", async (req, res) => {
  const result = await MusicModel.find({ _id: req.params.id });
  console.log(result);
  return res.render("update", { song: result[0] });
});

app.post("/updatesong/:id", async (req, res) => {
  await MusicModel.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(() => res.redirect("/songs"))
    .catch((error) => res.send(error));
});

// health check api
app.get("/", (req, res) => {
  return res.render("helloworld");
});

// Apply filters or get all songs using node queries
app.get("/songs", async (req, res) => {
  const queries = req.query;
  const filters = {};

  for (const key in queries) {
    if (queries[key]) {
      filters[key] = queries[key];
    }
  }

  await MusicModel.find(filters)
    .then((result) => {
      // res.send(result);
      return res.render("songs", {
        songs: result,
      });
    })
    .catch((error) => res.status(500).send(error));
});

// Add song to the db
app.post("/add", async (req, res) => {
  const newSong = new MusicModel(req.body);
  newSong
    .save()
    .then((result) => {
      // res.send(result);
      return res.redirect("/songs");
    })
    .catch((error) => res.status(500).send(error));
});

// Delete song by id
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await MusicModel.deleteMany({ _id: id })
    .then((result) => {
      if (result.deletedCount > 0) {
        res.send(`Delete song : ${id} !`);
        return;
      } else {
        res.send(`Couldn't find the song with id : ${id}`);
        return;
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Mark as favourite
app.put("/favourite/:id", async (req, res) => {
  const id = req.params.id;
  const { favourite } = req.body;
  await MusicModel.updateOne({ _id: id }, { favourite: favourite })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

// Add actor and actress
app.put("/update/:id", async (req, res) => {
  const { actor, actress } = req.body;
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
