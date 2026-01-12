const tires = [
  {
    name: "Michelin Defender T+H",
    image: "img/michelin.png",
    features: [
      "Mileage warranty: ~80,000 miles",
      "Great wet and dry grip",
      "Comfort-focused design"
    ]
  },
  {
    name: "Goodyear Assurance WeatherReady",
    image: "img/goodyeartires.png",
    features: [
      "Mileage warranty: ~60,000 miles",
      "Excellent grip on gravel, mud, snow",
      "Durable and chip resistant"
    ]
  },
  {
    name: "Bridgestone Turanza QuietTrack",
    image: "img/bridgestone.png",
    features: [
      "Mileage warranty: ~80,000 miles",
      "Reliable in various weather",
      "Solid tread life"
    ]
  },
  {
    name: "Continental CrossContact LX25",
    image: "img/continental.png",
    features: [
      "Mileage warranty: ~70,000 miles",
      "SUV & crossover performance",
      "Advanced tread compounds"
    ]
  },
  {
    name: "Pirelli P Zero",
    image: "img/pzero.png",
    features: [
      "Performance-focused tire",
      "Excellent noise reduction",
      "Long-lasting tread life"
    ]
  },
  {
    name: "Hankook Kinergy ST (H735)",
    image: "img/hankook.png",
    features: [
      "Mileage warranty: ~70,000 miles",
      "Good in rain and light snow",
      "Reinforced sidewalls"
    ]
  }
];gume
const container = document.getElementById("gume");

tires.forEach(tire => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${tire.image}" alt="${tire.name}">
    <h2>${tire.name}</h2>
    <strong>Characteristics:</strong>
    <ul>
      ${tire.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <button>See more</button>
  `;

  container.appendChild(card);
});
