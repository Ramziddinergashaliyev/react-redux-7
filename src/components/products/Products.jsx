import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useDeleteProductMutation } from "../../context/api/productApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/apiSlice/wishlistSlice";
import { NavLink } from "react-router-dom";

function Products() {
  const { data } = useGetProductsQuery();
  const wishlistData = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  const [deleteProduct, { data: deleteData, error: deleteEror }] =
    useDeleteProductMutation();

  const productData = data?.map((el) => (
    <div key={el.id} className="products__card">
      <NavLink to={`/product/${el.id}`}>
        <div className="products__card__img">
          <img src={el?.url} alt="" />
        </div>
      </NavLink>
      <div className="products__card__info">
        <h3 className="products__card__title">title: {el?.title}</h3>
        <p className="products__card__text">price: {el?.price}</p>
      </div>
      <div className="products__btns">
        <button className="products__like" onClick={() => dispatch(like(el))}>
          {wishlistData.some((data) => data.id === el.id) ? (
            <FaHeart color="red" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => deleteProduct(el.id)}>Add to card</button>
      </div>
    </div>
  ));

  return (
    <div className="products container">
      <h1 className="products__title">Cards</h1>
      <div className="products__cards">{productData}</div>
    </div>
  );
}

export default Products;
