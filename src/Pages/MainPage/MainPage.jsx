import React from 'react'
import { useProducstList } from './main.api'
import { NavLink } from 'react-router-dom'

const productCart = (product) => {
  return ( 
  <NavLink to={`/products/${product.id}`} key={product.id}>
   <div>
     <h1>{product.title}</h1>
     <h2>{product.brand}</h2>
     <button>Деталь</button>
     <hr />  
   </div>
  </NavLink>
  )
}
export const MainPage = () => {
  const {data, isError, isPending, error} = useProducstList()
  const products = data?.products

  if (isPending) {
        return <div>Загрузка...</div>;
    }

    if (isError) {
        return <div>Ошибка при получении данных: {error}</div>;
    }
  return (
    <div>
      {products?.map(product => productCart(product))}
    </div>
  )
}

