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
