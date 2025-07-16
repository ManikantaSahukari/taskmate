

export const AddTask = ({tasklist,setTasklist,task,setTask}) => {

  const handelSubmit = (e) =>
  {
    e.preventDefault();

    if(task.id)
    {
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) =>
        todo.id === task.id ? 
        {
          id:task.id, 
          name:e.target.task.value,
          time:`${date.toLocaleTimeString()} ${date.toLocaleDateString() }`
        }:todo
      );
      setTasklist(updatedTaskList);
      console.log("I am in if block")
      setTask({});
      //e.target.task.value="";
      //todo.id === id ? {id:todo.id, name:e.target.task.value, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString() }` : todo })
        //todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
  
      
    }
    else
    {
        const date = new Date();
        const newTask = {
        id:date.getTime(),
        name:e.target.task.value,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString() }`};
        setTasklist([...tasklist, newTask]);
        setTask({});
         //e.target.task.value="";

    }

  }

  return (
    <section className="addTask">
      <form onSubmit={handelSubmit}>
        <input type="text" name="task" value={task.name||""} autoComplete="off" placeholder="Add task" maxLength="25" onChange={e => setTask({...task, name: e.target.value})} />
        <button className="submit">{task.id?"Update":"Add"}</button>
      </form>
    </section>
  )
}
