function len(str) {
  return str.length;
}

// get current URL
const url = window.location.href;

// calculate length
const length = len(url);

// show result
alert(`The length of the URL is: ${length}`);
