/* 
 a + b + c = 1000
 a2 + b2 = c2
 a < b < c
 
 c = odmocnina(a + b)
 a + b + odmocnina(a + b) = 1000
*/
let results = [];

for(let a = 1; a <= 999; a++) {
  for(let b = 1; b <= 999; b++) {
    for(let c = 1; c <= 999; c++) {
      if (a + b + c == 1000) {
        results.push({a, b, c});
      }
    }
  }
}

let triplets = results.filter((element) => {
  return ((element.a < element.b < element.c) && (Math.pow(element.a, 2) + Math.pow(element.b, 2) == Math.pow(element.c, 2)));
});

console.log(triplets);
triplets[0].a * triplets[0].b * triplets[0].c;