import express, {Application} from 'express';
import 'dotenv/config';
// Import Statements
import cors from 'cors';
import routes from './routes/routes';
import 'colorts/lib/string';
import passport from 'passport';
import session from 'cookie-session';
import {googleAuth} from './security/passport';

const app: Application = express();

googleAuth(passport);

// Constants
app.use(express.json());
app.use(cors());
app.use(session({
    keys: ['test-key', 'test-key-2'],
    name: 'session'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

export default app;
