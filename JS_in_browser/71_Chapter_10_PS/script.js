// 1 --> Use a free API from the internet & feed your app with live data.

// let url = "https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true"
let url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = ""
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
            <div class="card mx-2 my-2" style="width: 22rem;">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text"><a href="${contests[item].url}">Visit here<a/><p/>
                    <p${contests[item].latitude}</p>
                    <p${contests[item].longitude}</p>
                    <a href="${contests[item].url}" class="btn btn-primary">Visit page</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml
})


// 2, 3, 4 --> Create a note saving app which stores your note to localstorage.

// let n = localStorage.getItem("note");
// alert("Your note is " + n);


// let a = prompt("Enter your note");
// if (a) {
//     localStorage.setItem("note", a);
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//     localStorage.removeItem("note");
//     alert("Note deleted successfully!   ")
// }

// 3 --> Repeat the last question & fetch the note which was saved.

// 4 --> Delete the note in the previous question.