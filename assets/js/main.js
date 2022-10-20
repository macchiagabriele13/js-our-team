/* Utilizzando i dati forniti:

Name: Wayne Barnett
Role: Founder & CEO
Image: wayne - barnett - founder - ceo.jpg
___________________________________
Name: Angela
Role: Chief Editor
Image: angela - caroll - chief - editor.jpg
____________________________________
Name: Waleter gordon
Role: Chief Editor
Image: walter - gordon - office - manager.jpg
____________________________________
Name: Waleter gordon
Role: Social Media Manager
Image: angela - lopez - social - media - manager.jpg
_________________________________
Name: Scott Estrada
Role: Developer
Image: scott - estrada - developer.jpg
_________________________________
Name: Barbara Ramos
Role: Grafic designer
Image: barbara - ramos - graphic - designer.jpg */

/* MILESTONE 0: Creare l’array di oggetti con le informazioni fornite. */

/* creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. */

let arrayMembers = [
    {
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Image: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name: 'Waleter Gordon',
        Role: 'Chief Editor',
        Image: 'walter-gordon-office-manager.jpg'
    },
    {
        Name: 'Angela Lopez',
        Role: 'Social Media Manager',
        Image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Image: 'scott-estrada-developer.jpg'
    },
    {
        Name: 'Barbara Ramos',
        Role: 'Grafic designer',
        Image: 'barbara-ramos-graphic-designer.jpg'
    }
]

/* MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto */

for (let i = 0; i < arrayMembers.length; i++) {
    const singleMember = arrayMembers[i];
    console.log(singleMember); 

    const cardMarkup = `
    <div class="col-4 text-center">
        <img src="./assets/img/${singleMember.Image}" alt="">
        <h3>${singleMember.Name}</h3>
        <h4>${singleMember.Role}</h4>
     </div>
    `
    document.querySelector('.row').insertAdjacentHTML('beforeend', cardMarkup)
}


/* MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
 */


