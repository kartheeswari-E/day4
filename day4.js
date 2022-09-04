//1.Declare four variables without assigning values and print them in console
var a,b,c,d;
console.log(a,b,c,d);
//2.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);
//4.Declare variables to store your first name, last name, marital status, country and age in single lines

function details(firstname,lastname,country,maritalstatus,age)
{
    console.log(firstname,lastname,country,maritalstatus,age);

}details("mary","jon","india","no",21);
//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

function details1(firstname,lastname,country,maritalstatus,age)
{
    console.log(firstname);
    console.log(lastname);
    console.log(country);
    console.log(maritalstatus);
    console.log(age);
}details1("mary","jon","india","no",21);
//5.Declare variables and assign string, boolean, undefined and null data types
var str="hai";
var boolean=true;
var undefined=undefined;
var s=null;
console.log(str,boolean,undefined,s);
//6. Convert the string to integer
var str="You are 30 years old.";
console.log(parseInt(str));
console.log(+(str));
console.log(Number(str));
//7. Write 6 statement which provide truthy & falsey values.
1=='1';//true
1==="1";//false
1==[1];//true
1===[1];//false
'1'==[1];//true
'1'===[1];//false

//Task 2: Simple Programs todo for Operators
//1.Square of a number
var a=5;
console.log(a*a);
//2.Swapping 2 numbers
var a1=10;
var b1=20;
var temp;
temp=a1;
a1=b1;
b1=temp;
console.log(a1,b1);
//3.Addition of 3 numbers
var a=5,b=5,c=1;
console.log(a+b+c);
//4.Celsius to Fahrenheit conversion
var a=32;
console.log(a*1.8+32);
//5.Meter to miles
var m=50000;
console.log(m/1609.344);
//6.Pounds to kg
var ibs=5;
console.log(ibs*0.45359237);
//7.Calculate Batting Average
function averageRuns(runs, matches, notout)
{
     let out1;
    out1 = matches - notout;
 if (out1 == 0)
        return -1;
 let avg = parseInt((runs) / out1, 10);
return avg;
}
let runs = 10000;
let matches = 250;
let notout = 60;
let avg = averageRuns(runs, matches, notout);
if (avg == -1)
    console.log("NA");
else
    console.log(avg);
//8.Calculate five test scores and print their average
var tamil=50,eng=80,math=100,social=60,science=87;
var total=tamil+eng+math+science+social;
console.log(total/5);
//9.Power of any number.
var x1=10;
var y1=3;
console.log(Math.pow(x1,y1));
//10.Calculate Simple Interest
var p=100,r=3,t=20;
console.log(p*r*t/100);
//11.Calculate area of an equilateral triangle
var a=3;
console.log(1.732050807568877*a*a/4);
//12.Area Of Isosceles Triangle
var b=3,h=5;
console.log(1*b*h/2);
//13.Volume Of Sphere
var r=5;
console.log(4*22*r*r*r/3*7);
//14.Volume Of Prism
var b=3,h=5;
console.log(b*h);
//15.Find area of a triangle.
var s = (side1 + side2 + side3) / 2; 
var area = Math. sqrt(s * ((s - side1) * (s - side2) * (s - side3))); 
