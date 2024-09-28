"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const userURL = "http://localhost:8080/user";
const productURL = "http://localhost:8080/product";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [userStatus, setUserStatus] = useState(false);
  const [productStatus, setProductStatus] = useState(false);

  useEffect(() => {
    if (userStatus) {
      axios.get(userURL).then((response) => {
        setUsers(response.data);
        setUserStatus(false);
      });
    }
  }, [userStatus]);

  useEffect(() => {
    if (productStatus) {
      axios.get(productURL).then((response) => {
        setProducts(response.data);
        setProductStatus(false);
      });
    }
  }, [productStatus]);

  const onUser = () => setUserStatus(true);
  const onProduct = () => setProductStatus(true);

  return (
    <div className="container mx-auto">
      <header className="p-5">
        <h2>
          <strong> PAGE TITLE</strong>
        </h2>
        <nav className="py-2 my-2">
          <ul className="flex flex-row gap-6">
            <li className="rounded-xl bg-white text-black px-5 py-2">Home</li>
            <li className="rounded-xl bg-white text-black px-5 py-2">Users</li>
            <li className="rounded-xl bg-white text-black px-5 py-2">
              Services
            </li>
            <li className="rounded-xl bg-white text-black px-5 py-2">
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex w-full">
        <div className="w-1/2 p-4 bg-blue-100 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">USERS DATA</h2>
          <button
            onClick={onUser}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            GET USERS
          </button>
          <div>
            {users &&
              users.length > 0 &&
              users.map((user: any) => (
                <div
                  key={user.id}
                  className="bg-white border-slate-400 rounded-lg	border-2 m-2 p-2"
                >
                  <strong>NAME: </strong> {user.name} {user.lastname} <br />
                  <strong>EMAIL: </strong> {user.email} <br />
                  <strong>AGE: </strong> {user.age}
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/2 p-4 bg-green-100 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">PRODUCTS DATA</h2>
          <button
            onClick={onProduct}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            GET PRODUCTS
          </button>
          <div>
            {products &&
              products.length > 0 &&
              products.map((product: any) => (
                <div
                  key={product.id}
                  className="bg-white border-slate-400 rounded-lg	border-2 m-2 p-2"
                >
                  <strong>PRODUCT: </strong> {product.product} <br />
                  <strong>CATEGORY: </strong> {product.category} <br />
                  <strong>PRICE: </strong> {product.price} <br />
                  <strong>STOCK: </strong> {product.stock}
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
