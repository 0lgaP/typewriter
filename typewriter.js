const sentence = "hello there from lighthouse labs";
let counter = 0;
const typewriter = function(arr) {
  for (const letter of arr) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, counter);
    counter += 50;
    
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, counter);
};
typewriter(sentence);
