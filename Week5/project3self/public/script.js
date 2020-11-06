const input = document.querySelector("input");
const listofnames = document.getElementById("listofnames");

input.addEventListener("keyup", (event) => {
  fetch("/", {
    method: "POST",
    body: event.target.value,
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(body);

      listofnames.innerHTML = "";
      // console.log("data: " + data);

      data.forEach((name) => {
        // console.log("name: " + name);
        // create new children in datalist
        let kid = document.createTextNode(name);
        let element = document.createElement("option");
        element.append(kid);
        listofnames.appendChild(element);
      });
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const output = document.querySelector("output");

// form.addEventListener("submit", (event) => {
//   // stop the form submitting and reloading the page
//   event.preventDefault();
//   if (input.value === "") {
//     alert("YOU MUST WRITE SOMETHING!");
//     return;
//   }

//   fetch(`/namesearch`, {
//     method: "POST",
//     body: input.value,
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       nameResult(response);
//     })
//     .catch((err) => alert("Enter a correct name"));
// });

// function nameResult(name) {
//   // clear out any previous results
//   output.innerHTML = "";

//   // get the value of the field with name="listofnames"
//   const formData = new FormData(event.target);
//   const name = formData.get("listofnames");

//   fetch(`https://gender-api.com/get?name=${name}&key=YeFJcGQluraWPyRCsP`)
//     .then((response) => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     // if we get a successful response
//     .then((nameData) => {
//       console.log("test");
//       const heading = document.createElement("h2");
//       heading.textContent = nameData.gender;

//       const image = document.createElement("img");
//       if (nameData.gender === "male") {
//         image.src = "./img/boy.jpg";
//         image.alt = "";
//       } else if (nameData.gender === "female") {
//         image.src = "./img/girl.jpg";
//         image.alt = "";
//       } else {
//         image.src = "./img/boygirl.jpg";
//         image.alt = "";
//       }

//       output.appendChild(heading);
//       output.appendChild(image);
//     })
//     // if the request is unsuccessful
//     .catch((error) => {
//       console.log(error);
//       if (error.message === "404") {
//         output.textContent = `⚠️ Couldn't find "${name}"`;
//       } else {
//         output.textContent = "⚠️ Something went wrong";
//       }
//     });
// }
