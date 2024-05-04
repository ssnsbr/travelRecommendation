


async function readfile() {
    const response = await fetch("travel_recommendation_api.json");
    const movies = await response.json();
    console.log(movies);
}