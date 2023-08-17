/* class car {
    constructor(brand,model,color,year){
        this.brand=brand;
        this.model=model;
        this.color=color;
        this.year=year;

    }
}
let car1= new car("hyundai","i20","white","2023")
let car2= new car("nexous","i20","black","2023")
let car3= new car("tata","i20","blue","2023")
console.log(car1) */
let arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];
let  od = (arr) => {
  var odd = [];
  var even = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !=0)  {
      odd.push(arr[i])
    }
    else (arr[i] % 2== 0)
    {

      even.push(arr[i])
    }
  }  
  return odd;
};
console.log(od(arr));