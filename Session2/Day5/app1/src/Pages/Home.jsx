import React, { Component,useState } from 'react'
import Footer from '../Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Navbar';
import ProductsTable from '../Components/ProductsTable';
import ProductModal from '../Components/ProductsModal';
import {Button} from 'react-bootstrap';
import {usellavigate} from 'react-router-dom';

const products = [
    {id:1, pname: 'Apple', pdesc:'Juicy',price:100,quantity:2},
    {id:2,pname:'Tomato',pdesc:'Tangy',price:120,quantity:5},
    {id:3,pname:'Mango',pdesc:'Yellow',price:70,quantity:3},
    {id:4, pname: 'Grapes', pdesc:'Green',price:100,quantity:2},
    {id:5,pname:'Jackfruit',pdesc:'Kerela Jackfruit',price:120,quantity:5},

]

export default function Home(){
        const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleSelectedProduct = (product) => { setSelectedProduct(product); setShow(true)}


    return(
        <>
        <Navbar />
        <main>
        <Button variant= "success" onClick={()=> navigate('addProduct')}>Add Product</Button>
        <Productstable products={products} onProductClick={handleSelectedProduct}/>
        <ProductModal selectedProduct={selectedProduct} show={show} handleClose={handleClose}/>

        </main>
        <Footer />
     
        </>
    )
}
