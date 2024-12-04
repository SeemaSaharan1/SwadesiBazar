import React, { useContext, useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import { fireDB } from "../../../firebase/FirebaseConfig";
import DashboardTab from "./DashboardTab";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch count of products
        const productsCollection = collection(fireDB, "products");
        const productsSnapshot = await getDocs(productsCollection);
        setProductsCount(productsSnapshot.size);

        // Fetch count of orders
        const ordersCollection = collection(fireDB, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        setOrdersCount(ordersSnapshot.size);

        // Fetch count of users
        const usersCollection = collection(fireDB, "users");
        const usersSnapshot = await getDocs(usersCollection);
        setUsersCount(usersSnapshot.size);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container mx-auto px-5 mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="p-4 w-full max-w-[250px]">
              <div
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl flex flex-col items-center justify-center"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 flex items-center justify-center"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1 text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {productsCount}
                </h2>
                <p
                  className="text-purple-500 font-bold text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="p-4 w-full max-w-[250px]">
              <div
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl flex flex-col items-center justify-center"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 flex items-center justify-center"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1 text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {ordersCount}
                </h2>
                <p
                  className="text-purple-500 font-bold text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 w-full max-w-[250px]">
              <div
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl flex flex-col items-center justify-center"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 flex items-center justify-center"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1 text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {usersCount}
                </h2>
                <p
                  className="text-purple-500 font-bold text-center"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
