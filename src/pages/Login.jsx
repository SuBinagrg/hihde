import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { Authcontext } from "../context/Authcontext";

const Login = () => {
  const {login} = useContext(Authcontext)
 
  const postFormData = async (values) => {
    try {
      const response = await axios.post("https://blog-hqx2.onrender.com/user/login", values);
    
      
      const token = response.data.token
      const user = response.data.user
      toast.success("Login Successfull");
    } catch (error) {
      toast.error("Login Unsuccessfull");
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Email name is required"),
        password: Yup.string().min(6, "Atleast 6 charcters").required("password is required"),
          
      })}
      onSubmit={(values) => {
        postFormData(values);
      }}
    >
      <Form className="flex flex-col gap-y-5 w-96 mt-25  mx-auto border-black p-6 rounded-2xl shadow-lg shadow-pink-800/90">
      <h1 className="text-center text-3xl">Welcome Back!</h1>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          placeholder="Enter your Email"
          className="border-black w-full border rounded-md px-2 py-2"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-600 text-sm"
        />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          placeholder="Enter the password"
          className="border-black w-full border rounded-md px-2 py-2"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-600 text-sm"
        />
        <ToastContainer />
        <button
          type="submit"
          className="bg-blue-500 text-white  rounded-md px-2 py-1  w-full mx-auto  h-12  hover:bg-red-600"
        >
          Log in
        </button>
        
        <div className='flex text-sm  px-8'>
          <p >Don't have an account yet?</p>
          <button type="submit" className='text-blue-500  font-bold cursor-pointer'>Sign up here</button>
          </div>
      </Form>
    </Formik>
  );
};

export default Login;