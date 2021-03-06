const allowedCors = [
  'https://projectmesto21.nomoredomains.club',
  'http://projectmesto21.nomoredomains.club',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const corsHandler = (req, res, next) => {
  const { headers, method } = req;

  if (allowedCors.includes(headers.origin)) {
    res.header('Access-Control-Allow-Origin', headers.origin);
  }
  if (method === 'OPTIONS') {
    const requestHeaders = headers['access-control-request-headers'];
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }
  next();
  return 'end';
};

module.exports = corsHandler;
