// alert("this is my first project")

function setupToggle(buttonId, listId, showText, hideText) {
    const button = document.getElementById(buttonId);
    const list = document.getElementById(listId);

    button.addEventListener("click", function() {
        list.classList.toggle("hidden");

        if(list.classList.contains("hidden")) {
            button.textContent =showText ;
        } else {
            button.textContent =hideText;
        }
    });
}

setupToggle("toggleSkills","skillsList","Show Skill","Hide Skill");
setupToggle("toggleProjects","projectsList","Show Projects","Hide Projects");
