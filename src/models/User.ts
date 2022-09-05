export interface UserInterface {
    id: number
    firstName: String
    lastName: String
    gender: String
    birthday: String
    address: String
    phone: String
    email: String
}

export const fake_data: UserInterface[] = [
    {
        id: 1,
        firstName: 'Van A',
        lastName: 'Nguyen',
        gender: 'Nam',
        birthday: '01/01/2001',
        address: 'Le Thanh Nghi',
        phone: '123456789',
        email: 'VanA@gmail.com'
    },
    {
        id: 2,
        firstName: 'Van B',
        lastName: 'Nguyen',
        gender: 'Nam',
        birthday: '01/01/2001',
        address: 'Le Thanh Nghi',
        phone: '123456789',
        email: 'VanA@gmail.com'
    },
    {
        id: 3,
        firstName: 'Van C',
        lastName: 'Nguyen',
        gender: 'Nam',
        birthday: '01/01/2001',
        address: 'Le Thanh Nghi',
        phone: '123456789',
        email: 'VanA@gmail.com'
    },
    {
        id: 4,
        firstName: 'Van D',
        lastName: 'Nguyen',
        gender: 'Nam',
        birthday: '01/01/2001',
        address: 'Le Thanh Nghi',
        phone: '123456789',
        email: 'VanA@gmail.com'
    },
    {
        id: 5,
        firstName: 'Van E',
        lastName: 'Nguyen',
        gender: 'Nam',
        birthday: '01/01/2001',
        address: 'Le Thanh Nghi',
        phone: '123456789',
        email: 'VanA@gmail.com'
    },
]

let id = 5

export const generateID: () => number = () => {
    id += 1
    return id
}