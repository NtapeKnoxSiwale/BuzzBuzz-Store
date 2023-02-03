import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider";
import MetaData from "../../more/MetaData";
import ProductCard from "../Products/ProductCard";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      <MetaData title="Home" />
      <Header />
      <div className="home app__container">
        <Slider />

        <h2 className="home__heading">Featured Products</h2>
        <div className="featured__container" id="featured__container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
