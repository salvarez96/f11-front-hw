import { useEffect, useState } from 'react';
import { GetCagorias } from '../../services/categorias/categoriasService';
import AlertMessenger from '../../components/alertMessenger';
import { getProducts } from '../../services/productos/productosService';
import { Link, useParams } from 'react-router-dom';
import ProductItem from '../../components/productos/productItem';

const ProductosPage = () => {

    const {categoryName} = useParams()

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(0)
    const [products, setProducts] = useState([])
    const [apiResponse, setApiResponse] = useState({})

    useEffect(() => {
        switch (loading) {
            case 0:
                handleGetCategories()
                break
            case 1:
                handleGetProducts()
                break
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const handleGetCategories = async () => {
        await GetCagorias()
            .then(categories => setCategories(categories))
            .catch(({response}) => setApiResponse({
                status: response.status ?? 500,
                message: response.data.message ?? 'Error en el servidor'
            }))
        setLoading(1)
    }

    const handleGetProducts = async () => {
        await getProducts()
            .then(products => setProducts(products))
            .catch(({response}) => setApiResponse({
                status: response.status ?? 500,
                message: response.data.message ?? 'Error en el servidor'
            }))
        setLoading(2)
    }

    const handleProductsToShow = async (categoryId) => {
        await getProducts('category_id=' + categoryId)
            .then(products => setProducts(products))
    }

    return(
        <div className="container w-50" style={{minWidth: '300px'}}>
            <h2 className="my-5 text-center">Productos</h2>
            <div className="w-50" style={{minWidth: '300px', margin: '0 auto'}}>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                    <Link to='/productos' type="button" className='btn btn-secondary' onClick={handleGetProducts}>Todos</Link>
                    {categories && 
                    categories.map(category => (
                        <Link 
                            to={`/productos/${category.nombre.toLowerCase().split(' ').join('-')}`} 
                            key={category.id} 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={() => handleProductsToShow(category.id)}
                        >{category.nombre}</Link>
                    ))
                    }
                </div>
                <h4 className="my-5 text-center">{categoryName ?? 'Todos'}</h4>
            </div>
            <div className="gap-4" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'center'}}>
                {products && 
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
                }
            </div>
            <AlertMessenger status={apiResponse.status} messageContent={apiResponse.message} />
        </div>
    )
}

export default ProductosPage;