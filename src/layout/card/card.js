import React from "react";
import Data from "./data";
import './style.css'
import { CiShoppingCart } from "react-icons/ci";

const Card = () => {
    const [data, setData] = (Data)
    console.log(data)
    return (
        <div>
            <div>Baby</div>
            <div className="d-flex">

                {
                    Data.map((v, i) => {
                        return <div className="card-boder">

                            <img src={v.image} />
                            <div className="d-flex">

                                <div>
                                    <h4>{v.title}</h4>
                                    <h6>{v.price}</h6>
                                </div>
                                <div>
                                    <button><CiShoppingCart /></button>
                                </div>
                            </div>


                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Card