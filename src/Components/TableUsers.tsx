import React from 'react'
import { UserInterface } from '../models/User'
import { Button } from 'antd'

type TableUserProps = {
    data: UserInterface[]
    onEdit?: (value: UserInterface) => void
    onDelete?: (value: UserInterface) => void

}

const TableUsers: React.FC<TableUserProps> = ({ data, onDelete, onEdit }) => {
    return (
        <table border={1}>
            <tr>
                <th>id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>BirthDay</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action 1</th>
                <th>Action 2</th>
            </tr>
            {data.map(element => {
                return (
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td>{element.gender}</td>
                        <td>{element.birthday}</td>
                        <td>{element.address}</td>
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                        <td>
                            <Button
                                onClick={() => {
                                    onEdit?.(element)
                                }}
                            >
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={() => {
                                    onDelete?.(element)
                                }}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default TableUsers