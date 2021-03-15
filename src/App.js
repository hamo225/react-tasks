import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  // part of app level state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Vet appointment",
      day: "Feb 20",
      reminder: true,
    },
    {
      id: 2,
      text: "Doc appointment",
      day: "March 22",
      reminder: true,
    },
    {
      id: 3,
      text: "Flight to London",
      day: "April 2",
      reminder: false,
    },
  ]);

  // Delet Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "No Tasks"
      )}
    </div>
  );
};

export default App;
