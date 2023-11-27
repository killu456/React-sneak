import 'dotenv/config'
import  Express  from 'express'
import { sq } from './db.js'
import { User,Device,Rating,Basket,BasketDevice} from './models/models.js'
import fileUpload from 'express-fileupload'
import ErrorHandlingMiddleware from './Middleware/ErrorHandlingMiddleware'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { router } from './routers/index';
const cors = require('cors');

const PORT = process.env.PORT
const app = Express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(Express.json());
app.use(Express.static(path.resolve(__dirname,'static')));
app.use(fileUpload({}));
app.use('/api',router);
app.use(ErrorHandlingMiddleware);


const start = async() => {
    try {
        await sq.authenticate()
        await sq.sync()
        app.listen(PORT,() => console.log(`сервер запущен по порту ${PORT}`)) 
    } catch (error) {
        console.log(error.message)
    }
}

start();