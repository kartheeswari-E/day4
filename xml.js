//1.how to compare two json have the same properties without order
var object1 = {"name":"person1","age":"5"};
var object2 = {"age":"5","name":"person1"};



var flag;
if(object1.length==(object2).length);
for(var index in object1){
  if(object1[index]===object2[index]){
   flag=true;
  }
                else{
               flag=false;
              
                }
  
}console.log(flag);
//2. display all the country flags and, // 3. display all the country name,region,population ,subregion
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    var countries=xhr.response;
    console.log(countries);
    for(var index in countries)
{
    console.log(countries[index].flags.png);
console.log(countries[index].name.common+" "+countries[index].region+" "+countries[index].population+" "+countries[index].subregion);}//or
}



