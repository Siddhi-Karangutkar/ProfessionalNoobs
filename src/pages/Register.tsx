
import React from "react";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/auth/RegisterForm";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 bg-gray-50">
        <div className="container max-w-md">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
