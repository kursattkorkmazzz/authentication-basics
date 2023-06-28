// Checks the request has Authorization header or not.
export function checkAuthorizationHeader(req, res, next) {
  if (!req.get("Authorization")) {
    res.set("WWW-Authenticate", "basic");
    res.status(401).send("There is no Authorization header in your request!");
    return;
  }
  next();
}
