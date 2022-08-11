 import '../components-style/Header.css';

function Header(){
    return(
        <div className="header">
            <img src="../../src/images/Vector.png" alt="Nfi" className="header-search-image"/>
            <div className="container display-flex">
                <h1 className="header-logo">ByCar.com</h1>
                <div className="display-flex header-search-lang">

                    <form className="header-search">
                        <input type="text" className="header-search-input"/>
                    </form>

                    <div className="header-lang">
                        <button className="header-lang-butt">
                            ru
                        </button>
                        <button className="header-lang-butt">
                            eng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;