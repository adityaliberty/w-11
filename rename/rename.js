var fs = require('fs');
var oldFilepath = '../uploads/MyJio.jpg';

var newFilepath = "../uploads/ad.png";

fs.rename(oldFilepath, newFilepath, renameCallback);

function renameCallback(error) {
    if (error) {
        console.log('Error in renaming file');
        console.log(error.message);

    } else {
        console.log("Successfully Renamed");
    }
}