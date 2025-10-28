// next.config.js
module.exports = {
  api: {
    bodyParser: false, // Disables the built-in body parser for API routes
  },
  images: {
    domains: ['barsha-chatterjee.s3.ap-south-1.amazonaws.com'], // Add your S3 bucket hostname here
  },
};
