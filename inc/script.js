"use strict";
const clientId = "90016dcfeb054f969a096e8c0f30d42f";
const clientSecret = "DHtiebq47WAhmyrD+udm6YGzqJgFlJz/14arVKJe1VWeQeEjy0";

const apiUrl =
  "https://kantarworldpanel.com.co/hackaton_infojobs_midudev/inc/data.json";

function convertMilliseconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) {
    return "Hace " + days + " días";
  } else if (hours >= 1) {
    return "Hace " + hours + " horas";
  } else {
    return "Hace " + minutes + " minutos";
  }
}

//let h = new Headers();
//h.append("Accept", "application/json");
//h.append("Content-Type", "application/json");
//let auth =
//  "Basic OTAwMTZkY2ZlYjA1NGY5NjlhMDk2ZThjMGYzMGQ0MmY6REh0aWVicTQ3V0FobXlyRCt1ZG02WUd6cUpnRmxKei8xNGFyVktKZTFWV2VRZUVqeTA=";
//h.append("Authorization", auth);

let req = new Request(apiUrl, {
  method: "GET",
  //headers: h,
  credentials: "include",
});

const itemsContainer = document.getElementById("itemsContainer");

fetch(req)
  .then((response) => response.json())
  .then((data) => {
    // Iterate over the items array
    data.items.forEach((item) => {
      //el.setAttribute("id", "my-id");
      let divContent = document.createElement("div");
      divContent.classList.add("content");
      itemsContainer.appendChild(divContent);
      //
      let logo = document.createElement("div");
      logo.classList.add("logo");
      let img = document.createElement("img");
      if (item.author.logoUrl == undefined) {
        img.src =
          "https://components.infojobs.com/statics/images/pic-company-logo.png";
      } else {
        img.src = item.author.logoUrl;
      }
      img.alt = item.author.name;
      img.width = "125";
      img.height = "125";

      logo.appendChild(img);
      divContent.appendChild(logo);
      //
      let info = document.createElement("div");
      info.classList.add("info");
      divContent.appendChild(info);
      let header = document.createElement("div");
      header.classList.add("header");
      let title = document.createElement("div");
      title.classList.add("title");
      let containerSVG = document.createElement("div");
      let spanSVG = document.createElement("span");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M9.722 15.977a3.5 3.5 0 0 1 4.556 0l2.727 2.337a.3.3 0 0 0 .495-.228V5.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v12.836a.3.3 0 0 0 .495.228l2.727-2.337zM7 3.25h10a2 2 0 0 1 2 2v14.576a1 1 0 0 1-1.65.759l-4.048-3.47a2 2 0 0 0-2.604 0l-4.047 3.47A1 1 0 0 1 5 19.825V5.25a2 2 0 0 1 2-2z"
      );
      path.setAttribute("fill", "999");
      path.setAttribute("stroke", "999");

      // Step 5: Append the path element to the SVG element

      //
      info.appendChild(header);
      header.appendChild(title);
      let h2title = document.createElement("h2");
      h2title.textContent = item.title;
      let featured = document.createElement("span");
      featured.classList.add("featured");
      let h3author = document.createElement("h3");
      h3author.textContent = item.author.name;
      h3author.classList.add("author");
      let linkAuthor = document.createElement("a");
      title.appendChild(h2title);
      title.appendChild(containerSVG);
      containerSVG.appendChild(spanSVG);
      spanSVG.appendChild(svg);
      svg.appendChild(path);
      logo.appendChild(featured);
      header.appendChild(linkAuthor);
      linkAuthor.appendChild(h3author);
      linkAuthor.href = item.author.uri;
      linkAuthor.target = "_blank";
      linkAuthor.setAttribute("title", "Ver ofertas de" + item.author.name);

      //let description = document.createElement("h3");
      //

      // Access the properties of each item
      let ul1 = document.createElement("ul");
      let ul2 = document.createElement("ul");
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      li2.classList.add("liOnline");
      let li3 = document.createElement("li");
      let li4 = document.createElement("li");
      let li5 = document.createElement("li");
      let li6 = document.createElement("li");
      let spanEnrolls = document.createElement("span");

      let divUl = document.createElement("div");
      divUl.classList.add("divUl");
      info.appendChild(divUl);
      let spanCity = document.createElement("span");
      spanCity.textContent = item.city;

      let spanContractType = document.createElement("span");
      spanContractType.textContent = "Contrato " + item.contractType.value;

      let spanExperienceMin = document.createElement("span");
      spanExperienceMin.textContent =
        item.experienceMin.value + " de experiencia";

      let spanTeleworking = document.createElement("span");
      let onlineProcess = document.createElement("span");
      onlineProcess.classList.add("onlineProcess");
      onlineProcess.textContent = "Proceso online";

      if (item.teleworking.value == "Híbrido") {
        spanTeleworking.textContent = "Presencial y remoto";
        li3.appendChild(spanTeleworking);
      } else {
        spanTeleworking.textContent = item.teleworking.value;
        li3.appendChild(spanTeleworking);
        logo.appendChild(onlineProcess);
      }

      let spanSalaryDescription = document.createElement("span");
      spanSalaryDescription.textContent = item.salaryDescription;
      const enrolls = Math.floor(Math.random() * 50) + 1;
      const vacant = Math.floor(Math.random() * 10) + 1;

      spanEnrolls.textContent = `${enrolls} inscritos para ${vacant} vacantes`;

      divUl.appendChild(ul1);
      ul1.appendChild(li1);
      ul1.appendChild(li2);
      li1.appendChild(spanCity);

      //
      divUl.appendChild(ul2);
      ul2.appendChild(li3);
      ul2.appendChild(li4);
      li2.appendChild(spanContractType);
      li4.appendChild(spanSalaryDescription);
      //
      ul1.appendChild(li5);
      ul2.appendChild(li6);
      li6.appendChild(spanEnrolls);
      li5.appendChild(spanExperienceMin);
      //
      let divEndContent = document.createElement("div");
      divEndContent.classList.add("endContent");
      info.appendChild(divEndContent);
      //
      let compatible = document.createElement("div");
      compatible.classList.add("compatible");
      let progressCircle = document.createElement("div");
      progressCircle.classList.add("progressCircle");
      let compatibleDiv = document.createElement("div");
      compatibleDiv.classList.add("compatibleDiv");
      let compatibleSpan = document.createElement("span");
      compatibleSpan.classList.add("compatibleSpan");
      compatibleSpan.textContent = "55% compatible con la oferta";
      let linkCheckCompatible = document.createElement("a");
      linkCheckCompatible.classList.add("linkCheckCompatible");

      // Assign onclick function
      linkCheckCompatible.onclick = function () {
        // Get a random number between 1 and 3
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        // Construct the image URL
        var imageUrl = "inc/media/img/compatible" + randomNumber + ".jpg";
        // Update the src attribute of the iframe
        var imageFrame = document.querySelector(".iframe");
        imageFrame.src = imageUrl;

        event.preventDefault();
        // Remove the "hidden" class from modal and overlay
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };

      let checkCompatible = document.createElement("span");
      checkCompatible.classList.add("checkCompatible");
      checkCompatible.textContent = "Ver compatibilidad";
      //
      let timePublished = document.createElement("div");
      timePublished.classList.add("timePublished");
      let spanPublished = document.createElement("span");
      spanPublished.classList.add("spanPublished");

      //
      let enroll = document.createElement("div");
      enroll.classList.add("enroll");
      //
      let quickOverview = document.createElement("button");
      let imageLink = document.createElement("a");
      imageLink.classList.add("imageLink");
      imageLink.textContent = item.id;
      quickOverview.classList.add("quickOverview");
      quickOverview.textContent = "VISTA RAPIDA";

      divEndContent.appendChild(compatible);
      compatible.appendChild(progressCircle);
      compatible.appendChild(compatibleDiv);
      compatibleDiv.appendChild(compatibleSpan);
      compatibleDiv.appendChild(linkCheckCompatible);
      linkCheckCompatible.appendChild(checkCompatible);
      divEndContent.appendChild(timePublished);
      //
      const published = Date.parse(item.published);
      const date2 = new Date();
      const diffInMs = date2 - published;

      spanPublished.textContent = convertMilliseconds(diffInMs);
      let newOffer = document.createElement("span");
      newOffer.classList.add("newOffer");
      newOffer.textContent = "Nueva";
      let checkOfferHour = spanPublished.textContent.includes("hora");
      let checkOfferMinute = spanPublished.textContent.includes("minuto");
      if (checkOfferHour == true) {
        timePublished.appendChild(spanPublished);
        spanPublished.classList.add("new");
        timePublished.appendChild(newOffer);
      } else if (checkOfferMinute == true) {
        timePublished.appendChild(spanPublished);
        spanPublished.classList.add("new");
        timePublished.appendChild(newOffer);
      } else {
        timePublished.appendChild(spanPublished);
      }
      //
      divEndContent.appendChild(enroll);
      enroll.appendChild(quickOverview);
      enroll.appendChild(imageLink);
      //

      //
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//

//

var iframe = document.createElement("iframe");
iframe.classList.add("iframe");
iframe.src = "inc/media/offers/64c3ccc2a74373b0edd990cd9b430a.jpg";
iframe.frameborder = "0";

const modal = document.querySelector(".modal");
modal.appendChild(iframe);
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//function to get the id of the offer and change iframe src
document.addEventListener("click", function (event) {
  // Check if the clicked element has the class .quickOverview
  if (event.target.classList.contains("quickOverview")) {
    // Get the next element sibling of the clicked button
    var nextElement = event.target.nextElementSibling;

    // Find the next element with class .imageLink by traversing siblings
    while (
      nextElement &&
      (!nextElement.tagName || !nextElement.classList.contains("imageLink"))
    ) {
      nextElement = nextElement.nextElementSibling;
    }

    // Check if a next element with class .imageLink is found
    if (nextElement && nextElement.tagName === "A") {
      // Retrieve the text content of the next element
      var textContent = nextElement.textContent;
      iframe.src = "inc/media/offers/" + textContent + ".jpg";
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
    document.addEventListener("click", handleClick);
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Function to be executed on button click
function handleClick(event) {
  let btnsOpenModal = document.querySelectorAll(".quickOverview");
  // Check if the clicked element has the class "quickOverview"
  if (event.target.classList.contains("quickOverview")) {
    // Your code here
    for (let i = 0; i < btnsOpenModal.length; i++)
      btnsOpenModal[i].addEventListener("click", openModal);
  }
}

// Add event listener to a common parent element

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
///////

/////////////////////////////////

var svgElements = document.querySelectorAll("svg");
var pathData = [
  "M7 3.25h10a2 2 0 0 1 2 2v14.576a1 1 0 0 1-1.65.759l-4.048-3.47a2 2 0 0 0-2.604 0l-4.047 3.47A1 1 0 0 1 5 19.825V5.25a2 2 0 0 1 2-2z",
];

function changePath(event) {
  var path = event.target;
  var currentIndex = path.getAttribute("data-index");
  currentIndex = (parseInt(currentIndex) + 1) % pathData.length;
  path.setAttribute("d", pathData[currentIndex]);
  path.setAttribute("data-index", currentIndex);
}

// Attach click event listeners to each SVG path
for (var i = 0; i < svgElements.length; i++) {
  var path = svgElements[i].getElementsByTagName("path")[0];
  path.setAttribute("data-index", i); // Add custom attribute to store current index
  path.addEventListener("click", changePath);
}

// Find all the buttons with class .quickOverview
var buttons = document.querySelectorAll(".quickOverview");

// Check if any buttons are found
if (buttons.length > 0) {
  // Trigger the click event on the first button
  buttons[0].click();
}
