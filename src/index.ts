import app from "./core/app"
import vars from "./config/vars"

const port = 3002
// listen to requests
app.listen(vars.port, () => console.info(`server started on port ${vars.port} (${vars.env})`));

/**
* Exports express
* @public
*/
export default app