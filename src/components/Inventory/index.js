import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import axios from 'axios';

class Inventory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            referencia: '',
            precio: undefined,
            peso: undefined,
            stock: undefined,
            fechadecreacion: '',
            fechadeultimaventa: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, keyValue) {
        debugger
        this.setState({ [keyValue]: event.target.value });
    }

     /*handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
     }*/
    handleSubmit = event => {
        event.preventDefault();
        var service_id = "default_service";
        const templateId = 'template_HDm5JSFo';
        //this.send(service_id,templateId,this.state,userId);
        this.sendFeedback(service_id,templateId,this.state);
        //this.sendFeedback(templateId,{message_html: this.state.feedback, from_name: this.state.nombres, reply_to: this.state.correo})
        axios.post(`https://datosregistro.now.sh/datosUsuario/`, { ...this.state})
            .then(res => {
                if (res != null) {
                    localStorage.setItem('user', JSON.stringify(res.data)); //local storage de la data para asi llevarlos al inventory
                    this.props.history.push('/');
                }
            })

    }


    render() {
        return (

            <div>
                <nav
                    className="navbar navbar-light bg-light"
                >
                    <a
                        className="navbar-brand"
                        href="#"
                    >
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        Geek
                    </a>
                </nav>
                <div
                    id="header"
                    className="container-fluid d-flex justify-content-center align-item-center body-registro"
                >
                    <form onSubmit={this.handleSubmit}
                        className="form-signin p-3 sm-12"
                    >
                        <div
                            className="text-center mb-4"
                        >
                            <h1
                                className="h3 mb-3 font-weight-normal text-center"
                            >
                                Inventario
                            </h1>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer01"
                                >
                                    Nombre del Producto
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Ingrese nombre"
                                    className="form-control "
                                    value={this.state.nombre}
                                    onChange={(event) => this.handleChange(event, 'nombre')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer02"
                                >
                                    Referencia
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="referencia"
                                    placeholder="Ingrese Referencia"
                                    value={this.state.referencia}
                                    onChange={(event) => this.handleChange(event, 'referencia')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer03"
                                >
                                    Precio
                                </label>
                                <input
                                    className="form-control "
                                    type="text"
                                    name="precio"
                                    placeholder="Ingrese Precio"
                                    value={this.state.precio}
                                    onChange={(event) => this.handleChange(event, 'precio')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer04"
                                >
                                    Peso
                                </label>
                                <input
                                    className="form-control "
                                    type="text"
                                    name="peso"
                                    placeholder="Ingrese Peso"
                                    value={this.state.peso}
                                    onChange={(event) => this.handleChange(event, 'peso')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <div className="form-group">
                                    <label for="validationServer05"></label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Categoría</option>
                                        <option>Computadores</option>
                                        <option>Tablets</option>
                                        <option>Celulares</option>
                                    </select>
                                </div>
                            </div>
                            <div
                                className="valid-feedback"
                            >
                                Looks good!
                                </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer06"
                                >
                                    Stock
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="stock"
                                    placeholder="Ingrese unidades"
                                    value={this.state.stock}
                                    onChange={(event) => this.handleChange(event, 'stock')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer07"
                                >
                                    Fecha de creación
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="fechadecreacion"
                                    placeholder="Ingrese fecha de creación"
                                    value={this.state.fechadecreacion}
                                    onChange={(event) => this.handleChange(event, 'fechadecreacion')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-row"
                        >
                            <div
                                className="col-sm-12 col-form-label-sm"
                            >
                                <label
                                    for="validationServer08"
                                >
                                    Fecha de última venta
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="fechadeultimaventa"
                                    placeholder="Ingrese fecha de última venta"
                                    value={this.state.fechadeultimaventa}
                                    onChange={(event) => this.handleChange(event, 'fechadeultimaventa')}
                                >
                                </input>
                                <div
                                    className="valid-feedback"
                                >
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <br />
                        <button
                            className="btn btn-lg btn-dark rounded-pil btn-block mr-3"
                            type="submit"
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Inventory;