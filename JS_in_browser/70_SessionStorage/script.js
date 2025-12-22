// sessionStorage.setItem("name", "Ranjit");

// sessionStorage.getItem("name");

// sessionStorage.clear();

// sessionStorage.removeItem("name");


window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}