import React from 'react';

const Ninjas = ({ninjas, deleteNinjas}) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age >= 25) {
            return(
                <div className='ninja' key={ ninja.id }>
                    <div>Name: { ninja.name }</div>
                    <div>Hobby: { ninja.hobby }</div>
                    <div>Age: { ninja.age }</div>
                    <button onClick={ () => {deleteNinjas(ninja.id)} }>Delete Ninja</button>
                </div>
            )
        } else {
            return null
        }
        
    })
    
    return(
        <div className='ninja-list'>
            { ninjaList }
        </div>
    )
}


export default Ninjas