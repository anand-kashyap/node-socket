const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');
const { existsSync, mkdirSync } = require('fs');

class Resize {
  constructor(folder) {
    if (!existsSync(folder)) mkdirSync(folder, { recursive: true });
    this.folder = folder;
  }
  async save(file) {
    let gif = false;
    if (file.originalname.endsWith('.gif')) {
      gif = true;
    }
    const buffer = file.buffer;
    const filename = Resize.filename(gif);
    const filepath = this.filepath(filename);
    if (gif) {
      await sharp(buffer)
        .toFile(filepath);
    } else {
      await sharp(buffer)
        .resize(800, 600, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        }).toFormat('png')
        .toFile(filepath);
    }

    return filename;
  }
  static filename(gif) {
    if (gif) {
      return `${uuidv4()}.gif`;
    }
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize;