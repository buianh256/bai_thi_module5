import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Details() {
    const [products, setProducts] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-auto border bg-white border shadow p-5'>
                <h2>Chi tiết sản phẩm</h2>
                <div className="card">
                    <p><b>Tên sản phẩm:</b> {products.title}</p>
                    <p><b>Mô tả:</b> {products.description}</p>
                    <p><b>Giá:</b> {products.price}</p>
                    <Link to="/" className='btn btn-primary'>Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;