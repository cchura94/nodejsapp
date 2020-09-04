const numero1 = 80;
const numero2 = 82;

const Math = {
  n1: 60,
  n2: 50,
};

module.exports = Math;

module.exports.num1 = numero1;
module.exports.num2 = numero2;
module.exports.num3 = 85;

// export

function suma(a, b) {
  console.log(a + b);
}

const resta = function (a, b) {
  console.log(a - b);
};

module.exports = {
  suma,
  resta,
};
