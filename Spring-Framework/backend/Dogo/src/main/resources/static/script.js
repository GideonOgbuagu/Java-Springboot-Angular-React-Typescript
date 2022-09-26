let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        window.onload = () => {
            // console.log("window loaded!", myObj.name)
            document.getElementById("id").innerHTML = myObj.id;
            document.getElementById("name").innerHTML = myObj.name;
            document.getElementById("content").innerHTML = myObj.content;
          };
    }
}

newRequest.open("GET", "localhost:8080/api/chat", true);
newRequest.send();