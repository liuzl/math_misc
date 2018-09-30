require("./all.js");

var e = nerdamer('x^2+2*(cos(x)+x*x)');
console.log(e.text());

//result:
//2*cos(x)+3*x^2


var e = nerdamer('x^2+2*(cos(x)+x*x)',{x:6});
console.log(e.text());

//result:
//108+2*cos(6)
//

var e = nerdamer('x^2+2*(cos(x)+x*x)',{x:6}).evaluate();
console.log(e.text('fractions'));

//result:
//429607273/3908351

var LaTeX = nerdamer('x^2+2*(cos(x)+x*x)',{x:0.25}).toTeX();
console.log(LaTeX);

//result:
//2 \cdot \mathrm{cos}\left(\frac{1}{4}\right)+\frac{3}{16}

var LaTeX = nerdamer('x^2+2*(cos(x)+x*x)',{x:0.25}).toTeX('decimal');
console.log(LaTeX);

//result:
//2 \cdot \mathrm{cos}\left(0.25\right)+0.1875

var e = nerdamer('x^2+2*(cos(x)+x*x)',{x:'x^2+1'});
console.log(e.text());

//result:
//2*cos(1+x^2)+3*(1+x^2)^2

var knownValues = {x:'x^2+1'};
nerdamer('x^2+2*(cos(x)+x*x)').evaluate(knownValues);
nerdamer('sin(x)^2+cos(x)^2').evaluate(knownValues);

console.log(nerdamer.expressions());

//result:
//[ 46.692712758272776, 1 ]
//


