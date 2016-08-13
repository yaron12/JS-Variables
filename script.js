/**
 * @author ybensimx
 */
/*--------answer 1----------*/
var x ="3";
console.log(x);
x="yaron";
console.log(x);
console.log(typeof x);
/*-------- answer 2-----------*/

var me = {
 name: "yaron",
 eyecolor:"brown",
 height: 187
};
console.log(me);
me.eyecolor="blue";
console.log(me.eyecolor);
me.country="israel";
israel=true;
me.city="haifa";
me.language="english";
me.language="hebrew";
me.language="russian";
english=true;
hebrew=true;
russian=false;
console.log(typeof hebrew);

/*-------- answer 3-----------*/

var numbers = [2,4,6,8,10,12,14,16,18,20];
console.log(numbers.length);
console.log(numbers[0],numbers[2],numbers[5]);
console.log(numbers[4]);
numbers.splice(8,2);
console.log(numbers);
var both = [0,"zero",1,"one",2,"two",4,"four"];

var person= [
   yaron = {
    "name":"yaron",
     "eyecolor":"brown",
      "height": 187
    },
   eli =  {
    "name":"eli",
     "eyecolor":"black",
      "height": 185
    },
  miki =  {
    "name":"miki",
     "eyecolor":"green",
      "height": 183
    }
];
console.log(person[0].name+" "+person[1].name+" "+person[2].name);

person.shift();
alert(person);

person.unshift(dotan = {
 "name" : "dotan",
 "eyecolor":"blue",
 "height": 185
 })

dotan = {
 name : "dotan"},
 face = {"eye":"blue"}
 
console.log(person);
console.log(person[0].name+" "+person[1].name+" "+person[2].name);


