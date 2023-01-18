// for sound output
const timer = function (intervals) {
  intervals = process.argv.slice(2)

  if (!intervals) {
    return
  }

  const beep = () => {
    process.stdout.write('\x07')
  }

  for (const interval of intervals) {
    if (interval < 0 || !interval) {
      break
    }
    setTimeout(beep, interval * 1000)
  }
}

timer() // node 3 5 9 10 15

//----------------------------------------------------------------------------------------------------------------------------------------

//For visual output

const data = process.argv.slice(2);
let numbers = data.filter(number => {
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('beep');
      return process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(numbers); // node 3 5 9 10 15
