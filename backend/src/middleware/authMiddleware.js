import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'Nemas tokena majmune' });
    }

    const token = authHeader.startsWith('Bearer ') 
        ? authHeader.slice(7).trim() 
        : authHeader.trim();

    if (!token) {
        return res.status(401).json({ message: 'Nemas tokena majmune' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('JWT verification error:', err.message);
            return res.status(401).json({ message: 'Nevalidan token majmune' });
        }
        req.userId = decoded.id;
        next();
    });
}

export default authMiddleware;