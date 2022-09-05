import React, { useState } from 'react';
import './App.css';
import { fake_data, generateID, UserInterface } from './models/User';
import { Button } from 'antd'
import TableUsers from './Components/TableUsers';
import ModalUsers, { NewUserType } from './Components/ModalUsers';

function App() {
  const [show, setShow] = useState<boolean>(() => false)
  const [data, setData] = useState<UserInterface[]>(fake_data)
  const [selectedUser, setSelectedUser] = useState<UserInterface>()

  const onClickCreate = () => {
    setSelectedUser(undefined)
    setShow(true)
  }

  const onSubmitForm = (value: NewUserType) => {
    console.log("DataValueSubmit: ", value)
    setShow(false);

    //Edit
    if (value.id !== undefined) {
      // edit
      setData(s => {
        const index = s.findIndex(i => i.id === value.id)
        if (index >= 0) {
          s[index] = {
            ...s[index],
            ...value,
          }
          return [...s]
        }
        return s
      })
      return
    }

    //create
    setData(s => [...s, { ...value, id: generateID() }])
  }

  const onCancel = () => {
    setShow(false)
  }
  
  const onDelete = (value: UserInterface) => {
    setData(s => s.filter(i => i.id !== value.id ))
  }

  const onEdit = (value: UserInterface) => {
    setSelectedUser(value)
    setShow(true)
  }


  return (
    <div className="Container">
      <TableUsers data={data} onEdit={onEdit} onDelete={onDelete}/>
      <Button onClick={onClickCreate}> Create New User </Button>
      <ModalUsers user={selectedUser} visible={show} onFinished={onSubmitForm} onCancel={onCancel} />

    </div>
  );
}

export default App;
