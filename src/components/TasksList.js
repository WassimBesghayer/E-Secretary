import React from 'react'
import { useSelector } from 'react-redux'
import tasks from '../redux/taskSlice'
import Task from './Task';


function TasksList() {
  const tasks = useSelector(state => state.task.tasksList);
  console.log(tasks)
  return (
    <div>
      {tasks.map((task)=>(
        <Task task={task}/>))}
    </div>
  )
}

export default TasksList