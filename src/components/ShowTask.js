
export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {

// const tasks =[
//   {id:10001, name:"Task A", time:"2:09:02 AM 9/14/2025"},
//   {id:10002, name:"Task B", time:"2:09:02 AM 9/14/2025"},
//   {id:10003, name:"Task C", time:"2:09:02 AM 9/14/2025"},
// ]
const handleEdit = (id) =>
{
  const seletedTask = tasklist.find(todo => todo.id === id);
  setTask(seletedTask);
  console.log(tasklist);


}
const handleDelete = (id) =>
{
  const taskListPostDel = tasklist.filter(tasklist => tasklist.id !==id);
  setTasklist(taskListPostDel);
  console.log(taskListPostDel);

}
const handleClear = () =>
{
  setTasklist([]);
  setTask({});
}

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={()=>handleClear()} className="clearAll" >Clear All</button>
      </div>
    <ul>
            { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>
            )) }            
        </ul>
    </section>
  )
}
