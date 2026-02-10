const User = require('../models/user.model');

exports.getProfile = async (userId) => {
    try {
        return await User.findById(userId).select('-password');
    } catch (error) {
        throw error;
    }
};
