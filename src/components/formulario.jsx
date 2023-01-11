import React, { useEffect, useState } from 'react';

const validator = obj => {
    return Object.values(obj).some( a => a === '')
}
const Formulario = ({addCita}) => {


    const [ formObj, formHandler] = useState(
        {
            mascota: '',
            propietario: '',
            sintomas: '',
            telefono: ''
        })
    const [disable, disabledSet ] = useState(false)
    useEffect(() => {
        if(validator(formObj))
        {
            disabledSet(false)

        } else {
            disabledSet(true)
        }
    }, [formObj])
    const valueObj = event => {
        const id = event.target.getAttribute('id')
        if(id === 'mascota')
        {
            formHandler({...formObj,mascota: event.target.value})
        } else if(id === 'propietario')
        {
            formHandler({...formObj,propietario: event.target.value})
        } else if(id === 'sintomas')
        {
            formHandler({...formObj,sintomas: event.target.value})
        } else if(id === 'telefono')
        {
            formHandler({...formObj,telefono: event.target.value})
        }
    }

const formSubming = event => {
    event.preventDefault()
    
    addCita({...formObj}) // 
}


    return ( 
        <div>
            <form onSubmit={formSubming} >
                <label htmlFor="mascota">Mascota:</label>
                <input onChange={valueObj} className='u-full-width' type="text" name='mascota' id='mascota' placeholder='Tu mascota'/>
                <label htmlFor="propietario">propietario:</label>
                <input onChange={valueObj} className='u-full-width' type="text" name='propietario' id='propietario' placeholder='Dueno'/>
                <label htmlFor="telefono">telefono:</label>
                <input onChange={valueObj} className='u-full-width' type="text" name='telefono' id='telefono' placeholder='Tu telefono'/>
                <label htmlFor="sintomas">sintomas:</label>
                <textarea onChange={valueObj} className='u-full-width' type="text" name='sintomas' id='sintomas' placeholder='Los sintomas'></textarea>
                <input 
                className={disable? 'button-primary': 'disabledbtn'}
                type="submit" 
                value="Guardar"
            
                />
            </form>
        </div>
    )
}
 
export default Formulario;