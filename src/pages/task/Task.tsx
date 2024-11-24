import React from "react";
import { useParams } from 'react-router-dom';
const Task = () => {
    const params = useParams();
    const id = params.taskid;
  
    return <p>Task ID: {id}</p>;
}
export default Task;