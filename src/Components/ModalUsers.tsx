import React, { useState, useEffect } from 'react'
import '../App.css'
import { Form, Button, Input, Modal } from "antd";
import { UserInterface } from '../models/User';

export type NewUserType = Omit<UserInterface, 'id'> & { id?: number }

type ModalUsersProps = {
  visible?: boolean;
  onCancel?: () => void
  onFinished?: (value: NewUserType) => void
  user?: UserInterface
}


const ModalUsers: React.FC<ModalUsersProps> = ({ visible, onCancel, onFinished, user }) => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')


  useEffect(() => {
    setFirstName(user?.firstName ?? '')
    setLastName(user?.lastName ?? '')
    setGender(user?.gender ?? '')
    setBirthday(user?.birthday ?? '')
    setAddress(user?.address ?? '')
    setPhone(user?.phone ?? '')
    setEmail(user?.email ?? '')
  }, [user])


  const onSubmit = () => {
    const value: NewUserType = {
      ...(user ?? { firstName: '', lastName: '', gender: '', birthday: '', address: '', phone: '', email: '' }),
      firstName,
      lastName,
      gender,
      birthday,
      address,
      phone,
      email
    }
    onFinished?.(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Modal visible={visible} onCancel={onCancel} onOk={onSubmit}>
          <Form onFinish={onSubmit}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              label="FirstName"
            >
              <Input
                value={firstName}
                onChange={text => setFirstName(text.target.value)}
                placeholder="Type your first name" />
            </Form.Item>

            <Form.Item
              label="LastName"
            >
              <Input
                value={lastName}
                onChange={text => setLastName(text.target.value)}
                placeholder="Type your last name" />
            </Form.Item>

            <Form.Item
              label="Gender"
            >
              <Input
                value={gender}
                onChange={text => setGender(text.target.value)}
                placeholder="Type your gender :)" />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
            >
              <Input
                value={birthday}
                onChange={text => setBirthday(text.target.value)}
                placeholder="DD/MM/YYYY :))" />
            </Form.Item>

            <Form.Item
              label="Address" >
              <Input
                value={address}
                onChange={text => setAddress(text.target.value)}
                placeholder="Type your Address" />
            </Form.Item>

            <Form.Item
              label="Phone"
            >
              <Input
                value={phone}
                onChange={num => setPhone(num.target.value)}
                placeholder="Type your phone" />
            </Form.Item>

            <Form.Item
              label="Email"
            >
              <Input
                value={email}
                onChange={text => setEmail(text.target.value)}
                placeholder="Type your email" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  )
}


export default ModalUsers