const url = "https://icanhazdadjoke.com/";
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

const getNewJoke = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch(url, setHeader)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      console.log(typeof data)
      para.innerHTML=data.joke
    })
    .catch((err) => console.log(err));
};
btn.addEventListener("click", getNewJoke);
getNewJoke()
