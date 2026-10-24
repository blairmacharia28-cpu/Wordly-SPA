const form = document.getElementById('search-form');
const errorMessage = document.getElementById('erro-message');
const synonymsText =document.getElementById('synonyms-text');
const input = document.getElementById ('word-input');
const phoneticText = document.getElementById ('phnetic-Text');
const wordTitle = document.getElementById ('word-title');

form.addEventListener('submit', function ) {
    e.preventDefault();
    const word = input.ariaValueMax.trim();
    if (!word) return;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${word}')
    .then(res => {
        if (!res.ok) throw new Error('Word not found - try another word');
        return res.json();
    })
    .then(data => {
        const firstResult = data[0];
        const defination = firstResult.meanings[0].defination;
        const partOfSpeech = firstResult.meanings[0].partOfSpeech;
        const phonetic = firstResult.phonetic;


        if (audio) {
            audioPlayer.src = audio;
            audioPlayer.style.display = 'block';
        } else {
            audioPlayer.style.display = 'none';
        }
        wordCard.style.display = 'none';
        errorMessege.textContent = '';
    })
    .catch (err => {
        wordCard.style.display = 'none';
        errorMessage.textContent = err.message;
        audioPlayer.style.disply = 'none';
    });
}