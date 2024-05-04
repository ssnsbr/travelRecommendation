


async function readfile() {
    const response = await fetch("travel_recommendation_api.json");
    const movies = await response.json();
    console.log(movies);
}


function search(query) {

    const q = query.toLowerCase()
    if (q == "beach") {

    } else if (q == "temple"){

    } else {

    }

}