import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false); //default reminder for this is false

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      // validation for the text input
      alert("Please add a task");
    }
    onAdd({ text, day, reminder }); //if text is there then run onAdd()

    // clear the states
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text} //the text from state
          onChange={(e) => {
            setText(e.target.value); //will set the value to whatever is written in the input
          }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control  form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked); //gives us the true or false value if the box is checked or not
          }}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
