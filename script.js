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

  let recommendations = [];

  // Fetch data from the JSON file
  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      recommendations = data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    if (query) {
      // Clear previous results
      resultsContainer.innerHTML = "";

      // Filter the recommendations based on the search query
      const filteredResults = recommendations.filter((place) => {
        return (
          place.type.toLowerCase().includes(query) ||
          place.name.toLowerCase().includes(query)
        );
      });

      // Display the filtered results
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
                  <img src="${result.imageUrl}" alt="${result.name}">
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
