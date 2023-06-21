const http = require("node:http");

let mostAccuratePi = 0;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.url.startsWith("/pi") && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ pi: mostAccuratePi }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

async function calculatePi() {
  let previousPi = 0;
  let currentPi = 0;
  let sign = 1;
  let decimalPrecision = 0;
  let i = 0;

  while (true) {
    const denominator = 2 * i + 1;
    const term = sign * (4 / denominator);
    currentPi += term;
    sign *= -1;

    const previousPiDecimal = getNthDecimal(previousPi, decimalPrecision);
    const currentPiDecimal = getNthDecimal(currentPi, decimalPrecision);

    if (previousPiDecimal === currentPiDecimal) {
      mostAccuratePi = currentPiDecimal;
      decimalPrecision++;
      console.log(currentPiDecimal);
    }

    previousPi += term;
    i++;

    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

function getNthDecimal(number, decimalPrecision) {
  if (decimalPrecision === 0) {
    return Math.floor(number);
  }

  const factor = 10 ** decimalPrecision;
  const roundedNumber = Math.floor(number * factor);
  return roundedNumber / factor;
}

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  calculatePi();
});
