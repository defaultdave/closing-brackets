function testString(str) {
    if(str.length === 1){
        return false;
    }
    let testArr = str.split('');

    let results = testArr.reduce( function(previous, item) {
      if (previous[previous.length -1] !== item) {
        previous.push(item);
      } else {
        previous.pop();
      }

      return previous;
    }, []);

    if (results.length <= 0) {
      return true;
    } else {
      return false
    }
}

module.exports.testString = testString