let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        window.onload = (event) => {
            // console.log("window loaded!", myObj.name)
            document.getElementById("name").innerHTML = myObj.name;
            document.getElementById("birthday").innerHTML = myObj.birthday;
          };
    }
}

newRequest.open("GET", "einstein.json", true);
newRequest.send();



function loadBio() {
    newRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            const fullBio = document.getElementById("full-bio");
            fullBio.addEventListener('dblclick', function(e) {
                e.preventDefault();
                document.getElementById("bio").innerHTML = myObj.bio;
            })

        }
    }
    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
}
