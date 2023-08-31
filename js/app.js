
$(function(){
           
    //$("#sobreMi").load("./template/aboutme.html");
    //$("#portfolio").load("./template/portfolio.html");
    //$("#skillset").load("./template/skills.html");
    //$("#contact").load("./template/contact.html");
    //$("#proyectos").load("./template/proyectos.html");
    $("#about").load("./template/sobreMi.html");
    //$("#skillset").load("./template/skill.html");
    
});


 // function load_sobreMi() { 
    //     document.getElementById("sobreMi").innerHTML='<object type="text/html" data="./template/aboutme.html" ></object>';
    // }   

    // load_sobreMi()



    const items = document.getElementById("items");
    const template = document.getElementById("template-card").content;
    const fragment = document.createDocumentFragment();
    
    fetch('./json/datos.json')
        .then(function (response) {
            return response.json();
        })
        .then( (data) => {
    
           
           cargarCards(data);
    
            
        })
        .catch(function (error) {
            console.log(error);
        });
    
        const cargarCards= (data) =>{
    
            data.forEach(porducto =>{
                template.querySelector('img').setAttribute("title",porducto.name)
                template.querySelector('img').setAttribute("src",porducto.url)
                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
            })
    
            items.appendChild(fragment);
        }
    





//Ctrl + alt + l Console log