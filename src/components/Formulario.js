import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

const Formulario = ({ crearCita }) => {

    //create state citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, seterror] = useState(false);

    //function execute when user write on inputs

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        console.log(e);
        e.preventDefault();

        //review
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || sintomas.trim() === '' || fecha.trim() === '') {
            seterror(true);
            return;
        }

        seterror(false);

        //id
        cita.id = uuid();

        // console.log(cita);
        crearCita(cita);

        //cleaning form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (
        <div>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}
                >Agregar Cita</button>

            </form>
        </div>
    );
}

export default Formulario;