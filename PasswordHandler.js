
class PasswordHandler {
    // constructs the PasswordHandler using the entered password in the text field
    constructor(password) {
        this.password = password;
    }
    constructor(password) {
        this.password = password;
    }
    // gets score based on the password's length using a logorithmic function
    getLengthScore() {
        const passwordLength = this.password.length;
        const lengthScore = ((20*(passwordLength**2))-(5*passwordLength)-50)/(passwordLength**2)
        return lengthScore;
    }
    // Creates a score based on the symbols in the password, uses symbolScoresDictionary to
    // determine each characters score
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
     

    



}