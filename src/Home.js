import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://m.media-amazon.com/images/I/51yE2y7E9rL._SX3000_.jpg"
        src="https://m.media-amazon.com/images/I/61cFXNW6CeL._SX3000_.jpg"

      ></img>

      
        <div className="home__row">
          <Product
            id="1234"
            title="Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage) Without Offers"
            price={35000}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41bfYmgS8nL._AC_SR400,600_.jpg"
          ></Product>
          <Product
            id="123456"
            title="Apple Watch SE (GPS, 40mm) - Gold Aluminium Case with Starlight Sport Band - Regular"
            price={29000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY218_.jpg"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="1222333"
            title="BOAT Airdopes 141 - Active Black Bluetooth Earphone"
            price={1500}
            rating={5}
            image="	https://m.media-amazon.com/images/I/51vaECf7H2L._AC_UY218_.jpg"
          ></Product>
          <Product
            id="1333444"
            title="Sparx Men's Running Shoes"
            price={1134}
            rating={4}
            image="https://m.media-amazon.com/images/I/81NfRt2RF3L._AC_UL320_.jpg"
          ></Product>
          <Product
            id="1444555"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={2900}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="1555666"
            title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
            price={239900}
            rating={5}
            image="	https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY218_.jpg"
          ></Product>
        </div>
      </div>
    
  );
}

export default Home;
