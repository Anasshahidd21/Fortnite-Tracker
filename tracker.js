const nightmare = require('nightmare')()

const arguments = process.argv.slice(2)
var username = arguments[0]
if(username==undefined){
    console.log("Please Enter a Username")
    return 0;
}
var tracker =""
async function fortniteTracker(){

    try{

        tracker = await nightmare.goto("https://fortnitetracker.com/profile/all/" + username)
                                    .wait(1000)
                                    .evaluate(()=> {
                                        let array = document.getElementsByClassName("trn-defstat mb0 trn-defstat--large")
                                        const answer = array[array.length-1].innerText
                                        const vals = answer.split("\n")
                                        return vals[1]
                                    })
                                    .end()                     
        console.log("The K/D of " + username , "is: " + tracker)

    }catch(e){
        console.log("No User Exists with that Name, Try Again with a valid username!")
    } 
}




fortniteTracker()