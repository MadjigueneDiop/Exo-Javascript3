const input =document.getElementById('input1');
const p =document.getElementById('p1');
const div =document.getElementById('div2');
const titre =document.getElementById('title');
const mean =document.getElementById('meaning');
const aud =document.getElementById('audio');

 function dictionary( word) {
     p.style.display = "block";
      div.style.display = "none";
      p.innerText = `Searching the meaning of ${word} `;
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
       fetch(url).then((res) => res.json());
      p.style.display = "none";
      div.style.display = "block";
      aud.style.display = "inline-flex";
      titre.innerText = word;
      mean.innerText = result[0].meanings[0].definitions[0].definition;
    }
    input.addEventListener("keyup", (e) => {
      if (e.target.value && e.key === "Enter") {
        dictionary(e.target.value);
      }  })


