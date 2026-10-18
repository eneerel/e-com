// src/pages/Home/Home.jsx
import Categories from "../../components/home/Categories/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import PromoBanner from "../../components/home/PromoBanner/PromoBanner";

export default function Home() {
  return (


      <main>
     
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
      </main>


  );
}