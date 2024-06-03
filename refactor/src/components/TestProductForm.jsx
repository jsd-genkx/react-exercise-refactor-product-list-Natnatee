import React, { useState } from 'react';
let idCount = 1;
function ProductForm ({products,setProducts}){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newProduct = {
            name,
            price: parseFloat(price),
            image,
            id: idCount++,
        }
        setProducts([...products,newProduct]);
        setName("")
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4 flex">
            <input
                type = "text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
                className="border p-2 rounded w-full mb-2"    
            />
            <input
                type="number"
                value={price}   
                onChange={(e)=>setPrice(e.target.value)}
                placeholder="Price"
                required
                className="border p-2 w-full mb-2"
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Product Image URL"
                required
                className="border p-2 rounded w-full mb-2"
            />
            <button type="submit" className="bg-blue-500">
                Add Product
            </button>
        </form>
    )

}

export default ProductForm