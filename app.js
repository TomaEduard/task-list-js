// Define UI Variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filer tasks event
  filter.addEventListener('keyup', filterTask);
}

// addTask
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task !')
  }

  // Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new font awesome element right side
  const link = document.createElement('a');
  // Add class
  // In materialize 'secondary-content' from li put to the right side
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clearinput
  taskInput.value = '';

  e.preventDefault();
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {}
    // a li ul
    e.target.parentElement.parentElement.remove();
  }
}

// Clear tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList, firstChild);
  }
}

// Filter task
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}







// querySelectorAll return node list