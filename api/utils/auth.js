export function auth() {
  return (req, res, next) => {
    const { 'fly-api': fly_api, origin, referer } = req.headers;

    if (
      fly_api === process.env.FLY_API &&
      origin === process.env.ORIGIN &&
      referer === process.env.REFERER
    ) {
      next();
    } else {
      res.status(401).json({ error: 'Sorry, not allowed 😭' });
    }
  };
}
