import { getProfile } from '../services/user.service.js';

export const profile = async (req, res) => {
    try {
        const user = await getProfile(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
