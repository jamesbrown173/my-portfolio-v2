import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;
const API_TOKEN = "3EGNNDCLH67F2DBYPRCSBTSC2FABD5W4"; // Replace with your actual Oura API token

app.use(cors());

app.get("/dailyactivity", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ouraring.com/v2/usercollection/daily_activity",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Oura API:", error);
    res.status(500).json({ error: "Error fetching data from Oura API" });
  }
});

app.get("/sleepscore", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ouraring.com/v2/usercollection/daily_sleep",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Oura API:", error);
    res.status(500).json({ error: "Error fetching data from Oura API" });
  }
});

app.get("/readinessscore", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ouraring.com/v2/usercollection/daily_readiness",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Oura API:", error);
    res.status(500).json({ error: "Error fetching data from Oura API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
