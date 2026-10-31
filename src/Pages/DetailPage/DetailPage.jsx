import React from 'react'
import { useDetailList } from './detail.api'
import { useNavigate, useParams } from 'react-router-dom'

const detailCard = (detail) => {
  return (
  <>
     <img src={detail.thumbnail} alt="" />
     <h1>{detail.title}</h1>
     <h2>{detail.brand}</h2>
     <h3>{detail.description}</h3>
     <h5>{detail.price}</h5>    
  </>
  )
}
export const DetailPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data: detail, isError, error, isLoading} = useDetailList(id)

  if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (isError) {
        return <div>Ошибка при получении данных: {error}</div>;
    }
  return (
    <div>
      {detailCard(detail)}
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

