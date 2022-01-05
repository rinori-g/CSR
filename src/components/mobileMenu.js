import react, {useState} from "react";
import { Link } from "react-router-dom";
import MenuItems from "../data/menu";

const MobileMenu = () => {

    const [isOpen, setOpen] = useState(false);
    const qyshekomstatin = () => {
        if (isOpen == true){
            console.log('u qela', isOpen)
        } else if (isOpen == false) {
            console.log('u mshela', isOpen)
        }
    }
    const handleClick = () => {
        setOpen(!isOpen);
    }
    console.log(isOpen);

    return(
        <>
        <div className='mobileMenu'>
            <div className="row">
                <div className='col-10'></div>
                <div className='col-2'><button onClick={handleClick}><i className='fa fa-bars'></i></button></div>
            </div>

        </div>
        {!!isOpen &&
        <div className='mobileMenuContent'>
            <ul>
            {MenuItems.map((el)=> {
                return  <li><Link to={el.url} onClick={handleClick}><i className={el.icon}>{el.title}</i></Link></li>
            })}
            </ul>
        </div>
        }
        </>
    )

}

export default MobileMenu