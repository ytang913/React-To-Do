import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: 'true',
    },

    {
        id: 2,
        text: "Meeting at school",
        day: 'Feb 6th at 1:30 pm',
        reminder: 'true',
    },

    {
        id: 3,
        text: "Food Shopping",
        day: 'Feb 21st at 3:30 pm',
        reminder: 'false',
    }
])

// Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
}

  return (
    <div className="container">
      <Header />   
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
      : 'No Tasks to show'}  
    </div>
  );
}

export default App;
