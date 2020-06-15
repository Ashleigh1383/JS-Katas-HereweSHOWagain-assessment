// Contributors are myself, Kylie, Joseph, Adarjun
// Label each Kata with headings, followed by the solution
// sectionElement.append(newDiv)
// let newDiv = document.createElement('div')

// KATA 1
const newElement = document.querySelector("main")
const Kata1Heading = document.createElement("h1")
Kata1Heading.append("Kata1")
newElement.append(Kata1Heading)
const solution = document.createElement("div")
solution.append("Solution")
newElement.append(solution)

    for(let counter1 = 1; counter1 <= 20; counter1 += 1) {
        const newDiv = document.createElement("div")
        solution.append(newDiv)
        newDiv.append(counter1)
    }

// KATA 2
const Kata2Heading = document.createElement("h1")
Kata2Heading.append("Kata2")
newElement.append(Kata2Heading)
const solution2 = document.createElement("div")
solution2.append("Solution")
newElement.append(solution2)

  for(let counter1 = 2; counter1 <= 20; counter1 += 2) {
    const newDiv = document.createElement("div")
    solution2.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 3
const Kata3Heading = document.createElement("h1")
Kata3Heading.append("Kata3")
newElement.append(Kata3Heading)
const solution3 = document.createElement("div")
solution3.append("Solution")
newElement.append(solution3)

  for(let counter1 = 1; counter1 <= 20; counter1 += 2) {
    const newDiv = document.createElement("div")
    solution3.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 4
const Kata4Heading = document.createElement("h1")
Kata4Heading.append("Kata4")
newElement.append(Kata4Heading)
const solution4 = document.createElement("div")
solution4.append("Solution")
newElement.append(solution4)

  for(let counter1 = 5; counter1 <= 100; counter1 += 5) {
    const newDiv = document.createElement("div")
    solution4.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 5
const Kata5Heading = document.createElement("h1")
Kata5Heading.append("Kata5")
newElement.append(Kata5Heading)
const solution5 = document.createElement("div")
solution5.append("Solution")
newElement.append(solution5)

  for(let counter1 = 1; counter1 <= 10; counter1 += 1) {
    let counterSquare = counter1 * counter1
    const newDiv = document.createElement("div")
    solution5.append(newDiv)
    newDiv.append(counterSquare)
    }

// KATA 6
const Kata6Heading = document.createElement("h1")
Kata6Heading.append("Kata6")
newElement.append(Kata6Heading)
const solution6 = document.createElement("div")
solution6.append("Solution")
newElement.append(solution6)

  for(let counter1 = 20; counter1 >= 1; counter1 -= 1) {
    const newDiv = document.createElement("div")
    solution6.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 7
const Kata7Heading = document.createElement("h1")
Kata7Heading.append("Kata7")
newElement.append(Kata7Heading)
const solution7 = document.createElement("div")
solution7.append("Solution")
newElement.append(solution7)

  for(let counter1 = 20; counter1 >= 1; counter1 -= 2) {
    const newDiv = document.createElement("div")
    solution7.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 8
const Kata8Heading = document.createElement("h1")
Kata8Heading.append("Kata8")
newElement.append(Kata8Heading)
const solution8 = document.createElement("div")
solution8.append("Solution")
newElement.append(solution8)

  for(let counter1 = 19; counter1 >= 1; counter1 -= 2) {
    const newDiv = document.createElement("div")
    solution8.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 9
const Kata9Heading = document.createElement("h1")
Kata9Heading.append("Kata9")
newElement.append(Kata9Heading)
const solution9 = document.createElement("div")
solution9.append("Solution")
newElement.append(solution9)

  for(let counter1 = 100; counter1 >= 5; counter1 -= 5) {
    const newDiv = document.createElement("div")
    solution9.append(newDiv)
    newDiv.append(counter1)
    }

// KATA 10
const Kata10Heading = document.createElement("h1")
Kata10Heading.append("Kata10")
newElement.append(Kata10Heading)
const solution10 = document.createElement("div")
solution10.append("Solution")
newElement.append(solution10)

  for(let counter1 = 10; counter1 >= 1; counter1 -= 1) {
    let counterSquare = counter1 * counter1
    const newDiv = document.createElement("div")
    solution10.append(newDiv)
    newDiv.append(counterSquare)
    }

// KATA 11
const Kata11Heading = document.createElement("h1")
Kata11Heading.append("Kata11")
newElement.append(Kata11Heading)
const solution11 = document.createElement("div")
solution11.append("Solution")
newElement.append(solution11)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
    for (let counter1=0; counter1 < sampleArray.length; counter1++) {
        let newList = sampleArray[counter1]
    
    const newDiv = document.createElement("div")
    solution11.append(newDiv)
    newDiv.append(newList)
    }

// KATA 12
const Kata12Heading = document.createElement("h1")
Kata12Heading.append("Kata12")
newElement.append(Kata12Heading)
const solution12 = document.createElement("div")
solution12.append("Solution")
newElement.append(solution12)
    
    for (let counter1=0; counter1 < sampleArray.length; counter1 += 2) {
        
        let newList = sampleArray[counter1]
        if(sampleArray[counter1] % 2 === 0){
    const newDiv = document.createElement("div")
    solution12.append(newDiv)
    newDiv.append(newList)
        }
    }


// KATA 13
const Kata13Headding = document.createElement("h1")
Kata13Headding.append("Kata13")
newElement.append(Kata13Headding)
const solution13 = document.createElement("div")
solution13.append("Solution")
newElement.append(solution13)
    
    for (let counter1=1; counter1 < sampleArray.length; counter1 += 2) {
        let newList = sampleArray[counter1]
        if(sampleArray[counter1] % 2 === 1){
    const newDiv = document.createElement("div")
    solution13.append(newDiv)
    newDiv.append(newList)
    }
}

// KATA 14
const Kata14Heading = document.createElement("h1")
Kata14Heading.append("Kata14")
newElement.append(Kata14Heading)
const solution14 = document.createElement("div")
solution14.append("Solution")
newElement.append(solution14)
    for(counter1 = 0; counter1< sampleArray.length; counter1++) {
        let list = sampleArray[counter1] 
        let listSquare=list*list        
        const newDiv = document.createElement('div')         
        solution14.append(newDiv)        
        newDiv.append(listSquare)             
     }

// KATA 15
const Kata15Heading = document.createElement("h1")
Kata15Heading.append("Kata15")
newElement.append(Kata15Heading)

const solution15 = document.createElement("div")
solution15.append("Solution")
newElement.append(solution15)
let generic=0
for(let counter1 = 1; counter1 <= 20; counter1 += 1) {
    generic+=counter1
    
    const newDiv = document.createElement("div")
    solution15.append(newDiv)
    newDiv.append(generic)
}
// KATA 16
const Kata16Heading = document.createElement("h1")
Kata16Heading.append("Kata16")
newElement.append(Kata16Heading)

const solution16 = document.createElement("div")
solution16.append("Solution")
newElement.append(solution16)
for(let counter1 = 0; counter1 <= sampleArray.length; counter1 += 1) {

var sum = sampleArray.reduce(function(a, b) {
    return a + b
},0)
    
    
}
const newDiv2 = document.createElement("div")
solution16.append(newDiv2)
newDiv2.append(sum)
    
// KATA 17
const Kata17Heading = document.createElement("h1")
Kata17Heading.append("Kata17")
newElement.append(Kata17Heading)

const solution17 = document.createElement("div")
solution17.append("Solution")
newElement.append(solution17)
let lowestNum = sampleArray[0]
for(let counter1 = 0; counter1 < sampleArray.length; counter1++) {
  
  if(sampleArray[counter1] < lowestNum){
    
    lowestNum = sampleArray[counter1]
         
 }
    
}
const newDiv3 = document.createElement("div")
solution17.append(newDiv3)
newDiv3.append(lowestNum)

// KATA 18
const Kata18Heading = document.createElement("h1")
Kata18Heading.append("Kata18")
newElement.append(Kata18Heading)
const solution18 = document.createElement("div")
solution18.append("Solution")
newElement.append(solution18)
let highestNum = 0
for(let counter1 = 0; counter1 < sampleArray.length; counter1++) {
  
  if(sampleArray[counter1] > highestNum){
    
    highestNum = sampleArray[counter1]
         
 }
    
}
const newDiv4 = document.createElement("div")
solution18.append(newDiv4)
newDiv4.append(highestNum)