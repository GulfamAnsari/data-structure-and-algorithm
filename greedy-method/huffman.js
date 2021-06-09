var codes = {};
function frequency(str) {
    var freqs = {};
    for (var i = 0; i < str.length; i++) {
        if (str[i] in freqs) {
            freqs[str[i]]++;
        }
        else {
            freqs[str[i]] = 1;
        }
    }
    return freqs;
}

function sortfreq(freqs) {
    var letters = [];
    for (var ch in freqs) {
        letters.push([freqs[ch], ch]);
    }
    return letters.sort();

}

function buildtree(letters) {
    while (letters.length > 1) {
        var leasttwo = letters.slice(0, 2);
        var therest = letters.slice(2, letters.length);
        var combfreq = letters[0][0] + letters[1][0];
        letters = therest;
        var two = [combfreq, leasttwo];
        letters.push(two);
        letters.sort();
    }
    return letters[0];
}

function trimtree(tree) {
    var p = tree[1];
    if (typeof p === 'string') {
        return p;
    }
    else {
        return (Array(trimtree(p[0]), trimtree(p[1])));
    }
}

function assigncodes(node, pat) {
    
    pat = pat || "";
    if (typeof (node) == typeof ("")) {
        codes[node] = pat;
    }
    else {
        assigncodes(node[0], pat + "0");
        assigncodes(node[1], pat + "1");
    }
    return codes;
}

function encode(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        output = output + codes[str[i]];
    }
    return output;
}

function decode(tree, str) {
    var output = "";
    var p = tree;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '0') {
            p = p[0];
        }
        else {
            p = p[1];
        }
        if (typeof p === 'string') {
            output = output + p;
            p = tree;
        }
    }
    return output;
}

var message = 'BCCABBDDAECCBBAEDDCC';
var freqs = frequency(message);
var sortedFre = sortfreq(freqs);
var tree = buildtree(sortedFre);
var trimtree = trimtree(buildtree(sortedFre));
var codes = assigncodes(trimtree);
var encodedMessage = encode(message);
var decode = decode(trimtree, encodedMessage);
console.log('##### frequency of letters #########')
console.log(freqs);
console.log('##### Sorted frequency of letters #########')
console.log(sortedFre);
console.log('##### tree of letters with frequency #########')
console.log(tree);
console.log('##### tree of letters  #########')
console.log(trimtree);
console.log('##### codes #########')
console.log(codes);
console.log('##### encoded message #########')
console.log(encodedMessage);
console.log('##### decoded message #########')
console.log(decode);