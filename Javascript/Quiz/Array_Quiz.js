// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    let result = fruits.join('');
    console.log("1")
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let result = fruits.split(' ');
    console.log("2");
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    array.sort((a, b)=>{
        return b - a;
    })
    // array.reverse();
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    let new_array = array.slice(0,2);
    console.log(new_array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      let result = students.filter(student => {
        return student.score === 90
      })
      console.log(result);
      console.log("05");
      result = students.find(student =>{
          return student.score === 90
      })
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      let result = students.filter(student => {
          return student.enrolled === true
      })
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      let result = students.map(student =>{
          return student.score;
      })   
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      let result = students.filter(student =>{
          return student.score < 50;
      })
      console.log(result);
  }
  
  // Q9. compute students' average score
  {
      let count = 0;
      let result = students.reduce((prev , cur)=>{
        count++;  
        prev = prev + cur.score;
        return prev
      },0)
      console.log(result/count);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      let result = students
      .map(student =>{return student.score})
      .join();
      console.log(result);

  }
  
  // Q11. make a string containing all the scores
  // result should be: '80, 90, 66, 88'
  {
      let result = students
      .map(student =>{
        return student.score;
      })
      .filter(score =>{
          return score >= 50
      })
      .join();
      console.log(result);
  }

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      let result = students
      .map(student => {
          return student.score
      })
      .sort((a,b) =>{
          return a - b;
      })
      console.log(result);
  }