import React, { useEffect, useState } from 'react';

import { v4 as id } from 'uuid'
/// components
import Formulario from './components/formulario';
import Cita from './components/Ciitas';
const App = () => {


    // db
    let db = JSON.parse(localStorage.getItem('citas'))
    if(!db) db = []


    // hooks
    const [citas, citasSet] = useState(db)

    useEffect(() => {
        if(db)
        {
            localStorage.setItem('citas',JSON.stringify(citas))
            return
        }
        localStorage.setItem('citas',JSON.stringify([]))
    })
    // crd

    const addCita = (obj) => {
        obj.id = id()
        citasSet([...citas,obj])
    }
    const delCita = id => {
        citasSet([...citas.filter( a => a.id !== id)]);
    }



    return ( 
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <h1>create Cita</h1>
                        <div>
                            <Formulario addCita={addCita} />
                        </div>
                    </div>
                    <div className='one-half column'>
                        <h1>list de Citas</h1>
                        <div className=''>
                            <div className='orange'>
                                {citas.map( cita => <Cita key={cita.id} cita={cita} delCita={delCita}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default App;