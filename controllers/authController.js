const DEMO_PHONE = '03156263180';
const DEMO_PASSWORD = 'gamer786';

export const loginUser = (req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
        return res.status(400).json({ success: false, message: 'Phone and password are required' });
    }

    if (phone === DEMO_PHONE && password === DEMO_PASSWORD) {
        const demoToken = '2139878437723769843794738';
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token: demoToken,
            user: { phone },
        });
    }

    return res.status(401).json({ success: false, message: 'Invalid phone or password' });
};
