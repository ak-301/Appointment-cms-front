import { React, useEffect, useState } from 'react';
import './App.css';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbars from './components/Navbars';
const OrdersPage = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");


    const getUsers = async () => {
        const response = await fetch("https://nail-cms.herokuapp.com/orders", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response);
        setUsers(await response.json());
    }


    useEffect(() => { getUsers() }
        , []
    );

    const deleteUser = async (id) => {
        await fetch(`https://nail-cms.herokuapp.com/orders/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log(res);
            });
        getUsers();
    }

    const editUser = async (id) => {

    }


    return (
        <div className='home'>
            <Navbars />
            <div className="cardcontentbox"><h1 className='heading'>All appointments</h1>
                <input className='search' type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="Search..." />
                <div className='cardcontainer'>
                    {users.filter((val) => {
                        if (search === "") {
                            return val;
                        }
                        else if (val.firstName.toLowerCase().includes(search.toLowerCase())) {
                            return val;
                        }
                    }).map((user) => {
                        return (
                            <div className="card m-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <div className="chip"><h5 className="card-title">{user.firstName + " " + user.lastName}</h5></div>

                                    <p className="card-text">Contact - {user.contact}</p>
                                    <h6 className="card-subtitle mb-2 text-muted">Address - {user.address}</h6>
                                    <p className="card-text">Date - {user.appointmentDate}</p>
                                    <p className="card-text">Type - {user.appointmentType}</p>
                                    <p className="card-text">Place - {user.appointmentPlace}</p>
                                    <p className="card-text">Insta - {user.instaId}</p>
                                    <div className="btns">
                                        <Button color='success' onClick={() => { editUser(user._id) }}>Edit</Button>
                                        <Button color='danger' onClick={() => { deleteUser(user._id) }}>Delete</Button>
                                    </ div>
                                </div>
                            </div>

                        );
                    })}
                </div>
                <Link to='/new-order'><Button color='success'>New order</Button></Link>
            </div>
        </div>
    )
};

export default OrdersPage;