import { AiOutlineSearch } from 'react-icons/ai';
import { useSearch } from '../context/Search';

const Header = () => {
    const [values, setValues] = useSearch();
    return <>
        <header id="header">
            <div className="search_box">
                <input 
                type="text" 
                placeholder="Search.." 
                required 
                value={values.keyword}
                onChange={(e)=>setValues({...values, keyword:e.target.value})}
                />
                <span><AiOutlineSearch className='search_icon' /></span>
            </div>
            <nav className="menu">
                <select name="brands" id="brands">
                    <option value="BMW" defaultChecked>All brands</option>
                    <option value="BMW">BMW</option>
                    <option value="BMW">BMW</option>
                </select>
            </nav>
        </header>
    </>
};

export default Header;