start = parseInt(prompt("what number should i start counting from?", "2"),10);
console.log(start)
end = parseInt(prompt("what number am I stopping at?", "20"),10);
console.log(end)
count = parseInt(prompt("what number should i count by?","2"),10);
console.log(count)

for (;start < end;) {
    console.log( "The number is " + start);
    start += count;
}
