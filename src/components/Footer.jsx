import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const handleDecrement = ()=>{
        if(count <= 1){
            navigate("/")
            return;
        }
        else{
            setCount(count-1);
        }
        console.log(count);
    }
    const handleIncrement = ()=>{
        if(count > 8){
            return;
        }
        else{
            setCount(count+1);
        }
        console.log(count);
    }
    return <>
        <footer id="footer">
            <div className="left">
                <h3>{count} from 10</h3>
            </div>
            <div className="right">
                <button onClick={()=>navigate(`/page${count}`) || handleDecrement()}><BsArrowLeft/></button>
                <span onClick={()=>navigate(`/`) || setCount(1)}>1</span>
                <span onClick={()=> setCount(2) || navigate(`/page2`)} >2</span>
                <span onClick={()=> setCount(3) || navigate(`/page3`)} >3</span>
                <span onClick={()=> setCount(4) || navigate(`/page4`)} >4</span>
                <span onClick={()=> setCount(5) || navigate(`/page5`)} >5</span>
                <span onClick={()=> setCount(6) || navigate(`/page6`)} >6</span>
                <span onClick={()=> setCount(7) || navigate(`/page7`)} >7</span>
                <span onClick={()=> setCount(8) || navigate(`/page8`)} >8</span>
                <span onClick={()=> setCount(9) || navigate(`/page9`)} >9</span>
                <span onClick={()=> setCount(10) || navigate(`/page10`)} >10</span>
                <button onClick={()=>navigate(`/page${count+1}`) || handleIncrement()}><BsArrowRight/></button>
            </div>
        </footer>
    </>
};

export default Footer;