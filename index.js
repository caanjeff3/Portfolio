window.onload = function () {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "H" || event.key === "h") {
      document
        .getElementById("themeStylesheet")
        .setAttribute("href", "CssEase.css");
      modal.style.display = "none";
    }
  });
};

const projects = [
  {
    title: "Coffee Maker",
    description:
      "This was a very small game based on another idle game under the name Universal Paperclips, it was made in a relatively short timespan however I still like how simple it is.",
    link: "https://caanjeff3.github.io/Coffee/",
    thingsUsed: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Valors Reign",
    description:
      "Honestly the name was a work in progress but I decided to keep it, this was a game I made for my computer programming file and something I thoroughly enjoyed creating despite the many annoying issues I encountered throughout the process.",
    link: "https://caanjeff3.github.io/ValorsReign/",
    thingsUsed: ["HTML", "CSS", "UI/UX Design"],
  },
  {
    title: "Everlasting Hold",
    description:
      "Honestly another game im not a big fan of the name, however it was my first time using Game Maker and it was made in under 24 hours of development time and because of that im weirdly proud of how it came out",
    link: "https://caan3.itch.io/everlasting-hold",
    thingsUsed: ["GML", "Sound Design"],
  },
];

function loadProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";
    projectLink.textContent = "View Project";

    const thingsUsedHeading = document.createElement("h4");
    thingsUsedHeading.textContent = "Languages / Other Things Used";

    const thingsUsedList = document.createElement("ul");
    project.thingsUsed.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      thingsUsedList.appendChild(listItem);
    });

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectLink);
    projectDiv.appendChild(thingsUsedHeading);
    projectDiv.appendChild(thingsUsedList);

    projectList.appendChild(projectDiv);
  });
}
document.addEventListener("DOMContentLoaded", loadProjects);
