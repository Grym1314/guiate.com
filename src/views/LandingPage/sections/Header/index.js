import './header.css';

const Header = () =>{
<div className="header">
    <h1 className="logo"><a href="index.html">Guiate</a></h1>
    <nav className="nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li>
                <a href="#">Layouts</a>
                <ul>
                    <li><a href="left-sclassNameebar.html">Left SclassNameebar</a></li>
                    <li><a href="right-sclassNameebar.html">Right SclassNameebar</a></li>
                    <li><a href="no-sclassNameebar.html">No SclassNameebar</a></li>
                    <li>
                        <a href="#">Submenu</a>
                        <ul>
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                            <li><a href="#">Option 3</a></li>
                            <li><a href="#">Option 4</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="elements.html">Elements</a></li>
            <li><a href="#" className="button primary">Sign Up</a></li>
        </ul>
    </nav>
</div>
}

export default Header;


