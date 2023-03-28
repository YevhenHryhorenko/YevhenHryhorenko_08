const comma = ','
const dot = '.'

document.write(`First task <br>`)

for (let index = 10; index < 21; index++) {
  document.write(`${index}`)
  index != 20 ? document.write(`${comma} `) : document.write(`${dot}`)
}

document.write(`<br><br>`)

document.write(`Second task <br>`)

for (let index = 10; index < 21; index++) {
  document.write(`${Math.pow(index, 2)}`)
  index != 20 ? document.write(`${comma} `) : document.write(`${dot}`)
}

document.write(`<br><br>`)

document.write(`Third task <br>`)

const number = 7;
let arr = [];
let result;

document.write('<table style="border: 2px solid blue; background-color: yellow">');
for (let i = 1; i < 11; i++) {
  arr[i] = [];
  for (let j = 2; j < number; j++) {
    arr[i][j] = i * j;
    result = i * number;

  }
  document.write(`<tr> <td style="border: 2px solid blue; padding: 5px">${i} * ${number} </td> <td style="border: 2px solid blue; padding: 5px">${result}</td> </tr>`);
}
document.write('</table>');

document.write(`<br><br>`)

document.write(`Fourth task <br>`)

let res = 0

for (let index = 1; index < 16; index++) {
  res = index + res
}

document.write(`${res}`)

document.write(`<br><br>`)

document.write(`Fifth task <br>`)

res = 15

for (let index = 16; index < 36; index++) {
  res = res * index
}

document.write(`${res}`)

document.write(`<br><br>`)

document.write(`Sixth task <br>`)

res = 0

for (let index = 1; index < 501; index++) {
  res = index + res
}

document.write(`${res / 500}`)

document.write(`<br><br>`)

document.write(`Seventh task <br>`)

res = 0

for (let index = 30; index < 81; index++) {
  if (index % 2 == 0) {
    res = index + res
  }
}

document.write(`${res}`)

document.write(`<br><br>`)

document.write(`Eighth task <br>`)

for (let index = 100; index < 201; index++) {
  if (index % 3 == 0) {
    document.write(`${index} `)
  }
}

document.write(`<br><br>`)

document.write(`Nineth task <br>`)

const num = +prompt("Enter number from N", 20)

for (let index = 1; index <= num; index++) {
  if (num % index == 0) {
    document.write(`${index}`)
    index != num ? document.write(`${comma} `) : document.write(`${dot}`)
  }
}

document.write(`<br><br>`)

document.write(`Tenth task <br>`)
let counter = 0

for (let index = 1; index <= num; index++) {
  if (num % index == 0) {
    if (index % 2 == 0) {
      counter++

    }
  }
}

document.write(`${counter}`)

document.write(`<br><br>`)

document.write(`Eleventh task <br>`)
res = 0

for (let index = 1; index <= num; index++) {
  if (num % index == 0) {
    if (index % 2 == 0) {
      res += index
    }
  }
}

document.write(`${res}`)

document.write(`<br><br>`)

document.write(`Twelfth task <br>`)

document.write(`<table style="border: 2px solid blue; background-color: yellow">`)
for (let index = 1; index < 10; index++) {
  for (let j = 1; j < 10; j++) {
    document.write(`<tr> <td style="border: 2px solid blue; padding: 5px"> ${index} * ${j}</td> <td style="border: 2px solid blue; padding: 5px">${index * j}</td> </tr>`)
  }
}
document.write(`</table>`)
