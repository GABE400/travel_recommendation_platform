const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const popupSection = document.querySelector(".popup-section");
  const popupResults = document.querySelector(".popup-results");
  const popupCloseButton = document.querySelector(".popup-close");

  // Hardcoded recommendations
  const recommendations = [
    {
      name: "Malibu Beach",
      description:
        "A beautiful beach in California known for its stunning coastline.",
      images: ["assets/beach/1.jpg", "assets/beach/2.jpg"],
      type: "beach",
    },
    {
      name: "Bora Bora",
      description:
        "A small South Pacific island northwest of Tahiti in French Polynesia.",
      images: ["assets/beach/1.jpg", "assets/beach/2.jpg"],
      type: "beach",
    },
    {
      name: "Angkor Wat",
      description:
        "A temple complex in Cambodia and one of the largest religious monuments in the world.",
      images: ["assets/temple/1.jpg", "assets/temple/2.jpg"],
      type: "temples",
    },
    {
      name: "The Grand Palace",
      description: "A complex of buildings in the heart of Bangkok, Thailand.",
      images: ["assets/temple/1.jpg", "assets/temple/2.jpg"],
      type: "temples",
    },
    {
      name: "Japan",
      description:
        "A country in East Asia known for its blend of traditional and modern culture.",
      images: ["assets/country/1.jpg", "assets/country/2.jpg"],
      type: "country",
    },
    {
      name: "Italy",
      description:
        "A European country with a long Mediterranean coastline, rich in history and culture.",
      images: ["assets/country/1.jpg", "assets/country/2.jpg"],
      type: "country",
    },
  ];

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    if (query) {
      popupResults.innerHTML = "";

      // Filter recommendations
      let filteredResults = recommendations.filter(
        (place) =>
          place.name.toLowerCase().includes(query) ||
          place.type.toLowerCase().includes(query)
      );

      if (filteredResults.length === 0) {
        filteredResults = recommendations
          .filter((place) => place.type.toLowerCase() === "beach")
          .slice(0, 2);
      }

      displayResults(filteredResults);
      popupSection.style.display = "block"; // Show popup
    }
  });

  popupCloseButton.addEventListener("click", function () {
    popupSection.style.display = "none"; // Hide popup
  });

  function displayResults(results) {
    if (results.length > 0) {
      results.forEach((result) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `
          <h3>${result.name}</h3>
          <div class="result-images">
            ${result.images
              .map((image) => `<img src="${image}" alt="${result.name}">`)
              .join("")}
          </div>
          <p>${result.description}</p>
        `;
        popupResults.appendChild(resultItem);
      });
    } else {
      popupResults.innerHTML = "<p>No results found.</p>";
    }
  }
});

// recommendation

document.addEventListener("DOMContentLoaded", function () {
  const recommendationsData = [
    {
      category: "Beach",
      places: [
        {
          name: "Malibu Beach",
          description: "A beautiful beach in California.",
          images: ["assets/beach/1.jpg", "assets/beach/2.jpg"],
        },
      ],
    },
    {
      category: "Temple",
      places: [
        {
          name: "Kyoto Temples",
          description: "Historic temples in Kyoto, Japan.",
          images: ["assets/temple/1.jpg", "assets/temple/2.jpg"],
        },
      ],
    },
    {
      category: "Country",
      places: [
        {
          name: "Paris",
          description:
            "The capital city of France, known for the Eiffel Tower.",
          images: ["assets/country/1.jpg", "assets/country/2.jpg"],
        },
      ],
    },
  ];

  const recommendationList = document.querySelector(".recommendation-list");

  recommendationsData.forEach((category) => {
    category.places.forEach((place) => {
      const recommendationItem = document.createElement("div");
      recommendationItem.classList.add("recommendation-item");

      let imagesHtml = "";
      place.images.forEach((image) => {
        imagesHtml += `<img src="${image}" alt="${place.name}">`;
      });

      recommendationItem.innerHTML = `
              <h3>${place.name}</h3>
              ${imagesHtml}
              <p>${place.description}</p>
          `;

      recommendationList.appendChild(recommendationItem);

      // Trigger animation after a short delay
      setTimeout(() => {
        recommendationItem.classList.add("show");
      }, 100);
    });
  });
});
