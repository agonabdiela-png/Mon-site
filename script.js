const citations = [
    "Crois en toi et tout sera possible.",
    "Chaque jour est une nouvelle chance de réussir.",
    "Ne baisse jamais les bras.",
    "Tu es plus capable que tu ne le penses.",
    "Le succès vient à ceux qui persévèrent.",
    "La crainte n’est pas dans l’amour mais l’amour parfait bannit la crainte ; car la crainte suppose un châtiment et celui qui craint n'est pas parfait dans l’amour. — 1 Jean 4:18"
];
function genererCitation(){
    const index = Math,floor(Math,random() * citations.length);


    document,getElementById("citation").innerText= citations[index];
}
const texte = "Bienvenue sur ma page !";
let index = 0;
function ecrireLettreParLettre() {
    if (index < texte.length) {
        document.getElementById("titreAnime").textContent += texte.charAt(index);
        index++;
        setTimeout(ecrireLettreParLettre, 100);
    }
}
ecrireLettreParLettre();