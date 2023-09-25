
class PasswordHandler {
    // constructs the PasswordHandler using the entered password in the text field
    constructor(password) {
        this.password = password;
    }
   
    // gets score based on the password's length using a logorithmic function
    // see the function graphed here: https://www.desmos.com/calculator/2kh2t3r9yb
    getLengthScore() {
        const passwordLength = this.password.length;
        const lengthScore = 15 - (15 / (1 + Math.pow(passwordLength / 9, 2.3)));
        return lengthScore;
    }
    // Creates a score based on the symbols in the password, uses symbolScoresDictionary to
    // determine each character's score
    getSymbolScore() {
        let symbolScore = 0;
        for (let i = 0; i < this.password.length; i++) {
            const currentCharacter = this.password.charAt(i);
            if (currentCharacter in symbolScoresDictionary) {
                symbolScore += symbolScoresDictionary.currentCharacter;
            }
        }
        return symbolScore;
    }
    /* Checks if the password contains a common word
     * returns true if the password contains consecutive characters that form a common word
     * Uses CommonPasswords.json as a list of common words
     * ex: password returns true while pass3wo4rd returns false
    */
    isCommonWord() {
        const commonPasswords = fs.readFileSync("./CommonPasswords.txt").toString('utf-8'); // converts the text file into an array
        for (const commonpassword of commonPasswords) {
            if (this.password.includes(commonpassword)) {
                return true;
            }
        }
        return false;
    }
    /* Computes the current password score by adding the length and symbol scores
     * if the password has a common word in it or no symbols, the method caps the score at 3
     */
    computePasswordScore() {
        let passwordScore = this.password.getLengthScore + this.password.getSymbolScore;
        if (this.password.isCommonWord || this.password.getSymbolScore === 0) {
            if (passwordScore > 3) {
                return 3;
            }
            return passwordScore;
        }
        return this.password.getLengthScore;
    }


}