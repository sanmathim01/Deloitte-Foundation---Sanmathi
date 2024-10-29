async function Home() {
  const response = await fetch("http://localhost:9090/products");
  const products = await response.json();
  console.log(products);
 
  return products && products.length > 0 ? (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
 
            <td><button className="primary" >View</button> </td>
            </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <>
      <h3> No data found</h3>
    </>
  );
}
 
export default Home;