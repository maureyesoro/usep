import { useFormik } from "formik";
import { FC } from "react";
import {useDispatch, useSelector} from "react-redux";
import images from "../../assets";
import { User } from "../../models/user/types";
import { loginRequested, signinRequested } from "../../redux/user/actions";
import { useShowError } from "../../utils/ui/stringError";
import { initialValues, onSubmit, validationSchema } from "./form";
import "./styles.css";
import Input from "../../components/input/component";
import {userTokenSelector} from "../../redux/user/selectors";
import { Navigate } from 'react-router-dom';

const Login: FC = () => {
  const { University } = images;

  const tokenUser = useSelector(userTokenSelector);

  const dispatch = useDispatch();

  const passUser = (user: Partial<User>) => {
    dispatch(loginRequested(user));
    console.log(user.password);
  };

  const signUser = (user: Partial<User>) => {
    dispatch(signinRequested(user));
  };


  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values, passUser, signUser),
    validationSchema,
  });

  const errors = useShowError(formik.touched, formik.errors);

  return (
    <div className="login-container">
      <div className="login-form">
        <University className="title-image" />
        {/* <label>
          Are you new around here?
          <input
            type="checkbox"
            name="register"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.register}
          />
        </label> */}
        <Input
          name="username"
          className="login-inputs"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          ErrorComponent={errors("username")}
        />
        <Input
          name="email"
          className="login-inputs"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          ErrorComponent={errors("email")}
        />
        <Input
          name="password"
          className="login-inputs"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          ErrorComponent={errors("password")}
        />
        <button
          type="button"
          className="button-black"
          onClick={() => formik.handleSubmit()}
        >
        Enter
          {tokenUser ? <Navigate to="/" /> : null}
        </button>
      </div>
    </div>
  );
};

export default Login;
