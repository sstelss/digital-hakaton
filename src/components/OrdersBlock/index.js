import React from 'react';
import './index.css';
import BASE_PATH from '../../BASE_PATH'

export default function UserList() {

  const [id, setId] = React.useState(1)
  const [list, setList] = React.useState([])
  const [amountActiveTasks, setAmountActiveTasks] = React.useState(0)

  React.useMemo(() => {
    fetch(BASE_PATH + '/volunteer/'+id+'/activeTasks')
      .then(response => response.json())
      .then(res => {
        setList(res)
        setAmountActiveTasks(res.length)
        console.log("res: ", res)
      })
  },[amountActiveTasks])


  const taskDone = (tasksId) =>{
    fetch(BASE_PATH + '/volunteer/' + id + '/tasks/' + tasksId + '/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        response: 1
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log("res", res)
      })
      .catch(err => console.log(err))

      setAmountActiveTasks(amountActiveTasks-1)
  }

  const List = list.map((value) => {
      return(
        <div className="card" key={value.id}>
          <div className="infoLine">
            <span className="taskId">{value.id}</span>
            <span className="taskName emetedText midlleText bebas">{value.taskName}</span>
          </div>
          <span className="taskDescription">{value.taskDescription}</span>
          <span className="taskRating margVert">Raiting: {value.taskRating}</span>

          <div className="acciveConteiner">
            <div className="acciveButtom" onClick={() => taskDone(value.id)}>Завершено</div>
          </div>
        </div>
      )
  })

  return (
    <>
      <div className="deksArea">
          {List}
      </div>
     
      <div className="actveTasksAmount">
        <span className="emetedText margVert">Amount active tasks: {amountActiveTasks}</span>
      </div>
     </>
    );
}
