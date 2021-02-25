export const PORT = process.env.PORT || 3000;
export const ClientID = process.env.CLIENT_ID;
export const ClientSecret = process.env.CLIENT_SECRET;
export const MODE = !!parseInt(process.env.PRODMODE) ? 'Production' : 'Development';
export const MONGO_URI = MODE === 'Production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/mendDB';
