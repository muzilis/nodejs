const fs = require('fs');
try {
    fs.unlinkSync('/tmp/hello');
    console.log('successfully deleted /tmp/hello');
  } catch (err) {
    console.log("error");
  }