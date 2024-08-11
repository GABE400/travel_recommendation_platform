const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched:", data); // Log data to verify it's fetched
      setupSearch(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function setupSearch(data) {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const resultsContainer = document.querySelector(".results-container");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const query = searchInput.value.toLowerCase().trim();
    console.log("Search query:", query); // Log the search query

    resultsContainer.innerHTML = ""; // Clear previous results

    const filteredData = data.filter((item) => {
      return item.type.includes(query);
    });

    console.log("Filtered data:", filteredData); // Log the filtered results

    displayResults(filteredData, resultsContainer);
  });
}

function displayResults(recommendations, container) {
  if (recommendations.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  recommendations.forEach((item) => {
    const recommendationItem = document.createElement("div");
    recommendationItem.classList.add("recommendation-item");

    recommendationItem.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
      `;

    container.appendChild(recommendationItem);
  });

  console.log("Results displayed successfully"); // Log when results are displayed
}

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
