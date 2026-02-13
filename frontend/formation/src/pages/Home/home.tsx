import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <div id="header">
                <img src=""/>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Formations</a></li>
                    <li><a href="">Documentaion</a></li>
                    <li><Link to="/auth">Sign in</Link></li>
                    <li><Link to="/auth">Login</Link></li>
                </ul>
            </div>
            <div id="body">
                <div id="Catalogues">
                    <ul>
                        <li><a href="">Formation 2</a></li>
                        <li><a href="">Formation 2</a></li>
                        <li><a href="">Formation 2</a></li>
                        <li><a href="">Formation 2</a></li>
                        <li><a href="">Formation 2</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer">
                <div id="informations">
                    <ul>
                        <li><a href="">Abour Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div id="informations-srnous">
                    <a href="">gmail</a>

                    <li><a href="">Numero</a></li>
                </div>
            </div>
        </div>
    )
}

export default Home;