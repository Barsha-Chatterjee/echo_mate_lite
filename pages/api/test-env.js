export default function handler(req, res) {
  res.json({
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '❌ undefined',
    AWS_REGION: process.env.AWS_REGION || '❌ undefined',
    NODE_ENV: process.env.NODE_ENV,
  });
}
