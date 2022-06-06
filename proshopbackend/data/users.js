import bcrypt from 'bcryptjs';

//so bcrypt use for password protaction that convert
//password to hash code

//logic like just think if you have
//obeject like properties and array like storing multiple
const users = [
    {
        name: "admin user",
        email: "admin@gmail.com",
        password : bcrypt.hashSync('123456', 10 ),
        isdmin: true
    },
    {
        name:"user 1",
        email:"user1@gmail.com",
        password:bcrypt.hashSync('233452', 10 ),
    },
    {
        name:'user 2',
        email:'user2@gmail.com',
        password:bcrypt.hashSync('123421', 10 ),
    },
    {
        name:'user 3',
        email:'user3@gmail.com',
        password:bcrypt.hashSync('987655', 10 ),
    }
]

export default users;