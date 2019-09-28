import React from 'react';
import './index.css';
import BASE_PATH from '../../BASE_PATH'

export default function UserList() {

  const [id, setId] = React.useState(1)
  const [list, setList] = React.useState([])

  React.useMemo(() => {
    fetch(BASE_PATH + '/volunteer/'+id+'/activeTasks')
      .then(response => response.json())
      .then(res => {
        setList(res)
        console.log("res: ", res)
      })
  },[])


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
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const List = list.map((value) => {
      return(
        <div className="card">
          <span className="taskId">value.taskId</span>
          <span className="taskName">value.taskName</span>
          <span className="taskDescription">value.taskDescription</span>
          <span className="taskRating">value.taskRating</span>

          <div className="acciveConteiner">
            <div className="acciveButtom" onClick={() => taskDone(value.taskId)}>Завершено</div>
          </div>
        </div>
      )
  })

  return (
    <div className="deskArea">
        {List}
    </div>
    );
}
