document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        let completedCountNew = document.getElementById('completedCount');
        let todoCountElement = document.getElementById("todoCount");

        let convertedCount = parseInt(completedCountNew.innerText);
        let todoCount = parseInt(todoCountElement.innerText);
        let activityContainer = document.querySelector(".activity-container");

        let confirmTask = confirm("Board Updated Successfully");
            if (confirmTask) {
                todoCount--;
                convertedCount++;

                let taskName = this.closest(".p-5").querySelector(".board-task").innerText;//with the help of coPilot
                let currentTime = new Date().toLocaleTimeString();
                let logEntry = document.createElement("div");
                logEntry.classList.add("p-5", "bg-[rgb(244,247,255)]", "w-auto", "h-25", "rounded-md", "mt-2");
                logEntry.innerHTML = `<p>You have completed the task <b>${taskName}</b> at ${currentTime}</p>`;
                activityContainer.prepend(logEntry);

                document.getElementById("todoCount").innerText = todoCount;
                document.getElementById("completedCount").innerText = convertedCount;

                document.querySelectorAll(".complete-btn").forEach(btn => {
                    if (btn === button) {
                        btn.textContent = "Completed";
                        btn.classList.add("bg-gray-400", "cursor-not-allowed");
                        btn.disabled = true;
                    }
                });
                

                
                
            }   

        });
    });


