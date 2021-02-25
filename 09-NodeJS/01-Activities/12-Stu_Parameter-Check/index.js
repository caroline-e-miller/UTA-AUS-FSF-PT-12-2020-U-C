console.log(process.argv)
console.log(process.argv[3])

var pair1 = process.argv[0];
var pair2 = process.argv[1];

if (process.argv[2] === process.argv[3]) {
    console.log("true")
} else {
    console.log("false")
}