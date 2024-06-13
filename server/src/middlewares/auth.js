const admin = require("firebase-admin");
const credentials = require("../../credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
