let names = ['Achraf Hakimi','Hakim Ziyech','Sofyan Amrabat','Romain Sais','Youssef En-Nesyri','Azzedine Ounahi','Yahia Attiat-Allah','Noussair Mazraoui','Nayef Aguerd','Brahim Diaz','Yassine Bouno'];
let ages = ['4 novembere 1998','19 mars 1993','21 aout 1996','26 mars 1990','1 juin 1997','19 avril 2000','02 mars 1995','14 novembre 1997','30 mars 1996','03 aout 1999','05 avril 1991'];
let images = ['player/a.webp','player/b.webp','player/c.webp','player/d.webp','player/e.jfif','player/f.webp','player/gggg.webp','player/h.webp','player/i.jfif','player/k.jfif','player/l.webp',]

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(names, ages, images)
{
    // elements
    let card = document.createElement('div');
    let title = document.createElement( 'h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // content
let head = document.createTextNode(names);
let agecontent = document.createTextNode(ages);
img.src = images;

title.appendChild(head);
age.appendChild(agecontent);

    // style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#FF5B10';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';

    img.style.width = '100%';
    


card.appendChild(title);
card.appendChild(age);
card.appendChild(img);
container.appendChild(card);

}

for (let i = 0; i <=10; i++)
{
    
    element(names[i], ages[i], images[i]);
    
}
