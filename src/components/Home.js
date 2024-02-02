import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";

export default function Home() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products').then(response => {
            setProduct(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const navigate = useNavigate();
    const handleDelete = (id) => {
        const confirm = window.confirm('Bạn muốn xoá sản phẩm này không?');
        if (confirm) {
            axios.delete(`http://localhost:3000/products/${id}`)
                .then(res => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-auto border bg-white border shadow p-5'>
                <div className='d-flex justify-content-first'>
                    <Link to='/add' className='btn btn-primary'>ADD</Link>
                </div>
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        product.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{index+1}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/view/${product.id}`}>{product.title}</Link>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{product.description}</p>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{product.price}</p>
                                </td>
                                <td>
                                    <Link to={`/update/${product.id}`} className='btn btn-sm btn btn-secondary me-2'>Sửa</Link>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={event => handleDelete(product.id)}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}