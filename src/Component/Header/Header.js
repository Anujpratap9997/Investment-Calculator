import logo from '../../assets/investment-calculator-logo.png';

const Header =()=>{
    return(
        <header className="header">
        <img src={logo} alt="logo" />
        <h1>Welcome to Investment Calculator</h1>
        <p>You can calculates your future worth with this calculator</p>
      </header>
    )
};

export default Header;