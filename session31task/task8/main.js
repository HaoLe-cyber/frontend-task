function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.className = "close";
    closeBtn.onclick = function () {
        removeTask(closeBtn);
    };

    li.appendChild(closeBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(element) {
    const li = element.parentElement;
    li.remove();
}

// Toggle checked status when click on task
document.getElementById("taskList").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
});
