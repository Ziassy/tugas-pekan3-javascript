const prompt = require('prompt-sync')({sigint: true});

const inputNumber = parseInt(prompt("Masukkan angka genap:"))

 const countSquareRoot = (inputNumber) => {

  if (inputNumber < 0) {
    console.log("Tidak bisa input bilangan negatif")
    return
  }

  if (inputNumber % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil")
    return
  }

  const result = Math.sqrt(inputNumber)
  console.log("Akar pangkat 2 dari " + inputNumber + " adalah " + result)
}

countSquareRoot(inputNumber)
