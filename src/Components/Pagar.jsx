import React, { useState } from 'react';
import '../Styles.css/PagarStyles.css';
import { Link } from 'react-router-dom';

function Pagar() {
  // Estado para manejar los productos seleccionados y sus precios
  const [productos] = useState([
   
    { nombre: 'SueterLv', precio: 5000, imagen: 'ruta-a-imagen-sueter.jpg' },
    { nombre: 'Pantalón', precio: 400, imagen: 'ruta-a-imagen-pantalon.jpg' },
    { nombre: 'Zapatos', precio: 1500, imagen: 'ruta-a-imagen-zapatos.jpg' },
  ]);

  // Inicializar el carrito con todos los productos automáticamente
  const [carrito, setCarrito] = useState([...productos]);
  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: '' });

  // Función para agregar un producto manualmente al carrito
  const agregarProductoManual = (e) => {
    e.preventDefault();
    if (nuevoProducto.nombre && nuevoProducto.precio) {
      const producto = {
        nombre: nuevoProducto.nombre,
        precio: parseFloat(nuevoProducto.precio),
      };
      setCarrito([...carrito, producto]);
      setNuevoProducto({ nombre: '', precio: '' }); // Limpiar el formulario
    } else {
      alert('Por favor, ingresa un nombre y un precio válido.');
    }
  };

  // Calcular subtotal
  const subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);

  // Calcular descuento (si aplica)
  const descuento = codigoDescuento === 'DESCUENTO10' ? subtotal * 0.1 : 0;

  // Calcular envío (puedes personalizarlo)
  const envio = carrito.length > 0 ? 10 : 0;

  // Calcular total
  const total = subtotal - descuento + envio;

  const handleComprar = () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de comprar.');
      return;
    }
    alert(`Compra realizada con éxito. Total: $${total.toFixed(2)}`);
    console.log('Productos comprados:', carrito);
    console.log('Método de pago:', metodoPago);
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
                </div>
              </div>
            </div>
          </div>

          <div className="card checkout">
            <div className="footer">
              <label className="price">${total.toFixed(2)}</label>
              <button className="checkout-btn" onClick={handleComprar}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagar;