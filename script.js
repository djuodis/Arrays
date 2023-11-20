// 1. Užduotis

var personazai = ['Jon Snow','Cersei Lannister','Daenerys Targaryen', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark'];
  
  console.log('Pirmas personažas: ' + personazai[0]);
  console.log('Paskutinis personažas: ' + personazai[personazai.length - 1]);
  
  var eilesNumeris = parseInt(prompt('Įveskite skaičių nuo 1 iki 6'));
  
  if (eilesNumeris >= 1 && eilesNumeris <= 6) {
    console.log('Pasirinktas personažas: ' + personazai[eilesNumeris - 1]);
  } 

  // 2. Užduotis

var number = [1, 2, 3, 4, 5, 6, ]
var suma = 0

for(var i = 0; i < number.length; i++){
  suma += number[i]    
}
console.log('Skaičių suma: ' + suma)


var vidurkis = suma / number.length;

console.log('Skaičių vidurkis: ' + vidurkis)

var maxNumber = Math.max(...number)
console.log('Didžiausias skaičius: ' + maxNumber)

var minNumber = Math.min(...number)
console.log('Mažiausias skaičius: ' + minNumber)