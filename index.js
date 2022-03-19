function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

//Challenge 1
  height= height/100;
  
  let BMI = weight / (height*height);
  alert(BMI);

 //-------------------------------------------------------------//

  // Challenge 2
  let state;

  //  if ( BMI < 18.5){
  //    state="underweight";
  //    alert(state);
  //  }
  //  else if ( BMI >= 18.5 && BMI <= 24.9 ){
  //   state="Helthy Weight";
  //   alert(state);
  //  }
  //  else if( BMI >= 25.0 &&  BMI <= 29.9 ){
  //   state="OverWeight";
  //   alert(state);
  //  }
  //  else {
  //   state="Above Obesity";
  //   alert(state);
  //  }

  //-------------------------------------------------------------//

   //Challenge 3
   if ( age >= 19 && age <=24){
     if (BMI < 18.5){
      state="underweight";
      alert(state)
     }
     else if( BMI >= 18.5 && BMI <= 24.9){
      state="Helthy Weight";
      alert(state);
     }
     else if ( BMI >= 25 && BMI <= 29.9){
      state="OverWeight";
      alert(state);
     }
     else{
      state="Above Obesity";
      alert(state);
     }
   }

   else if ( age >= 25 && age <=34){
    if (BMI < 18.5){
     state="underweight";
     alert(state)
    }
    else if( BMI >= 18.5 && BMI <= 24.9){
     state="Helthy Weight";
     alert(state);
    }
    else if ( BMI >= 25 && BMI <= 29.9){
     state="OverWeight";
     alert(state);
    }
    else{
     state="Above Obesity";
     alert(state);
    }
  }

  else if ( age >= 35 && age <=44){
    if (BMI < 21){
     state="underweight";
     alert(state)
    }
    else if( BMI >= 21 && BMI <= 26.9){
     state="Helthy Weight";
     alert(state);
    }
    else if ( BMI >= 27 && BMI <= 31.9){
     state="OverWeight";
     alert(state);
    }
    else{
     state="Above Obesity";
     alert(state);
    }
  }

  else if ( age >= 45 && age <=54){
    if (BMI < 22){
     state="underweight";
     alert(state)
    }
    else if( BMI >= 22 && BMI <= 27.9){
     state="Helthy Weight";
     alert(state);
    }
    else if ( BMI >= 28 && BMI <= 32.9){
     state="OverWeight";
     alert(state);
    }
    else{
     state="Above Obesity";
     alert(state);
    }
  }

  else if ( age >= 55 && age <=64){
    if (BMI < 23){
     state="underweight";
     alert(state)
    }
    else if( BMI >= 23 && BMI <= 28.9){
     state="Helthy Weight";
     alert(state);
    }
    else if ( BMI >= 29 && BMI <= 33.9){
     state="OverWeight";
     alert(state);
    }
    else{
     state="Above Obesity";
     alert(state);
    }
  }

 else{
    if (BMI < 24){
     state="underweight";
     alert(state)
    }
    else if( BMI >= 24 && BMI <= 29.9){
     state="Helthy Weight";
     alert(state);
    }
    else if ( BMI >= 30 && BMI <= 34.9){
     state="OverWeight";
     alert(state);
    }
    else{
     state="Above Obesity";
     alert(state);
    }
  }
}


