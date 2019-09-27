import React from 'react';
import './index.css';
import BASE_PATH from '../../BASE_PATH'

export default function UserList() {

  const [info, setInfo] = React.useState([])

  React.useMemo(() => {
    fetch(BASE_PATH + '/volunteer/1/tasks')
      .then(response => response.json())
      .then(res => {
        setInfo(res)
        console.log("res: ", res)
      })
  },[])

  const List = info.map((value, index) =>{
    return <p key={index}>{value.taskName}</p>
  })

  return (
    <div className="UserList">
        UserList: 
        {BASE_PATH}
        {/* Info: {info} */}
        {List}
    </div>
    );
}
