import cars from '../cars/cars';
import { GoPeople } from 'react-icons/go';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { BiGasPump } from 'react-icons/bi';
import { IoMdSpeedometer } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSearch } from '../context/Search';

const CarsContainer = ()=>{
    const [values] = useSearch();
    return <>
    <div className="cars_container">
            {
                cars.filter((car)=>car.name.toLocaleLowerCase().includes(values.keyword)).map((car) => {
                    return <div className="card">

                        <img src={car.img} alt={car.name} />

                        <div className="card_header">
                            <h2>{car.name}</h2>
                            <p>{car.model}</p>
                        </div>

                        <div className="car_details">
                            <span>
                                <GoPeople className='car_details_icon' />
                                <p>4 People</p>
                            </span>
                            <span>
                                <BiGasPump className='car_details_icon' />
                                <p>Gasoline</p>
                            </span>
                            <span>
                                <IoMdSpeedometer className='car_details_icon' />
                                <p>6.1 km / 1-litre</p>
                            </span>
                            <span>
                                <PiSteeringWheelFill className='car_details_icon' />
                                <p>Automatic</p>
                            </span>
                        </div>

                        <hr />
                        <div className="card_footer">
                            <h2>{car.price} / <span>month</span></h2>
                            <div className="buttons">
                                <button className='heartBtn'><AiOutlineHeart className='heart_icon' /></button>
                                <button className='rentBtn'>Rent Now</button>
                            </div>
                        </div>


                    </div>
                })
            }
        </div>
    </>
};


export default CarsContainer;