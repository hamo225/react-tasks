import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
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

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
};

export default App;
