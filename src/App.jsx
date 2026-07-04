import { useEffect, useState } from "react";
import "./App.css";
import AvatarComponent from "./components/AvatarComponent";
import CounterComponent from "./components/CounterComponent";
import FooterComponent from "./components/FooterComponent";
import IncrementAgeComponent from "./components/IncrementAgeComponent";
import NavbarComponent from "./components/NavbarComponent";
import ProductComponent from "./components/ProductComponent";

function App() {

  const [product , setProduct] = useState([])

  useEffect(() => {

    async function fetchProductData() {

      const response = await fetch ('https://api.escuelajs.co/api/v1/products')
      const productData = await response.json();
      setProduct(productData);
      
    }
    fetchProductData();
    
  }, [])


  return (
    

    <section >

      <NavbarComponent />
      <section className="  flex flex-1 flex-wrap justify-center items-center gap-10 p-6  ">
        <AvatarComponent
  

      image = "https://i.pinimg.com/736x/76/1a/e1/761ae13bbc5a70a569fef997f9878ad6.jpg"
      name = "Thirak Rak"
      age = "19"
      position = "Board of Chaiman"
      img = "https://i.pinimg.com/736x/4b/53/0b/4b530b6e861e32811d787a6ff6e00c66.jpg"
      car = "Porsche GT3RS"
      
      />

      <AvatarComponent
  

      image = "https://i.pinimg.com/736x/76/1a/e1/761ae13bbc5a70a569fef997f9878ad6.jpg"
      name = "Oun Chheng"
      age = "19"
      position = "Board of Chaiman"
      img = "https://i.pinimg.com/736x/4b/53/0b/4b530b6e861e32811d787a6ff6e00c66.jpg"
      car = "Porsche GT3RS"
      
      />

      <AvatarComponent
  

      image = "https://i.pinimg.com/736x/76/1a/e1/761ae13bbc5a70a569fef997f9878ad6.jpg"
      name = "Thirak Rak"
      age = "19"
      position = "Board of Chaiman"
      img = "https://i.pinimg.com/736x/4b/53/0b/4b530b6e861e32811d787a6ff6e00c66.jpg"
      car = "Porsche GT3RS"
      
      />

      <AvatarComponent
  

      image = "https://i.pinimg.com/736x/76/1a/e1/761ae13bbc5a70a569fef997f9878ad6.jpg"
      name = "Thirak Rak"
      age = "19"
      position = "Board of Chaiman"
      img = "https://i.pinimg.com/736x/4b/53/0b/4b530b6e861e32811d787a6ff6e00c66.jpg"
      car = "Porsche GT3RS"
      
      />
      </section>
      <FooterComponent />

      <CounterComponent/>



      <div className="m-10"><IncrementAgeComponent/></div>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

          {
        product.map((product) => (
          <ProductComponent
          
          title = {product?.title}
          image = {product?.images[0]}
          price = {product?.price}

          />
        ))
      }

      </section>

    </section>
    
  );
}

export default App;
