import React from 'react'

const Cita = ({cita, delCita, editCitaPart1}) => {








    const { mascota, telefono, propietario, sintomas, id } = cita
    return ( 
    <div className='cita'>
        <h1><span>{mascota}</span></h1>
        <p>Propietario <span></span>{propietario}</p>
        <p>Telefono <span></span>{telefono}</p>
        <p>Sintomas <span></span>{sintomas}</p>
        <button onClick={() => editCitaPart1(cita)} className='button-primary'>edite</button>
        <button onClick={() => delCita(id)} className='button eliminar'>delete</button>
    </div> );
}
 
export default Cita;