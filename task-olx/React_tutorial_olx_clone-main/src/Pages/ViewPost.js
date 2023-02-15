import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'

function ViewPost() {
    const {id} = useParams();
    //console.log(id);
    return (
        <div>
            <Header />
            <View value={id} />
        </div>
    )
}

export default ViewPost
