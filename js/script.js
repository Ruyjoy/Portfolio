const divcard = document.getElementById("galeriaPortafolio");
const templatecard = document.getElementById("card-portfolio").content;
const fragment2 = document.createDocumentFragment();

/*fetch("./json/cardData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (res) {
    cargarPortfolio(res);
  })
  .catch(function (error) {
    console.log(error);
  });*/


const cargar = async(params) => {
  try {
    const respuesta =  await fetch("./json/cardData.json");
    const res =  await respuesta.json();

    cargarPortfolioMap(res);
    
  } catch (error) {
    console.log(error);
  }
}
cargar();

const cargarPortfolio = (res) => {
  res.forEach((i) => {
    templatecard.querySelector("#imagen-conta").setAttribute("title", i.titulo);
    templatecard
      .querySelector("#imagen-conta")
      .setAttribute("src", i.urlimagen);
    templatecard.querySelector("a").setAttribute("href", i.url);
    templatecard.querySelector("h4").textContent = i.titulo;
    templatecard.querySelector("p").textContent = i.description;
    templatecard.querySelector("#img-1").setAttribute("src", i.icono1);
    templatecard.querySelector("#img-2").setAttribute("src", i.icono2);
    templatecard.querySelector("#img-3").setAttribute("src", i.icono3);
    templatecard.querySelector("#img-4").setAttribute("src", i.icono4);
    templatecard.querySelector("#img-5").setAttribute("src", i.icono5);
    templatecard.querySelector("#img-6").setAttribute("src", i.icono6);
    templatecard.querySelector("#img-7").setAttribute("src", i.icono7);
    templatecard.querySelector("#img-8").setAttribute("src", i.icono8);

    const clone1 = templatecard.cloneNode(true);
    fragment2.appendChild(clone1);
  });

  divcard.appendChild(fragment2);
};

const cargarPortfolioMap = (res) => {

  res.map((i) =>{
    templatecard.querySelector("#imagen-conta").setAttribute("title", i.titulo);
    templatecard
      .querySelector("#imagen-conta")
      .setAttribute("src", i.urlimagen);
    templatecard.querySelector("a").setAttribute("href", i.url);
    templatecard.querySelector("h4").textContent = i.titulo;
    templatecard.querySelector("p").textContent = i.description;
    templatecard.querySelector("#img-1").setAttribute("src", i.icono1);
    templatecard.querySelector("#img-2").setAttribute("src", i.icono2);
    templatecard.querySelector("#img-3").setAttribute("src", i.icono3);
    templatecard.querySelector("#img-4").setAttribute("src", i.icono4);
    templatecard.querySelector("#img-5").setAttribute("src", i.icono5);
    templatecard.querySelector("#img-6").setAttribute("src", i.icono6);
    templatecard.querySelector("#img-7").setAttribute("src", i.icono7);
    templatecard.querySelector("#img-8").setAttribute("src", i.icono8);

    const clone1 = templatecard.cloneNode(true);
    fragment2.appendChild(clone1);
  });

  divcard.appendChild(fragment2);
};

//Cagar el idioma a En o Es ---------------------------------

let lenguaje = "es";
const primerParrafo = document.getElementById("primerParrafo");
const togglebtn = document.getElementById("toggle-btn");

const inicio = document.getElementById("inicio");
const proyecto = document.getElementById("proyecto");
const aboutme = document.getElementById("aboutme");
const skill= document.getElementById("skill");
const contact = document.getElementById("contact");
const titulop = document.getElementById("titulop");
const titulosobre= document.getElementById("titulosobre");
const parrafosobremi= document.getElementById("parrafosobremi");
const contacto2= document.getElementById("contacto2");
const mensaje= document.getElementById("mensaje");
const mensajeMe= document.getElementById("mensajeMe");
const buttondow= document.getElementById("buttondow");
const buttoncont= document.getElementById("buttoncont");
const sendme= document.getElementById("sendme");

const loadContent = (lenguaje) => {
  fetch("./json/conten.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      primerParrafo.textContent = data[lenguaje].primerParrafo;
      inicio.textContent = data[lenguaje].inicio;
      proyecto.textContent = data[lenguaje].proyecto;
      aboutme.textContent = data[lenguaje].aboutme;
      skill.textContent = data[lenguaje].skill;
      contact.textContent = data[lenguaje].contact;
      titulop.textContent = data[lenguaje].titulop;
      titulosobre.textContent = data[lenguaje].titulosobre;
      parrafosobremi.textContent = data[lenguaje].parrafosobremi;
      contacto2.textContent = data[lenguaje].contacto2;
      mensaje.textContent = data[lenguaje].mensaje;
      mensajeMe.textContent = data[lenguaje].mensajeMe;
      buttondow.textContent = data[lenguaje].buttondow;
      buttoncont.textContent = data[lenguaje].buttoncont;
      sendme.textContent = data[lenguaje].sendme;
    })
    .catch(function (error) {
      console.log(error);
    });
};

if (togglebtn) {
  togglebtn.addEventListener("change", () => {
    if (togglebtn.checked) {
      lenguaje = "en";
    } else {
      lenguaje = "es";
    }
    loadContent(lenguaje);
  });
}

loadContent(lenguaje);

// Fin -------------------------------------------------------