const { createWebpackAliases } = require('./webpack.helpers');

/** 
  Proje içinde takma adlara karşılık gelen tsconfig.json dosyasını güncellediğinizden emin olun.
*/
module.exports = createWebpackAliases({
  '@assets': 'public/assets',
  '@src': 'src',
});
