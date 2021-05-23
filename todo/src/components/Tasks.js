const tasks = [
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
    }

    {
        id: 3,
        text: "Food Shopping",
        day: 'Feb 21st at 3:30 pm',
        reminder: 'false',
    }
]

const Tasks = () =>{
    return(
        <>
        {tasks.map()}
        </>
    )
}
export default Tasks