function TextGenerator() {
    const result = Math.random().toString(36).substring(2,10); // substring first arg 2 is used to remove the 0. (indices 0 and 1) and second argument defines the length 10-2 = 8;
    const result1 = Reverse(result);
    document.getElementById("result").innerHTML = result;
    document.getElementById("result1").innerHTML = result1;
}

function Reverse(string) {
    reversedString = string.split('').reverse().join('');
    return reversedString;
}