import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (data) => {
    try {
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            name: data.name,
            email: data.email,
            password: hashedPassword
        });

        return user;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (data) => {
    try {
        const user = await User.findOne({ email: data.email });
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return token;
    } catch (error) {
        throw error;
    }
};
