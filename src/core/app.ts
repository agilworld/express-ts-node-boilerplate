import express from "express"
import bodyParser from "body-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet"
import routes from "../routes"
import { notFound, handler } from "../entities/ApiError"

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
// catch 404 and forward to error handler
app.use(notFound);

// error handler, send stacktrace only during development
app.use(handler);

export default app