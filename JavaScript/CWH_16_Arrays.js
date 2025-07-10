let marks_class_12 = [91, 81, 63, 73, true, null, "Absent"]
console.log(marks_class_12)

console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])  // This will be undefined because index 7 does not exist.

console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[7] = 90  // Adding a new value to the array
marks_class_12[0] = 96  // Changing the value of an array

console.log(marks_class_12)
console.log(typeof marks_class_12)

console.log("\nPrinting by using for loop:-")
for (let i=0; i<marks_class_12.length; i++) {
    console.log(marks_class_12[i])
}
