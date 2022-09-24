export default class TypeWriter {
  private txtElement: Element;

  private readonly words: string[];

  private txt: string;

  private wordIndex: number;

  private readonly wait: number;

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
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.slice(0, Math.max(0, this.txt.length - 1))
      : fullTxt.slice(0, Math.max(0, this.txt.length + 1));

    this.txtElement.innerHTML = `<span>${this.txt}</span>`;

    let typeSpeed = 180;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 350;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
