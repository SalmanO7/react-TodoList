# React To-Do List App 📝

This is a simple, user-friendly **To-Do List application** built with **React.js**, styled with **Bootstrap**, and featuring basic **CRUD operations**. The app leverages **React Router** for seamless navigation between different pages like Home, Add Task, and Edit Task. It demonstrates essential concepts in React such as managing state with **hooks**, creating reusable components, and implementing routing to provide a smooth user experience.

---

## Features 🚀

- **Add Tasks**: Create new tasks using a form.
- **Update Tasks**: Edit existing tasks through a dedicated form on a separate page.
- **Delete Tasks**: Remove tasks from the list with a single click.
- **Task List Display**: View all tasks in a list with options to edit or delete them.
- **Routing**: Pages for listing tasks, adding new tasks, and editing tasks, all handled via **React Router**.
- **Bootstrap UI**: Responsive and clean design built with **Bootstrap**, ensuring a polished user experience across devices.
- **Task Persistence**: Uses **Local Storage** to persist tasks even after the browser is closed or refreshed.

---

## Technologies Used 💻

- **React.js**: A JavaScript library for building fast and interactive user interfaces.
- **Bootstrap**: A popular CSS framework for responsive and modern web design.
- **React Router**: Library for handling dynamic routing in React apps.
- **Local Storage**: For persisting tasks across sessions to provide data persistence.
- **JavaScript (ES6+)**: The primary language used to build the application.

src/
├── components/
│   ├── TaskList.js        # Displays the list of tasks
│   ├── AddTask.js         # Form to add a new task
│   ├── EditTask.js        # Form to edit an existing task
│   ├── TaskItem.js        # Individual task component
├── pages/
│   ├── Home.js            # Main page showing the task list
│   ├── AddTaskPage.js     # Page for adding a new task
│   ├── EditTaskPage.js    # Page for editing a task
├── App.js                 # Main component with React Router setup
├── index.js               # Entry point of the app
└── styles/                # Optional: Custom CSS overrides for Bootstrap


---
## Getting Started 🛠️

To get a local copy up and running, follow these simple steps.

### Prerequisites
Ensure that **Node.js** and **npm** are installed on your machine.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SalmanO7/react-todo-list-app.git
   cd react-todo-list-app
