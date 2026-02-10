const authService = require('../services/auth.service');
const { registerValidation, loginValidation } = require('../validations/user.validation');

exports.register = async (req, res) => {
    try {
        const { error } = registerValidation.validate(req.body);
        if (error) return res.status(400).json({ message: error.message });

        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: 'User registered', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { error } = loginValidation.validate(req.body);
        if (error) return res.status(400).json({ message: error.message });

        const token = await authService.loginUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
