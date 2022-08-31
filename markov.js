/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();

    for(let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let next = this.words[i + 1] || null;

      if(chains.has(word)){
        chains.get(word).push(nextWord);
      } chains.set(word, [next]);
    }
    this.chains = chains;
  }

  static choice(arr){
    //pick random choice from arr
    return ar[Math.floor(Math.random() * arr.length)]
  }

  /** return random text from chains */
  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    //markov chain until termination word
    while(out.length < numWords && key != null){
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    } return out.join(" ");
  }
}

module.exports = {MarkovMachine}
