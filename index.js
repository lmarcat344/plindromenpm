module.exports=Phrase;

// reverse string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

//return true a palindrom , false oterwise;
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function emailParts(email) {
  return email.split("@");
}

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;
  this.letters = function letters() {
    // let theLetter = [];
    // const letterRegex = /[a-z]/i;
    // Array.from(this.content).forEach(function(character) {
    //   if(character.match(letterRegex)) {
    //     theLetter.push(character);
    //   }
    //
    // });
    //
    // return theLetter.join("");
    return (Array.from(this.content).filter(c => c.match(/[a-z]/gi))||[]).join("");
  }

  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }


  this.palindrome = function palindrome() {

    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function() {
    return this.content.toUpperCase();
  }
}

function TranslatePhrase(content, translation){
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }

}

TranslatePhrase.prototype = new Phrase();
