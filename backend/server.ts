import express, { Response } from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api/v1/", (_, res: Response) => {
  res.status(200).json({
    status: "success",
    data: { message: "Hii Hashib 😊😊😊" },
  });
});

app.all("/", (_, res: Response) => {
  res.status(200).json({
    status: "success",
    data: { message: "Running... 🏎️🏎️" },
  });
});

app.listen(PORT, () => console.log(`App is running on PORT : ${PORT}`));
