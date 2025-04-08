// DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");

let tasks = []; // Mảng chứa các công việc

// Thêm công việc
addTaskBtn.addEventListener("click", function () {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        errorMsg.textContent = "Tên công việc không được để trống!";
        return;
    }

    errorMsg.textContent = "";

    const task = {
        name: taskName,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
});

// Hiển thị danh sách công việc
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        checkbox.checked = task.completed;

        const span = document.createElement("span");
        span.className = "task-name";
        span.innerHTML = task.completed ? `<s>${task.name}</s>` : task.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Xóa";

        // Gạch ngang khi check
        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        // Xóa có confirm
        deleteBtn.addEventListener("click", function () {
            const confirmDelete = confirm("Bạn có chắc muốn xóa công việc này?");
            if (confirmDelete) {
                tasks.splice(index, 1);
                renderTasks();
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateProgress();
}

// Cập nhật tiến độ
function updateProgress() {
    const total = tasks.length;
    const done = tasks.filter(task => task.completed).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    progressBar.style.width = `${percent}%`;
    progressBar.textContent = `${percent}%`;

    if (percent === 100 && total > 0) {
        progressText.textContent = "Hoàn thành công việc 🎉";
    } else {
        progressText.textContent = `Đã hoàn thành ${done} / ${total} công việc`;
    }
}
