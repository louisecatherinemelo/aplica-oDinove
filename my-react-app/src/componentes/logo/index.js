import logo from '../../imagens/logo.png';

function Logo() {
    return(
        <div className='logo'>
            <img src={logo} alt= 'logo'></img>
            <p className='titulo'><strong>Di</strong>nove</p>
        </div> 
    )     

}

export default Logo