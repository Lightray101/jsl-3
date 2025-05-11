const userTasks = [];
const maxTasksFirst = 3;
const maxTasksTotal = 6;

// First round: up to 3 tasks
while (userTasks.length < maxTasksFirst) {
  const add = confirm("Would you like to add a new task?");
  if (!add) break;

  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  userTasks.push({
    id: userTasks.length + 1,
    title,
    description,
    status,
  });
}
