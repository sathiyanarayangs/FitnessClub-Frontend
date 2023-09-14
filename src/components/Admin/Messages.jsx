import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages data from the server
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://fitness-club-server-o4xz.onrender.com/getmessages');
      setMessages(response.data.reverse()); // Reverse the order of messages
    } catch (error) {
      console.error('Error fetching Messages:', error);
      navigate('/');
    }
  };

  return (
    <div style={{minHeight:'95vh'}}>
      <div className='container mt-5'>
        <h2 className="">Messages</h2>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
