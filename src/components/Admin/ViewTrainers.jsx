import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewTrainers = () => {
    const navigate = useNavigate();
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        // Fetch trainers data from the server
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const response = await axios.get('https://fitness-club-server-o4xz.onrender.com/getTrainers');
            setTrainers(response.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
            navigate('/');
        }
    };


    return (
        <div style={{minHeight:'100vh'}}>
            <div className='container-fluid'>
                <h2 className=''>Trainer Data</h2>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>Courses</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map((trainer) => (
                            <tr key={trainer._id}>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.phone}</td>
                                <td>{trainer.gender}</td>
                                <td>{trainer.jobtitle}</td>
                                <td>{trainer.description}</td>
                                <td>
                                    <ul className='list-group '>
                                        {trainer.classes.map((course) => (
                                            <li className='list-group-item ' key={course.title}>
                                                <span className='text-success'>{course.title}</span>,
                                                Timing: <span className='text-success'>{course.timing}</span>,
                                                Days: <span className='text-success'>{course.days}</span>
                                            </li>
                                            
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul className='list-unstyled'>
                                        <li><a href={trainer.fblink} className="link-primary text-decoration-none">Facebook</a></li>
                                        <li><a href={trainer.instalink} className="link-danger text-decoration-none">Instagram</a></li>
                                        <li><a href={trainer.twlink} className="link-info text-decoration-none">Twitter</a></li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewTrainers