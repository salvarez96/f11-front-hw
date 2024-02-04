function ProductItem(props) {

  const {product} = props

  return (
    <div className="card g-col-4 g-col-md-1" style={{width: '18rem'}}>
    <img src={`https://picsum.photos/id/${product.id}/200`} className="card-img-top" alt="Imagen del producto" />
    <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">Precio: ${product.precio}</p>
    </div>
    </div>
  )
}

ProductItem.propTypes

export default ProductItem