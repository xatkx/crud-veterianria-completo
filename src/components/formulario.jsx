import React, { useEffect, useState } from 'react';

const validator = obj => {
    return Object.values(obj).some(a => a === '')
}
const Formulario = ({ addCita, mode, modeSet, edit, editCitaPart2 }) => {




    const [formObj, formHandler] = useState(
        {
            mascota: '',
            propietario: '',
            sintomas: '',
            telefono: ''
        })
    const [disable, disabledSet] = useState(false)


    useEffect(() => {
        if (validator(formObj)) {
            disabledSet(false)

        } else {
            disabledSet(true)

        }
    }, [formObj])

    useEffect(() => {

        if (edit[0] !== '') {
            formHandler(edit)
        }

    }, [edit])


    // var
    const { mascota, propietario, telefono, sintomas } = formObj
    const btnsubmit = mode ? 'Guardar' : 'Crear Cita'
    const colorbtn = mode ? 'edit' : null;

    // function

    const valueObj = event => { // add el valor de ls inputs al state
        const id = event.target.getAttribute('id')
        if (id === 'mascota') {
            formHandler({ ...formObj, mascota: event.target.value })
        } else if (id === 'propietario') {
            formHandler({ ...formObj, propietario: event.target.value })
        } else if (id === 'sintomas') {
            formHandler({ ...formObj, sintomas: event.target.value })
        } else if (id === 'telefono') {
            formHandler({ ...formObj, telefono: event.target.value })
        }
    }



    const formSubming = event => {
        event.preventDefault()


        if (mode) {


            editCitaPart2({ ...formObj }) // actualizar cita en la base de datos

            modeSet(false) // reset del mode edit a normal

            formHandler({ // limpiar form
                mascota: '',
                propietario: '',
                sintomas: '',
                telefono: ''
            })
            return
        }

        addCita({ ...formObj }) // agregar cita a la "base de datos"
        formHandler({ // limpiar form
            mascota: '',
            propietario: '',
            sintomas: '',
            telefono: ''
        })
    }


    return (
        <div>
            <form onSubmit={formSubming} >
                <label htmlFor="mascota">Mascota:</label>
                <input value={mascota} onChange={valueObj} className='u-full-width' type="text" name='mascota' id='mascota' placeholder='Tu mascota' />
                <label htmlFor="propietario">propietario:</label>
                <input value={propietario} onChange={valueObj} className='u-full-width' type="text" name='propietario' id='propietario' placeholder='Dueno' />
                <label htmlFor="telefono">telefono:</label>
                <input value={telefono} onChange={valueObj} className='u-full-width' type="text" name='telefono' id='telefono' placeholder='Tu telefono' />
                <label htmlFor="sintomas">sintomas:</label>
                <textarea value={sintomas} onChange={valueObj} className='u-full-width' type="text" name='sintomas' id='sintomas' placeholder='Los sintomas'></textarea>
                {disable ? 
                <input
                    className={disable ? mode ? 'edit' : 'button-primary' : 'disabledbtn'}
                    type="submit"
                    value={btnsubmit}
                />:
                <input
                className={disable ? mode ? 'edit' : 'button-primary' : 'disabledbtn'}
                type="submit"
                value={btnsubmit}
                disabled
            />}
            </form>
        </div>
    )
}

export default Formulario;