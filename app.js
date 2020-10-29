const quotecontainer = document.querySelector('.quote-container')
const quotetext = document.getElementById('quote');
const author = document.getElementById('author');
const twitt = document.getElementById('twitter');
const newquote = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    loader.hidden = false;
    quotetext.hidden = true;
    author.hidden = true;
}
function hiload(){
 if(!loader.hidden){
    loader.hidden = true;
    quotetext.hidden = false;
    author.hidden = false;
 }
}
let req = 0;
newquote.addEventListener('click',getQuote);
async function getQuote() {
    loading();
    const name = "https://api.github.com/users";
    const apiurl = "https://api.chucknorris.io/jokes/random";
    try {
        const fetcher = await fetch(apiurl);
        const fetching = await fetch(name);
        const data2 = await fetcher.json();
        const ft = await fetching.json();
        author.innerText = ft[req].login;
        quotetext.innerText = data2.value;
        hiload();
        req++;
    } catch (error) {

        console.log("there is problem");
    }

}
function twitter(){
    const quote = quotetext.innerText;
    const ath = author.innerText;
    const twitterurl = `https://twitter.com/intent/tweet?text=${quote} - ${ath}`;
    window.open(twitterurl,'_blank');
}
twitt.addEventListener('click',twitter);

getQuote();
// loading();
