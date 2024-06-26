import React, { useEffect, useState } from "react";
import { usePostProductMutation } from "../../../../context/api/productApi";
import "./createProduct.scss";
import { useNavigate } from "react-router-dom";

let initialState = {
  url: "",
  title: "",
  price: "",
  category: "",
};

function CreateProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [createProduct, { data, isLoading, isSuccess }] =
    usePostProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(form);
    navigate("/admin/manage");
  };

  useEffect(() => {
    if (isSuccess) {
      setForm(initialState);
    }
  }, [isSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form" action="">
        <input
          required
          value={form.url}
          onChange={(e) => setForm((p) => ({ ...p, url: e.target.value }))}
          placeholder="url"
          type="text"
        />
        <input
          required
          value={form.title}
          onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          placeholder="title"
          type="text"
        />
        <input
          required
          value={form.price}
          onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
          placeholder="price"
          type="number"
        />
        <input
          required
          value={form.category}
          onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
          placeholder="category"
          type="text"
        />
        <button disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
