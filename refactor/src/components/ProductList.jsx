import React from 'react';

// function ProductList({ products }) {
//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//       {products.map((product) => (
//         <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-[200px] h-auto object-cover rounded"
//           />
//           <div className="mt-2">
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-gray-600">${product.price.toFixed(2)}</p>
//             <p className="text-gray-600">{product.id}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
//เหตุผลที่ใช้ .map เพราะการเขียน jsx เราไม่ได้มี createElement ทำให้ใช้ .forEach ไมไ่ด้

 function ProductList ({products}){
 return(
  <div>
      {products.map((product) => (
          <div key={product.id}>
               <img src={product.image} alt={product.name}/>
              <div>{product.name}</div>
          </div>
      ))}
  </div>
  )
}

 export default ProductList;
