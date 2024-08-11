const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const resultsContainer = document.querySelector(".results-container");
  const clearButton = document.querySelector(".clear-button");

  // Hardcoded recommendations with multiple images
  const recommendations = [
    {
      name: "Beach",
      description:
        "A beautiful beach in California known for its stunning coastline.",
      images: ["assets/beach/1.jpg", "assets/beach/2.jpg"],
      type: "beach",
    },

    {
      name: "Temples",
      description: "Historic temples in Kyoto, Japan.",
      images: ["assets/temple/1.jpg", "assets/temple/2.jpg"],
      type: "temples",
    },
    {
      name: "Country",
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
      resultsContainer.innerHTML = "";

      let filteredResults = recommendations.filter((place) => {
        return (
          place.name.toLowerCase().includes(query) ||
          place.type.toLowerCase().includes(query)
        );
      });

      if (filteredResults.length === 0) {
        if (query.includes("temple")) {
          filteredResults = recommendations
            .filter((place) => place.type.toLowerCase() === "temple")
            .slice(0, 2);
        } else {
          filteredResults = recommendations
            .filter(
              (place) =>
                place.type.toLowerCase() === "beach" ||
                place.type.toLowerCase() === "country"
            )
            .slice(0, 2);
        }
      }

      displayResults(filteredResults);
    }
  });

  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    resultsContainer.innerHTML = "";
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
                        .map(
                          (image) => `<img src="${image}" alt="${result.name}">`
                        )
                        .join("")}
                  </div>
                  <p>${result.description}</p>
              `;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = "<p>No results found.</p>";
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
