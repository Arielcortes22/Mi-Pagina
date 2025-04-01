import React, { useState, useEffect } from 'react';
import '../Styles.css/FormLogin.css';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Llamados from '../../Services/Llamados';
import Swal from 'sweetalert2';

function FormLogin() {
    const [nombreUsuario, SetNombreUsuario] = useState();
    const [passwordUsuario, SetPasswordUsuario] = useState();
    const [usuarios, SetUsuarios] = useState();
    const [TargetaUsuario, SetTargetaUsuario] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDataUsers() {
            const datos = await Llamados.GetUsers();
            SetUsuarios(datos);
        }

        fetchDataUsers();
    }, []);

    function nombre(evento) {
        SetNombreUsuario(evento.target.value);
        console.log(nombreUsuario);
    }

    function password(evento) {
        SetPasswordUsuario(evento.target.value);
        console.log(passwordUsuario);
    }

    function Targeta(evento) {
        SetTargetaUsuario(evento.target.value);
        console.log(Targeta);
    }

    async function validar() {
        const encontrado = usuarios.find(usuario => usuario.nombre === nombreUsuario && usuario.password === passwordUsuario);

        if (!encontrado) {
            console.log("Usuario o contraseña incorrectos");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario o contraseña incorrectos',
            });
        } else {
            if (encontrado.isAdmin) {
                // Si el usuario es administrador
                await Swal.fire({
                    title: 'Inicio de sesión exitoso',
                    text: 'Redirigiendo al panel de administrador...',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    willClose: () => {
                        navigate('/Admin'); // Redirige a la página de administrador
                    }
                });
            } else {
                // Si el usuario no es administrador
                await Swal.fire({
                    title: 'Inicio de sesión exitoso',
                    text: 'Redirigiendo...',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    willClose: () => {
                        navigate('/PagP'); // Redirige a la página de usuario normal
                    }
                });
            }
        }
    }

    return (
        <div id='FormLogin'>
            <div className='Login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label> <br />
                    <Form.Control value={nombreUsuario} onChange={nombre} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Targeta</Form.Label> <br />
                    <Form.Control value={TargetaUsuario} onChange={Targeta} min="9" max="9" type="Number" placeholder="Digita tu Targeta" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label> <br />
                    <Form.Control value={passwordUsuario} onChange={password} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                <Button onClick={validar} variant="primary">
                    Iniciar
                </Button> <br />
                <Link to="/Registrer">No tienes una cuenta? Regístrate aquí</Link> <br />
            </div>
        </div>
    );
}

export default FormLogin;