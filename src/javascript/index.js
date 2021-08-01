let addelement = () => {
    
    let list = document.getElementById("list");
    let info = document.createElement("h1");
    let icon = document.createElement("img");
    let newlist = document.createElement("div");
    let button = document.createElement("button");
    let getinfo = document.getElementById("input-dolist").value;
    

    // Add style to the div
    newlist.style.width = "500px";
    newlist.style.height = "50px";
    newlist.style.border = "1px solid black";
    newlist.style.fontFamily = "Poppins-light";
    newlist.style.fontSize = "16px";
    newlist.style.display = "flex";
    newlist.id = list.childNodes.length;

    


    // Add style to the info
    info.innerText = `${list.childNodes.length}. ${getinfo}`;
    info.style.margin = "auto";
    info.style.marginLeft = "20px";

    // Add style to the icon
    icon.src = "../resource/images/close.png";
    icon.width = "60px";
    icon.height = "45px";
    
    // Add style to the button
    button.style.backgroundColor = "red";
    button.style.border = "none";
    button.id = list.childNodes.length;
    button.onclick = function() {
        let list = document.getElementById("list");

    for (let i=0; i<list.childNodes.length; ++i) {
        if (list.childNodes[i].id == this.id) {
            let dolist = document.getElementById(this.id);
            list.removeChild(dolist);
        }
    }
    
    }
    button.src = "../resource/images/close.png";

    // Add style to the number

    


    // To check that if the to-do-list have more than one element  the next element will have a little margintop

    if (list.childNodes.length >= 1) {
        newlist.style.marginTop = "50px";

    }





    
    

    
    


    // Append new do list to the list div
    
    
    newlist.appendChild(info);
    newlist.appendChild(button);
    
    
    
    list.appendChild(newlist);

   

    

}

