function RandomColor(){
    const randomArr = Array.from({length: 3}, () => Math.floor(Math.random() * 256));
    const hexArr = randomArr.map((value) => value.toString(16).padStart(2, "0"));
    const color = "#" + hexArr.join("");
    document.getElementById("result").style.backgroundColor = color;
    document.getElementById("result").innerHTML = color;
    }
