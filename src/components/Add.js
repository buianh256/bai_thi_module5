import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Add() {

    const [values, setValues] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/products', values)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-auto border bg-white border shadow p-5'>
                <form onSubmit={handleSubmit}>
                    <h2>Thêm sản phẩm</h2>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="price">Giá:</label>
                        <input type="number" name='price' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="description">Mô tả:</label>
                        <input type="text" name='description' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <br/>
                    <button className='btn btn-primary '>Submit</button>
                    <Link to='/' className='btn btn-secondary'>Back</Link>

                </form>
            </div>
        </div>
    );
}

export default Add;