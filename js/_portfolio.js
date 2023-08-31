const divcard = document.getElementById("card-imagen");
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
                templatecard.querySelector('img').setAttribute("src",i.url)
                templatecard.querySelector('h5').textContent = i.titulo;
                templatecard.querySelector('h6').textContent = i.description;
                
                const clone1 = templatecard.cloneNode(true);
                fragment2.appendChild(clone1);
            })
    
            divcard.appendChild(fragment2);;
        }
   