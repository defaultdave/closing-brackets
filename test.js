var testLibrary = require('./index');

let testString, AllClosing;

testString = '{'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{{}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{}}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{{}}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{{{}}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);

testString = '{{{}}}'
AllClosing = testLibrary.testString(testString);
console.log(AllClosing, testString);