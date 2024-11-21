// the start of the oop \\
new Promise( ( resolve , reject ) => {
    setTimeout(() => {
        document.getElementById("head-one").style.visibility = "visible" ;
        resolve()
    }, 500);
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-one").style.visibility = "visible" ;
            resolve()
        }, 200);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-two").style.visibility = "visible" ;
            resolve()
        }, 200);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-three").style.visibility = "visible" ;
            resolve()
        }, 200);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-four").style.visibility = "visible" ;
            resolve()
        }, 200);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("head-two").style.visibility = "visible" ;
            resolve()
        }, 500);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("head-three").style.visibility = "visible" ;
            resolve()
        }, 500);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("clickk").style.visibility = "visible" ;
            resolve()
        }, 500);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("webb").style.visibility = "visible" ;
            resolve()
        }, 500);
    })
})
// the end \\


//  the start of fade in image \\
function showImage(){
    document.getElementById("imagee").style.visibility = "visible" ;
}
document.getElementById("clickk").onclick = showImage
// the end \\


// the start of the slider \\
function add(){
    let old = document.getElementById("active");
    old.id = ""
    old.classList.remove("active")
    if(old.nextElementSibling != null){
        old.nextElementSibling.classList.add("active")
        old.nextElementSibling.id = "active"
    }else{
        old.previousElementSibling.previousElementSibling.classList.add("active")
        old.previousElementSibling.previousElementSibling.id = "active"
    }
}
document.getElementById("next").onclick = add;

function remove(){
    let old = document.getElementById("active");
    old.id = ""
    old.classList.remove("active")
    if(old.previousElementSibling != null){
        old.previousElementSibling.classList.add("active")
        old.previousElementSibling.id = "active"
    }else{
        old.nextElementSibling.nextElementSibling.classList.add("active")
        old.nextElementSibling.nextElementSibling.id = "active"
    }
}    
document.getElementById("prev").onclick = remove;
// the end of the slider \\



