import React from 'react'
import "slick-carousel/slick/slick.css";
import banner from '../assets/banner2.jpg';


function Card(props) {
  const item = props.props;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
  <figure>
    <img
    className='max-w-full h-auto object-cover'
      src={banner}
        alt="image"/ >
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline ">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white py-2 px-3">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
