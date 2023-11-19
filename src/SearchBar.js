import './SearchBar.css';

const SearchBar = () => {
    let items=['human hair wigs','|','apple watch band','|','mystery box','|','sunglasses','|','get nail polish','|', 'nail'];
    return ( 
    <div className='SearchBarWithOptions'>
        <div className="SearchBar">        
            <input className="SearchBarInput" type="text" placeholder="IPhone case" />
            <button className="SearchBarButton">
                <div className="SearchBarImage"></div>
            </button>
        </div>

        <div className='SearchOptions'>
            {items.map((item,index)=>{
                return <div className='Option' key={index}>{item}</div>
            })}
        </div>
    </div>
    );
}
 
export default SearchBar;