import './Header.css';
import SearchBar from './SearchBar';

const Header = () => {
    return ( 
    <div className='Header'>
        <SearchBar/>
        <button className="ShoppingCartButton">
            <div className="ShoppingCartImage"></div>
        </button>
    </div>
    );
}
 
export default Header;