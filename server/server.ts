import app from './app';
import {PORT} from './configs/baseConfig';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
