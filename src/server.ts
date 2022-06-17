import express from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(router);

app.listen(4545, () => console.log("Server is running!"));
