
//****************Solution no 1 *********************//

function convertToMile(inch){

    return inch * 0.0000157828;
  }
  let mile = convertToMile(100000);
  console.log(mile); //1.5782800000000001

  //****************Solution no 2*********************//

  let myFriends = ["Rony", "Jony", "Nayem", "Rubel", "Sadi", "Rakib"];
  let sabinasFriends = ["Rubel", "Tania", "Rakib", "Nazia", "Mahi", "Sadi"];

  function getMutualFriends(arr1, arr2){

    let mutualFriends = [];
    
    for(let i = 0; i < arr1.length; i++){
      for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            mutualFriends.push(arr1[i]);
        }      
      }
    }
    if(mutualFriends.length){
        return mutualFriends;
    }
    else {
        return "No mutual friend";
    }
    
  }
  
  console.log(getMutualFriends(myFriends, sabinasFriends)); //Rubel, Sadi, Rakib
  
  //****************Solution no 3 *********************//

  function woodCalculator(numOfChair, numOfTable, numOfBed){

        let woodInChair = 1 * numOfChair;
        let woodInTable = 3 * numOfTable;
        let woodInBed = 5 * numOfBed;
        
        return (woodInChair + woodInTable + woodInBed) + " Cubic Feet";

  } 
       let totalWood = woodCalculator(6, 3, 2);

       console.log(totalWood); //25 Cubic Feet

  //****************Solution no 4 *********************//

function bricksCalculator(feet, floor){

    return feet * floor * 1000;
}

    let numOfBricksInFirstPart = bricksCalculator(15, 10);
    let numOfBricksInSecondPart = bricksCalculator(12, 10);
    let numOfBricksInLastPart = bricksCalculator(10, 2);

    let totalNumOfBricks = numOfBricksInFirstPart + numOfBricksInSecondPart + numOfBricksInLastPart;

    console.log(totalNumOfBricks); //290000


  //****************Solution no 5 *********************//

  function gradeCalculator(marks){

        if (marks > 0 && marks < 60) {
            console.log("Sorry!!! You have failed in the exam.");
        }
        else if (marks >= 60 && marks <= 64 ) {
            console.log("You have got 'D' grade.");
        }
        else if (marks >= 65 && marks <= 69 ) {
            console.log("You have got 'D+' grade.");
        }
        else if (marks >= 70 && marks <= 74 ) {
            console.log("You have got 'C' grade.");
        }
        else if (marks >= 75 && marks <= 79 ) {
            console.log("You have got 'C+' grade.");
        }  
        else if (marks >= 80 && marks <= 85) {
            console.log("You have got 'B' grade.");
        }  
        else if (marks >= 86 && marks <= 89) {
            console.log("You have got 'A-' grade.");
        } 
        else if (marks >= 90 && marks <= 96) {
            console.log("Congratulations!!! You've selected for the scholarship!");
        } 
        else if (marks >= 97 && marks <= 100 ) {
            console.log("Congratulations!!! You've selected for the scholarship!");
        } 
        else {
            console.log("Invalid Marks");
        }
  }

  gradeCalculator(100); //Congratulations!!! You've selected for the scholarship!
