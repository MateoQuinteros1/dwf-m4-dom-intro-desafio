const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "ter",
  },
  {
    tema: "node",
    class: "n",
  },
  {
    tema: "oop",
    class: "o",
  },
  {
    tema: "typescript",
    class: "ts",
  },
  {
    tema: "css",
    class: "cs",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  let itemsDeLista = document.querySelectorAll("li");

  itemsDeLista.forEach((item) => {
    lista.removeChild(item);
  });

  cosasQueAprendimos.forEach((obj) => {
    const lista = document.querySelector(".lista");
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = obj.tema;

    const newClass = obj.class;

    if (newClass) {
      nuevoLi.classList.add(newClass);
      lista.appendChild(nuevoLi);
    } else {
      console.error("No hay clase");
    }
  });
}

main();
