import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import { useSingleProductQuery } from "../../../context/api/productApi";
import "./single.scss";

function Single() {
  let { id } = useParams();
  const { data, isloading, error } = useSingleProductQuery(id);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="single container">
        <div className="single__card">
          <div className="single__card__img">
            <img src={data.url} alt="" />
          </div>
          <div className="single__card__info">
            <h2>title: {data.title}</h2>
            <p>category :{data.category}</p>
            <p>price :{data.price}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              corrupti blanditiis magni obcaecati, nesciunt reprehenderit fuga
              dolore tempora totam nulla illo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
