import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 
    // token from cookie OR Authorization header

    if (!token) {
        return res.json({ success: false, message: "Not Authorized, Token Missing" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.user = tokenDecode.id;   // 🔥 store userId in req.user
            next();
        } else {
            return res.json({ success: false, message: "Not Authorized" });
        }
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default authUser;