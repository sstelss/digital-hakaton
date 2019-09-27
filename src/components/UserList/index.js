import React from 'react';
import './index.css';

export default function UserList() {

  const [RegStatus, setRegStatus] = React.useState(false)

  React.useMemo(() => {
    fetch('/currentUser')
      .then(response => response.json())
      .then(res => {
        if (res.status_text === 'OK') {
          setRegStatus(true)
        }
      })
  })

  return (
    <div className="UserList">
        UserList
    </div>
    );
}
