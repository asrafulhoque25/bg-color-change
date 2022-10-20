window.onload = () =>{
    main()
}

function main(){
    const mainBody = document.getElementById('root')
    const clickBtn = document.getElementById('clickbtn')
    clickBtn.addEventListener('click', function(){
        console.log("clicked");
        const bgColor = rgbColor();
        mainBody.style.backgroundColor = bgColor;
    })

}

 function rgbColor(){
     const red = Math.floor(Math.random() * 255)
     const green = Math.floor(Math.random() * 255)
     const blue = Math.floor(Math.random() * 255)
     return `rgb(${red}, ${green}, ${blue})`
 }
