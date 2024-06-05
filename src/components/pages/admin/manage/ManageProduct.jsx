import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../context/api/productApi";
import "./manageProduct.scss";
import { toast } from "react-toastify";

function ManageProduct() {
  const [deleteProduct, { data: deleteData, error: deleteEror, isSuccess }] =
    useDeleteProductMutation();

  const { data } = useGetProductsQuery();
  const manageData = data?.map((el) => (
    <div className="manage__card">
      <div className="manage__card__img">
        <img src={el?.url} alt="" />
      </div>
      <div className="manage__card__info">
        <h3 className="manage__card__title">title: {el?.title}</h3>
        <p className="manage__card__text">price: {el?.price}</p>
      </div>
      <div className="manage__btns">
        <button onClick={() => deleteProduct(el.id)}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  ));
  return (
    <div className="manage">
      <div className="manage__cards">{manageData}</div>;
    </div>
  );
}

export default ManageProduct;
