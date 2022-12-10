const express = require("express");
const app = express();
const db = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const movieRoutes = require("./routes/movie");
const listRoutes = require("./routes/lists");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/list", listRoutes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.resolve(__dirname, "netflix", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "netflix", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log("Backend Server is running");
});
