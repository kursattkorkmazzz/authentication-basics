// Checks the request has Authorization header or not.
export function checkAuthorizationHeader(req, res, next) {
  if (!req.get("Authorization")) {
    res.status(401).send("Website Content (Unauthorized)");
    return;
  }
  next();
}
