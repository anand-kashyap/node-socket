const checkValidation = require("../../services/expressValidation");
const { readFileSync, statSync } = require('fs');
const Resize = require('../utils/resizeImage');

const getFile = (req, res, next) => {
  if (checkValidation(req, res)) return;

  const filename = req.params.fileName;
  const fPath = process.env.ROOT + '/uploads/' + filename
  if (!statSync(fPath)) {
    return res.status(404).json({ message: 'file not found' });
  }
  const imgFile = readFileSync(fPath);
  const imgBase64 = Buffer.from(imgFile).toString('base64');
  return res.status(200).json({ img: imgBase64 });
};

const upload = async (req, res) => {
  // console.log(req.file);
  const name = req.file.orginalname;

  const imagePath = process.env.ROOT + '/uploads';
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(422).json({ error: 'Please provide an image' });
  }
  const filename = await fileUpload.save(req.file).catch(
    () => res.status(422)
      .json({ message: "file upload error" })
  );
  res.status(200)
    .json({ message: "file uploaded successfully", filename })
};

module.exports = {
  getFile, upload
}