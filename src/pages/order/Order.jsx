import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {loading && <Loader />}
      <div
        className="bg-gray-100 pt-5"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Past Orders</h1>
      </div>
      <div className="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
        {order.length > 0 ? (
          <div className="flex flex-wrap w-full">
            {order
              .filter((obj) => obj.userid === userid)
              .map((order, index) =>
                order.cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/3 p-2"
                    style={{ maxWidth: "calc(100% / 3)" }}
                  >
                    <div
                      className="rounded-lg border drop-shadow-xl bg-white p-6"
                      style={{
                        backgroundColor: mode === "dark" ? "#282c34" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt="product-image"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        style={{ minHeight: "12rem" }}
                      />
                      <div>
                        <h2
                          className="text-lg font-bold mb-1"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {item.title}
                        </h2>
                        <p
                          className="text-sm text-gray-700 mb-1"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {item.description}
                        </p>
                        <p
                          className="text-sm text-gray-700"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ₹ {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        ) : (
          <h2 className="text-center text-2xl text-white mt-8">
            No Orders Found
          </h2>
        )}
      </div>
    </Layout>
  );
}

export default Order;
