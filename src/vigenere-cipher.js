class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMsg = "";
    let encryptStep = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i).toUpperCase();
      const keyChar = key.charAt(encryptStep % key.length).toUpperCase();
      if (this.getCharCode(char) === -1) {
        encryptMsg += char;
      } else {
        const encryptChar = this.getCharFromCode(
          this.getCharCode(char) + this.getCharCode(keyChar)
        );
        encryptStep++;
        encryptMsg += encryptChar;
      }
    }

    if (this.isDirect) {
      return encryptMsg;
    } else {
      return encryptMsg
        .split("")
        .reverse()
        .join("");
    }
  }

  decrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw Error;
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptMsg = "";
    let decryptStep = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i).toUpperCase();
      const keyChar = key.charAt(decryptStep % key.length).toUpperCase();
      if (this.getCharCode(char) === -1) {
        decryptMsg += char;
      } else {
        let decryptCharCode =
          this.getCharCode(char) - this.getCharCode(keyChar);
        if (decryptCharCode < 0) {
          decryptCharCode = this.ALPHABET.length + decryptCharCode;
        }
        const decryptChar = this.getCharFromCode(decryptCharCode);
        decryptStep++;
        decryptMsg += decryptChar;
      }
    }

    if (this.isDirect) {
      return decryptMsg;
    } else {
      return decryptMsg
        .split("")
        .reverse()
        .join("");
    }
  }

  getCharCode(char) {
    return this.ALPHABET.indexOf(char);
  }

  getCharFromCode(code) {
    code = code % this.ALPHABET.length;
    return this.ALPHABET.charAt(code);
  }
}

module.exports = VigenereCipheringMachine;
