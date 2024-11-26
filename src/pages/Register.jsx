import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/register", data);
      toast.success("Dang ky thanh cong");
      // chuyen sang login
      nav("/login");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <small className="text-danger">{errors.email?.message}</small>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 Characters required",
              },
            })}
          />
          <small className="text-danger">{errors.password?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
