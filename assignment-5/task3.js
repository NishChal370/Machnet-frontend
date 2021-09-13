
/*3) Write a program to display:
	   e
	  cec
	 aceca
    racecar
 */
const createPyramid = (inputStr) => {

    let length = inputStr.length % 2 == 0 ? inputStr.length / 2 : (inputStr.length + 1) / 2;
    let count = inputStr.length % 2 == 0 ? 2 : 1;

    const addWhiteSpace = (numOfSpace) => {
        let array = [];
        for (let i = 1; i <= numOfSpace; i++) {
            array.push(" ");
        }

        return array.join("");

    };

    for (let i = length; i >= 1; i--) {

        let result = addWhiteSpace(i - 1) + inputStr.substr(i - 1, count);
        count += 2;
        console.log(result);
    }

};

createPyramid('racecar');


