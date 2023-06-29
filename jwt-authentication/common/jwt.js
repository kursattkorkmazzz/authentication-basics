import * as jose from "jose";

// payload is an object with key-value pairs of {username, password}
export async function createJWT(req, res, next) {
  const secret = new TextEncoder().encode(process.env.SERVER_SECRET);

  const jwt = await new jose.SignJWT({
    username: req.body.username,
    password: req.body.password,
  })
    .setProtectedHeader({ alg: "HS512", typ: "JWT" })
    .sign(secret);

  res.status(202).send(jwt);
  res.end();
  return;
}
