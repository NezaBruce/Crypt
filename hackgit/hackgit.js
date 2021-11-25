const jsonfile = require("jsonfile");
const moment = require("moment");
// const simplegit = require("simple-git");
// const random = require("random");
const FILE_PATH = "./data.json";

// const makeCommit = n => {
    // const x = random.int(8, 54);
    // const y = random.int(8, 6);
    // const DATE = moment().subtract(1, 'y').add(1, 'd')
    const DATE = moment().format();
    //     .add(x, 'w').add(y, 'd').format();
    const data = {
      date: DATE
    };
    jsonfile.writeFile(FILE_PATH, data)
// }
// makeCommit(100);

