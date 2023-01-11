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
    // states
    const [citas, citasSet] = useState(db)
    const [edit, editSet] = useState({
        mascota: '',
        propietario: '',
        telefono: '',
        sintomas: ''
    })
    const [mode, modeSet] = useState(false);

    // Efects
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
    const editCitaPart1 = obj => {
        editSet(obj)
        modeSet(true)

    }
    const editCitaPart2 = obj => {
        const all = citas.map( dato => {
            if( dato.id === obj.id)
            {
                return obj
            }
            return dato
        })
        citasSet([...all])

    }



    return ( 
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <h1>create Cita</h1>
                        <div>
                            <Formulario 
                                addCita={addCita}

                                edit={edit}
                                mode={mode}

                                modeSet={modeSet}
                                editCitaPart2={editCitaPart2}
                             />
                        </div>
                    </div>
                    <div className='one-half column'>
                        <h1>list de Citas</h1>
                        <div className=''>
                            <div className='orange'>
                                {citas.map( cita => <Cita 
                                    key={cita.id} 
                                    cita={cita}
                                    
                                   editCitaPart1={editCitaPart1}
                                    delCita={delCita} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default App;