document.addEventListener("DOMContentLoaded", function () {
    // Select the button and input elements
    const button = document.querySelector("button");
    const input = document.getElementById("hello");

    const brailleOutput = document.createElement("p");
    document.body.appendChild(brailleOutput);

    const brailleMap = {
        a: "01", b: "03", c: "09", d: "19", e: "11",
        f: "0B", g: "1B", h: "13", i: "0A", j: "1A",
        k: "05", l: "07", m: "0D", n: "1D", o: "15",
        p: "0F", q: "1F", r: "17", s: "0E", t: "1E",
        u: "25", v: "27", w: "3A", x: "2D", y: "3D",
        z: "35", " ": "00" // Map space to "00"
    };

    function getBrailleCharacter(hexCode) {
        const unicodeCodePoint = 0x2800 + parseInt(hexCode, 16);
        return String.fromCodePoint(unicodeCodePoint);
    }

    // Add an event listener to the button
    button.addEventListener("click", function() {
        const inputValue = input.value.toLowerCase();
        let brailleText = "";
        let brailleLiteralText = "";

        for (const char of inputValue) {
            const hexCode = brailleMap[char];
            if (hexCode === "00") {
                brailleText += " "
                brailleLiteralText += " "
            } else if (hexCode) {
                const brailleChar = getBrailleCharacter(hexCode);
                brailleText += brailleChar;
                brailleLiteralText += "&#x28" + hexCode + ";";
            } else {
                brailleText += char;
                brailleLiteralText += char;
            }
        }

        document.querySelector(".output").innerHTML = `Braille: ${brailleText} <br> Hex Codes: <xmp>${brailleLiteralText}</xmp>`;
        // brailleOutput.innerHTML = `Braille: ${brailleText} <br> Hex Codes: <xmp>${brailleLiteralText}</xmp>`;
        console.log("Braille:", brailleText);
        console.log("Hex Codes:", brailleLiteralText);
    });
});
