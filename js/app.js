const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg", alt: "image1" },
  { name: "Voluptatem", image: "images/coffee2.jpg", alt: "image1" },
  { name: "Explicabo", image: "images/coffee3.jpg", alt: "image1" },
  { name: "Rchitecto", image: "images/coffee4.jpg", alt: "image1" },
  { name: " Beatae", image: "images/coffee5.jpg", alt: "image1" },
  { name: " Vitae", image: "images/coffee6.jpg", alt: "image1" },
  { name: "Inventore", image: "images/coffee7.jpg", alt: "image1" },
  { name: "Veritatis", image: "images/coffee8.jpg", alt: "image1" },
  { name: "Accusantium", image: "images/coffee9.jpg", alt: "image1" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image, alt }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} alt=${alt} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }