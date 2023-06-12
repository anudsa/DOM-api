const IMAGE_URL = "https://placehold.co/200";
const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');
const USER = {
    id: 1,
    uname:'Anu',
    description: 'Me gustan los perritos',
    age: 25,
    fav_music:{
        bands:[
            'ttmoe','abc','xyz'
        ]
    } 
}

//Creamos imagen
const image = document.createElement('img');
image.src = IMAGE_URL;
image.alt = 'User Photo';

// //Crear descipción
const uname = document.createElement('h3');
const description = document.createElement('p');
const age = document.createElement('p');
const band = document.createElement('ul');


//le agregamos el texto del item
const bandList = USER.fav_music.bands.map(e =>{
    const item = document.createElement('ul');
    item.textContent = e;
    return item;
}
)


// //Poblamos elementos
uname.textContent=USER.uname;
description.textContent = USER.description;
age.textContent=USER.age;
//bands.textContent = USER.fav_music.bands;


//renderizamos elementos
IMAGE_CONTAINER.appendChild(image);

INFO_CONTAINER.append(uname,description,age);
INFO_CONTAINER.append(uname,description,age,...bandList);