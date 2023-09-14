import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users data from the server
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://fitness-club-server-o4xz.onrender.com/getusers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
            navigate('/');
        }
    };


    return (
        <div style={{minHeight:'100vh'}}>
            <div className='container mt-5'>
                <h2 className=''>User Data</h2>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Age</th>
                            <th>Messages</th>
                            {/* <th>Courses</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.weight}</td>
                                <td>{user.height}</td>
                                <td>{user.age}</td>
                                <td>
                                    <ul>
                                        {user.messages.map((message, index) => (
                                            <li key={message._id}>
                                                <div>
                                                    {message.message}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                {/* <td>{user.courses}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default Users;
