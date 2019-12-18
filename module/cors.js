const cors = require('cors');

const whiteList = [
  'http://localhost:3002',
  'http://localhost:3443',
  'http://localhost:3000'
];

// const corsOptionDelegate = (req, callBack) => {
//   let corsOptions = null;
//   console.log('header==================', req.header('Origin'));
//   if (whiteList.indexOf(req.header('Origin')) !== -1) {
//     console.log('Origin true');
//     corsOptions = { origin: true };
//   } else {
//     console.log('Origin false');
//     corsOptions = { origin: false };
//   }
//   callBack(null, corsOptions);
// }

const simpleCors = cors();
module.exports = simpleCors;
// export const corsWithOptions = cors(corsOptionDelegate);