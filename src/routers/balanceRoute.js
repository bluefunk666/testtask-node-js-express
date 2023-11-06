import express from 'express';
import User from '../models/usersModel.js';

const router = express.Router();

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        if (user.balance + amount < 0) {
            return res.status(400).json({ message: 'Недостаточно средств на счете' });
        }

        user.balance += amount;
        await user.save();

        return res.status(200).json({ message: 'Баланс обновлен успешно', balance: user.balance });
    } catch (error) {
        console.error('Ошибка при обновлении баланса:', error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

export default router;
