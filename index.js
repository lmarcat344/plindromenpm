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

  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
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
