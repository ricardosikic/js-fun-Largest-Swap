// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// ex: If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

const largestSwap = (num) => {
  let swapNumber = Number(num.toString().split('').reverse().join(''));
  if(num > swapNumber) {
    return true;
  } else if (num === swapNumber) {
    return true;
  } else {
    return false;
  }
}


largestSwap(43)