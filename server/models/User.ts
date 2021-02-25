import mongoose, {Schema, Document, Model, model, ObjectId} from 'mongoose';

interface IUser extends Document {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    friends: ObjectId;
    favArtists: string;
    location: {
        longitude: string;
        latitude: string;
    }
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
    },
    friends: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Users',
        },
    ],
    favArtists: [
        {
            type: String,
        },
    ],
    location: {
        longitude: {
            type: String,
        },
        latitude: {
            type: String,
        },
    },
});

const UserModel: Model<IUser> = model('User', UserSchema);

export default UserModel;
