import app from './app';
import {MODE, MONGO_URI, PORT} from './configs/baseConfig';
import mongoose from 'mongoose';

(async () => {
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, () => {
            console.log(`[SERVER] Listening On Port ${PORT} In ${MODE} Mode`.yellow.underline);
        });
    } catch (error) {
        console.log(error.message);
        console.log('[ERROR] Something Went Wrong! Debug Quick!'.red);
    }
})();
