import React, { Component } from 'react';
import Logo from '../../images/logo.png';

class Products extends Component {

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
                <input type="text" name="inputname" value="datos a enviar" readonly></input>
            </div>

        );
    }
}

export default Products;