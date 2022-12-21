function clock(){
    let date = new Date()
    console.log(date)
    let hours = date.getHours()
    console.log(hours)
    let mins = date.getMinutes()
    console.log(mins)
    let secs = date.getSeconds()
    console.log(secs)
    
    let meridian
    if(hours>=12){
        meridian ="PM"
    }
    else{
        meridian = "AM"
    }
    if(hours>12){
        hours-=12
    }
    
    if(hours<10){
        hours = `0${hours}`
    }
    
    if(mins<10){
        mins = `0${mins}`
    }
    
    if(secs<10){
        secs = `0${secs}`
    }
    
    
    
    let hrsSlot= document.getElementsByClassName("time")
    hrsSlot[0].innerHTML = hours
    console.log(hrsSlot)
    
    let minsSlot= document.getElementsByClassName("time2")
    minsSlot[0].innerHTML = mins
    
    let secsSlot= document.getElementsByClassName("time3")
    secsSlot[0].innerHTML = secs
    
    let meridianSlot= document.getElementsByClassName("time4")
    meridianSlot[0].innerHTML = meridian

    if(hours >= 12){
        if(meridian == "PM"){
             aft()
        }
    }

function aft(){
        let aftText = document.getElementsByClassName("grab")
        aftText[0].innerText = "LET'S HAVE SOME LUNCH !!"
         
        let aftquote =  document.getElementsByClassName("good")
        aftquote[0].innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"

        let aftimg = document.getElementsByClassName("last")
        aftimg[0].src = "./Component 31 - 1.jpg" 

    }


    if((hours>=04) && (hours<08)){
           if(meridian == "PM"){
               eve()
           }
    }


function eve(){
    let evetext = document.getElementsByClassName("grab")
    evetext[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"

    let evequote =  document.getElementsByClassName("good")
    evequote[0].innerText = "GOOD EVENING !!"

    let eveimg = document.getElementsByClassName("last")
    eveimg[0].src = "./lunch_image.jpg"
   }  

   if(hours>=08){
    if(meridian == "PM"){
        nyt()
    }
   }

function nyt(){
    let nytText = document.getElementsByClassName("grab")
    nytText[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
 
    let nytquote =  document.getElementsByClassName("good")
    nytquote[0].innerText = "GOOD NIGHT !!"

    let nytimg = document.getElementsByClassName("last")
    nytimg[0].src = "./goodnight_image.jpg"

}

  if((hours>=12) && (hours<=06)){
    if(meridian == "AM"){
        nyt()
    }
  }
    }
    
    setInterval(() => {
        clock()
    }, 1000);

    
    function alarmSet(){
        let wake = document.getElementsByClassName("wake")
        let selectElement1 = document.querySelector(".c1").value
        wake[0].innerHTML = `Wake Up Time:${selectElement1}`
      
   
        let lunch = document.getElementsByClassName("lunch")
        let selectElement2 = document.querySelector(".c2").value
        lunch[0].innerHTML = `lunch Time:${selectElement2}`
      
    

  
        let nap = document.getElementsByClassName("nap")
        let selectElement3 = document.querySelector(".c3").value
        nap[0].innerHTML = `Nap Time : ${selectElement3}`
      
    
        let night = document.getElementsByClassName("night")
        let selectElement4 = document.querySelector(".c4").value
        night[0].innerHTML = `lunch Time : ${selectElement4}`
      
    }