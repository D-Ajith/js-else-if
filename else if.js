var marks=prompt("enter no:")
if (marks>=91){
    console.log("O grade")
}
else if(marks>=81){
    console.log("A grade")
}
else if(marks>=61){
    console.log("B grade")
}
else if(marks>=51){
    console.log("C grade")
}
else if(marks>=41){
    console.log("D grade")
}
else if(marks>=28){
    console.log("E grade")
}
else{
    console.log("Fail")
}


var subscription=prompt("Enter your plan here 1080p,720p,1440p,4k:")
if(subscription=="1080p"){
console.log("You are able to see hd movies now!!")
}else if(subscription=="720p"){
    console.log("You are able to see low quality movies")
}else if(subscription=="1440p"){
    console.log("You are able to see  high quality movies")
}else if (subscription=="4k"){
    console.log("You are able to see 4K")
}else{
    console.log("You are so poor!!")
}


var day=prompt("Enter a day:")
if(day== "Monday" ||day== "Tuesday" ||day== "Wednesday" ||day== "Thursday"||day== "Friday"||day== "Saturday"||day== "Sunday"){
    console.log("Your day is "+day)
}else{
    console.log("You not entered a day your input is "+day)
}