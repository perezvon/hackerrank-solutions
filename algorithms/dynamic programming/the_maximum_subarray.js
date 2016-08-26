function processData(input) {
    var temp = input.split('\n');
    var t = temp[0];
    var c = 0;
    var i = 1;
    while (c < t) {
        var size = parseInt(temp[i]);        
        var array = temp[i+1].split(' ').map(Number);
        var nonContig = array[0];
        //Kadane's algorithm
        var maxEndingHere = array[0];
        var contig = maxEndingHere;
        for (var j = 1; j < size; j++){
            maxEndingHere = Math.max(array[j], maxEndingHere + array[j]);
            contig = Math.max(contig, maxEndingHere);
            //add all positive ints for nonContig
            if (array[j] > 0) nonContig += array[j];
            //if no positive ints return the smallest negative
            else nonContig = Math.max(nonContig, array[j]);
        }
        
    process.stdout.write(contig + ' ' + nonContig + '\n');
        i+=2;
        c++;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

