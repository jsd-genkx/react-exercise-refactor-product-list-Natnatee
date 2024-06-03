import React, { useState } from 'react';
let idCounter = 1; //ตัวแปรนี้ต้องอยู่นอก ฟังชั่น เพราะเป็นตัวแปร Global ค่าจะได้ไม่ถูกรีเซ็ต
function ProductForm({ setProducts, products }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (s) => {
    s.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
      image,
      id: idCounter++
    };
    setProducts([...products, newProduct]);//ก็อปปี้Products แล้วยัด object newProductใส่ตัวก็อปปี้แล้วส่งตัวก็อปปี้กลับไปหรือก็คือ เป็น Products ตัวใหม่แล้วทั้งค่าใน และ ค่านอกแค่ชื่อเหมือนเดิม
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={name}//ไม่ใส่ก็ได้ แต่ถ้าใส่จะทำให้ field input นั้น สอดคล้างกับ component name มากขึ้น ตรวจสอบและซิงโครไนซ์ได้ง่ายขึ้น
        onChange={(s) => setName(s.target.value)}//ใช้อะไรแทน e ก็ได้มันจะถูกมองเป็น event object 
        placeholder="Product Name"
        required //ต้องใส่ข้อมูลไม่งั้น Submit ไม่ได้
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}//.target คือ <input .../> ซึ่งเราไม่ต้องการทั้ง element เราต้องการแค่ value จึงต้อง .value
        placeholder="Product Price"
        required 
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Product Image URL"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;

