import { registerUser, loginUser } from '../services/auth.service.js';
import { registerValidation, loginValidation } from '../validations/user.validation.js';

export const register = async (req, res) => {
    try {
        const { error } = registerValidation.validate(req.body);
        if (error) return res.status(400).json({ message: error.message });

        const user = await registerUser(req.body);
        res.status(201).json({ message: 'User registered', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { error } = loginValidation.validate(req.body);
        if (error) return res.status(400).json({ message: error.message });

        const token = await loginUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
