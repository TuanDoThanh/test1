const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: "dpsk0mryx",
  api_key: "285367937349132",
  api_secret: "yVHj9Gb6QrdrQjFhbr45zlNraXI"
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png"],
    params: {
      folder: 'Rabbit_Shiu',
    },
  });

const uploadCloud = multer({ storage });

module.exports = uploadCloud;