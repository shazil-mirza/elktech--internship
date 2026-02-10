import User from '../models/user.model.js';

export const getProfile = async (userId) => {
    try {
        return await User.findById(userId).select('-password');
    } catch (error) {
        throw error;
    }
};
