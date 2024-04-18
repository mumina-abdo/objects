const people = [
    {name:'Alice', age: 17},
    {name:'Eunice', age: 22},
    {name:'Charlie',age: 14},
    {name:'Max', age: 19},

];

const get18OrOlder =(people) =>{
    return people.filter(person=>person.age >= 18).map(person => person.name);

};
console.log(get18OrOlder(people));


//Question2
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  const groupCategory = Map.groupBy(products,product =>{
    return product.category
  })
  console.log(groupCategory)



// Question3
const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
function getAverageStudents(students) {
  return students.filter(student => {
     const aveScores = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
     return aveScores >= 85;
  }).map(student => student.name);
 }
 const highScores = getAverageStudents(students);
 console.log(highScores);



//   Question4
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function carAge(car) {
    car.age = function() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
    return car;
  };
  const updatedCar = carAge(car);
  console.log(updatedCar.age());
  

