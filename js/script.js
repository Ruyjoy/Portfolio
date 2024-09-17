
const divcard = document.getElementById("galeriaPortafolio");
const templatecard = document.getElementById("card-portfolio").content;
const fragment2 = document.createDocumentFragment();

fetch('./json/cardData.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (res) {

       cargarPortfolio(res)
        
    })
    .catch(function (error) {
        
        console.log(error);
    });
    
    const cargarPortfolio= res =>{

        res.forEach(i =>{
            templatecard.querySelector('#imagen-conta').setAttribute("title",i.titulo)
            templatecard.querySelector('#imagen-conta').setAttribute("src",i.urlimagen)
            templatecard.querySelector('a').setAttribute("href",i.url)
            templatecard.querySelector('h4').textContent = i.titulo;
            templatecard.querySelector('p').textContent = i.description;
            templatecard.querySelector('#img-1').setAttribute("src",i.icono1)
            templatecard.querySelector('#img-2').setAttribute("src",i.icono2)
            templatecard.querySelector('#img-3').setAttribute("src",i.icono3)
            templatecard.querySelector('#img-4').setAttribute("src",i.icono4)
            templatecard.querySelector('#img-5').setAttribute("src",i.icono5)
            templatecard.querySelector('#img-6').setAttribute("src",i.icono6)
            templatecard.querySelector('#img-7').setAttribute("src",i.icono7)
            templatecard.querySelector('#img-8').setAttribute("src",i.icono8)
            
            const clone1 = templatecard.cloneNode(true);
            fragment2.appendChild(clone1);
        })

        divcard.appendChild(fragment2);;
    }



    let lenguaje ="es";
    const primerParrafo = document.getElementById("primerParrafo");
    const togglebtn = document.getElementById("toggle-btn");

    const loadContent = (lenguaje) => {

        fetch('./json/conten.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
    
            primerParrafo.textContent= data[lenguaje].primerParrafo;
            
        })
        .catch(function (error) {
            
            console.log(error);
        });

    }

    togglebtn.addEventListener('change',()=>{

        if(togglebtn.checked){
            lenguaje = "es";
        }else{
            lenguaje = "en";
        }
        loadContent(lenguaje);
    });

    loadContent(lenguaje);