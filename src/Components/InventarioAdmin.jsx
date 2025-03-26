import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../Styles.css/AdminStyles.css';
import LlamadosProductos from '../../Services/LlamadosProductos';

function InventarioAdmin() {
  const [Productos, setProductos] = useState({ nombre: "", precio: "", imagen: "" });
  const [MostrarProductos, setMostrarProductos] = useState([]);
  const [editando, setEditando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  // Cargar datos al inicio
  useEffect(() => {
    async function recuperarDatos() {
      try {
        const datos = await LlamadosProductos.GetProductos();
        console.log('Datos recuperados:', datos);
        setMostrarProductos(datos);
      } catch (error) {
        console.error('Error al recuperar los datos:', error);
      }
    }
    recuperarDatos();
  }, []);

  // Manejar cambios en los inputs
  function ProductosInput(evento) {
    const { name, value } = evento.target;
    setProductos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Manejar la carga de imágenes
  function handleImagenChange(evento) {
    const file = evento.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductos((prevState) => ({
          ...prevState,
          imagen: reader.result, // Guardar la imagen como base64
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  // Agregar o actualizar productos
// Agregar o actualizar productos
async function Agregar() {
  try {
    if (editando) {
      console.log(`Editando producto con id: ${idEditando}`);
      await LlamadosProductos.UpdateProductos(idEditando, Productos);
      setMostrarProductos(
        MostrarProductos.map((producto) =>
          producto.id === idEditando ? { ...producto, Productos } : producto
        )
      );
      setEditando(false);
      setIdEditando(null);
      Swal.fire('Actualizado', 'El producto ha sido actualizado.', 'success');
    } else {
      const nuevoProducto = await LlamadosProductos.PostProductos(Productos);
      setMostrarProductos([...MostrarProductos, nuevoProducto]);
      Swal.fire('Agregado', 'El producto ha sido agregado.', 'success');
    }
    setProductos({ nombre: "", precio: "", imagen: "" });
  } catch (error) {
    console.error('Error al agregar o actualizar el producto:', error);
    Swal.fire('Error', 'No se pudo agregar o actualizar el producto.', 'error');
  }
}
async function Eliminar(id) {
  const resultado = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esta acción',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  });
  if (resultado.isConfirmed) {
    try {
      await LlamadosProductos.DeleteProductos(id);
      setMostrarProductos(MostrarProductos.filter((producto) => producto.id !== id));
      Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
    }
  }
}
// Editar producto con SweetAlert2
async function Editar(id) {
  const EditarProducto = MostrarProductos.find((producto) => producto.id === id);

  if (!EditarProducto) {
    Swal.fire('Error', 'Producto no encontrado', 'error');
    return;
  }

  const { value: formValues } = await Swal.fire({
    title: 'Editar Producto',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nombre del producto" value="${EditarProducto.Productos?.nombre || ''}">
      <input id="swal-input2" class="swal2-input" type="number" placeholder="Precio del producto" value="${EditarProducto.Productos?.precio || ''}">
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const nombre = document.getElementById('swal-input1').value;
      const precio = document.getElementById('swal-input2').value;

      if (!nombre || !precio) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }

      return { nombre, precio };
    },
  });

  if (formValues) {
    try {
      // Actualizar en el backend
      await LlamadosProductos.UpdateProductos(id, { ...formValues, imagen: EditarProducto.Productos.imagen });

      // Actualizar en el estado
      setMostrarProductos(
        MostrarProductos.map((producto) =>
          producto.id === id
            ? { ...producto, Productos: { ...producto.Productos, ...formValues } }
            : producto
        )
      );

      Swal.fire('Actualizado', 'El producto ha sido actualizado.', 'success');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      Swal.fire('Error', 'No se pudo actualizar el producto.', 'error');
    }
  }
}

  return (
    <div id='InventarioAdmin'>
      <div className='Tablaon'>
        <h1>Productos</h1>
        <input
          name="nombre"
          value={Productos.nombre}
          onChange={ProductosInput}
          type="text"
          placeholder="Nombre del producto"
        />
        <br />
        <input
          name="precio"
          value={Productos.precio}
          onChange={ProductosInput}
          type="number"
          placeholder="Precio del producto"
        />
        <br />
        <input type="file" onChange={handleImagenChange} />
        {Productos.imagen && <img src={Productos.imagen} alt="Vista previa" height="200px" width="200px" />}
        <br />
        <button onClick={Agregar}>
          {editando ? "Actualizar" : "Agregar"}
        </button>
      </div>
      <div className='Tareas2'>
        <Table className='TablaAdmin' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {MostrarProductos.map((producto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{producto.id}</td>
                <td>{producto.Productos?.nombre || "Nombre no disponible"}</td>
                <td>{producto.Productos?.precio || "Precio no disponible"}</td>
                <td>
                  {producto.Productos?.imagen ? (
                    <img src={producto.Productos.imagen} alt="Producto" height="200px" width="200px" />
                  ) : (
                    "No"
                  )}
                </td>
                <td>
                  <button className='Eliminar' onClick={() => Eliminar(producto.id)}>Eliminar</button>
                  <button className='Editar' onClick={() => Editar(producto.id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default InventarioAdmin;

