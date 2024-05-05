


const filepath = "./travel_recommendation_api.json";



// const jsondata = readfile();
// console.log(jsondata)

document.getElementById("searchButton").addEventListener("click", () => {

    fetch(filepath) // fetch editable c:
        .then(function (response) {
            const jsondata = response.json();
            return jsondata
        }).then(function (jsondata) {

            const result_div = document.getElementById("result_div");
            const q = document.getElementById("insertedSearch").value.toLowerCase();
            if (q == "beaches") {
                const result_one = jsondata[q][0]
                const result_two = jsondata[q][1]
                result_div.innerHTML = getHtml(result_one) + getHtml(result_two);
                   
            } else if (q == "temples") {
                const result_one = jsondata[q][0]
                const result_two = jsondata[q][1]
                result_div.innerHTML = getHtml(result_one) + getHtml(result_two);

            }  else if (q == "countries") {
                const result_one = jsondata[q][0]["cities"][0]
                const result_two = jsondata[q][1]["cities"][0]
                result_div.innerHTML = getHtml(result_one) + getHtml(result_two);

            } else {
                console.log(q);
            }
        });



});

document.getElementById("resetButton").addEventListener("click", () => {
    result_div.innerHTML ="";
    document.getElementById("insertedSearch").value=""

});

function getHtml(result) {
    return ` 
    <div class="box" style="background-color:white" id="prodcolor">   
        <h1>${result.name}</h1>
        <img src=${result.imageUrl} >
        <div >   
        <span style="display:none"> Sample</span>   
        <p>${result.description}</p>
        </div>  
     </div>
      `}

