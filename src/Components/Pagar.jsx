import React, { useState } from 'react';
import '../Styles.css/PagarStyles.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Pagar() {
  const  [productos] = useState([
    { nombre: 'SueterLv', precio:  500.000, imagen: 'ruta-a-imagen-sueter.jpg' },
    { nombre: 'Khamrah', precio: 28.000, imagen: 'ruta-a-imagen-pantalon.jpg' },
    { nombre: 'Zapatos', precio: 300.000, imagen: 'ruta-a-imagen-zapatos.jpg' },
  ]);

  const [carrito, setCarrito] = useState([...productos]);
  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: '' });

  const agregarProductoManual = (e) => {
    e.preventDefault();
    if (nuevoProducto.nombre && nuevoProducto.precio) {
      const producto = {
        nombre: nuevoProducto.nombre,
        precio: parseFloat(nuevoProducto.precio),
      };
      setCarrito([...carrito, producto]);
      setNuevoProducto({ nombre: '', precio: '' }); // Limpiar el formulario
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: `El producto "${producto.nombre}" fue agregado al carrito.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un nombre y un precio válido.',
      });
    }
  };

  const subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);
  const descuento = codigoDescuento === 'DESCUENTO10' ? subtotal * 0.1 : 0;
  const envio = carrito.length > 0 ? 10 : 0;
  const total = subtotal - descuento + envio;

  const handleComprar = () => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Carrito vacío',
        text: 'El carrito está vacío. Agrega productos antes de comprar.',
      });
      return;
    }
    if (!metodoPago) {
      Swal.fire({
        icon: 'warning',
        title: 'Método de pago requerido',
        text: 'Por favor, selecciona un método de pago.',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: `Compra realizada con éxito. Total: $${total.toFixed(2)}`,
      confirmButtonText: 'Aceptar',
    }).then(() => {
      setCarrito([]);
      setCodigoDescuento('');
      setMetodoPago('');
    });
  };

  return (
    <div id="Pagar">
      <div className="botonrojo">
        <Link to="/PagP">
          <button className="btn-class-name">
            <span className="back"></span>
            <span className="front"></span>
          </button>
        </Link>
      </div>
      <div className="Payment">
        <div className="container">
          <div className="card cart">
            <label className="title">CHECKOUT</label>
            <div className="steps">
              <div className="step">
                <div>
                  <span>Productos en el carrito</span>
                  <ul>
                    {carrito.map((producto, index) => (
                      <li key={index}>
                        {producto.nombre} - ${producto.precio.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div>
                  <span>Agregar producto manualmente</span>
                  <form onSubmit={agregarProductoManual}>
                    <input
                      type="text"
                      placeholder="Nombre del producto"
                      value={nuevoProducto.nombre}
                      onChange={(e) =>
                        setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Precio del producto"
                      value={nuevoProducto.precio}
                      onChange={(e) =>
                        setNuevoProducto({ ...nuevoProducto, precio: e.target.value })
                      }
                    />
                    <button type="submit">Agregar</button>
                  </form>
                </div>
                <hr />
                <div>
                  <span>PAYMENT METHOD</span>
                  <select
                    name="metodoPago"
                    id="Sl"
                    value={metodoPago}
                    onChange={(e) => setMetodoPago(e.target.value)}
                  >
                    <option value="">Seleccione un método</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="BCR">BCR</option>
                    <option value="Visa">Visa</option>
                  </select>
                  <input type="text" placeholder='Digite su targeta' />
                </div>
                <hr />
                <div className="promo">
                  <span>¿Tienes código de descuento?</span>
                  <form className="form">
                    <input
                      className="input_field"
                      placeholder="Ingresa aquí"
                      type="text"
                      value={codigoDescuento}
                      onChange={(e) => setCodigoDescuento(e.target.value)}
                    />
                  </form>
                </div>
                <hr />
                <div className="payments">
                  <span>PAYMENT</span>
                  <div className="details">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                    <span>Shipping:</span>
                    <span>${envio.toFixed(2)}</span>
                    <span>Discount:</span>
                    <span>-${descuento.toFixed(2)}</span>
                  </div>
                   
              <label className="price">${total.toFixed(2)}</label>
              <button className="checkout-btn" onClick={handleComprar}>
                Comprar
              </button>
            
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Pagar;