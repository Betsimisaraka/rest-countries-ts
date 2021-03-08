import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Card = () => {
    const { isLoading } = useContext(GlobalContext);
    return (
        <div>
            {isLoading && <h2>Is loading...</h2>}
        </div>
    )
}

export default Card
