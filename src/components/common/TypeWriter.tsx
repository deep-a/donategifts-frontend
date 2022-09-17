export default class TypeWriter {
  private txtElement: Element;

  private words: string[];

  private txt: string;

  private wordIndex: number;

  private wait: number;

  private isDeleting: boolean;

  constructor(txtElement: Element, words: string[], wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = wait;
    this.isDeleting = false;
  }

  type(): void {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    this.txt = this.isDeleting
      ? fullTxt.slice(0, Math.max(0, this.txt.length - 1))
      : fullTxt.slice(0, Math.max(0, this.txt.length + 1));
    // Insert txt into element
    this.txtElement.innerHTML = `<span>${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 180;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 350;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
