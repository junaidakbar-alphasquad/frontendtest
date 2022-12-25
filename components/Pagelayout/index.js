import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const index = ({children}) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="ml-[200px] mt-10">
        {children}
      </main>
    </>
  );
};

export default index;
