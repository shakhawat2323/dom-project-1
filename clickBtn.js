


    
    const buttonn= document.getElementById('chang-rgb-color');
    buttonn.addEventListener('click',function(event){
        
        const bgcolor=Rgbcolor();
        console.log(bgcolor)
        document.body.style.backgroundColor=bgcolor;
        
        
    })


function Rgbcolor(){
    // ai khane amra math.random *255 deyar karon holo rgb
    // color 255 upore hoy na tai amra 255 diye gun kore dici
    const red =Math.floor(Math.random() * 255)
    const gren =Math.floor(Math.random() * 255)
    const blue =Math.floor(Math.random() * 255)
    

    return `rgb(${red},${gren},${blue})`
}





