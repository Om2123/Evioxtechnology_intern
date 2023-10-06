import React, { Fragment, useEffect } from "react";
import { Formik, Form, Field, useField } from "formik";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, CssBaseline, FormGroup } from "@material-ui/core";

import { useSnackbar } from "notistack";

import * as Yup from "yup";
import { CreateUser } from "../../appwrite/appwrite";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  loginForm: {
    height: "90vh",
    width: "20rem",
    background: "#f1f1f1",
    padding: "0 2rem",
    borderRadius: "1rem",
    position: "relative",
    alignContent: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  formItem: {
    width: "100%",
    marginBottom: "1px",
    position: "relative",
    height: "3rem",
    margin: "0.1px 0",
    overflow: "hidden",

    "& input": {
      width: "100%",
      height: "100%",
      color: "#333",
      outline: "none",
      border: "none",
      background: "none",
      padding: "2rem 0",

      "&:focus+label span, &:valid+label span": {
        transform: "translateY(-90%)",
        color: "#adadad",
        fontSize: "0.9rem",
      },

      "&:focus+label::after, &:valid+label::after": {
        transform: "translateX(0)",
      },
    },

    "& label": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      borderBottom: "1px solid #adadad",

      "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-0.15rem",
        width: "100%",
        height: "100%",
        borderBottom: "3px solid #2980b9",
        borderImage: "linear-gradient(120deg, #2980b9, #8e44ad) 1 round",
        transform: "translateX(-100%)",
        transition: "transform 0.6s ease",
      },

      "& span": {
        position: "absolute",
        bottom: "0.3rem",
        left: 0,
        color: "#adadad",
        transition: "all 0.3s ease",
      },
    },
  },

  logbtn: {
    marginTop: ".7rem",
    display: "block",
    width: "100%",
    height: "3rem",
    border: "none",
    borderRadius: "3px",
    background: "linear-gradient(120deg, #2980b9, #8e44ad, #2980b9)",
    backgroundSize: "200%",
    color: "#fff",
    outline: "none",
    transition: "0.5s",
    cursor: "pointer",

    "&:hover": {
      backgroundPosition: "right",
    },
  },

  bottomText: {
    marginTop: ".4rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },

  link: {
    textDecoration: "none",
  },
}));

const CustomInput = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (meta.touched && meta.error) {
      enqueueSnackbar(meta.error, {
        preventDuplicate: true,
        variant: "info",
      });
    }
  }, [meta, enqueueSnackbar]);

  return (
    <Fragment>
      <Box className={classes.formItem}>
        <Typography component={Field} required {...field} {...props} />
        <Typography component="label" htmlFor={props.id || props.name}>
          <span>{label}</span>
        </Typography>
      </Box>
    </Fragment>
  );
};

export const Auth = (props) => {
  const classes = useStyles();
  const { error, success } = props;
  const { onMessageReset, match } = props;
  const history = useHistory();
  const isSignUp = match && match.url === "/sign-up";

  const { enqueueSnackbar } = useSnackbar();

  let initialValues = { username: "", password: "" };
  let validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be 15 characters or less")
      .required("Must enter a name"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });

  initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    group: "GP08",
    email: "",
  };
  validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must be 15 characters or less")
      .required("Must enter a username"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be 15 characters or less")
      .required("Must enter a name"),
    group: Yup.string().required("Group is required"),
    phone: Yup.number()
      .min(10, "Phone number must be at least 10 characters")
      .required("Must enter a phone number"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Must enter an email"),
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    } else if (success) {
      enqueueSnackbar(success, { variant: "success" });
    }
    // onMessageReset();
  }, [error, success, enqueueSnackbar, onMessageReset]);

  const onSubmit = async (values, { setSubmitting }) => {
    await CreateUser(values.email, values.password)
    history.push("/")
    setSubmitting(false);
  };

  return (
    <Box className={classes.body}>
      <Box className={classes.container}>
        <CssBaseline />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form className={classes.loginForm}>
              <Box mt={1.5} mb={1}>
                <Typography variant="h3" align="center">
                  Sign Up
                </Typography>
              </Box>
              <FormGroup>
                <CustomInput label="Username" name="username" type="text" />
                <CustomInput label="Password" name="password" type="password" />
              </FormGroup>

              <FormGroup>
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <CustomInput label="Name" name="name" type="text" />
                <CustomInput label="Phone" name="phone" type="text" />
                <CustomInput label="Email" name="email" type="email" />
              </FormGroup>

              <Typography
                component="button"
                type="submit"
                className={classes.logbtn}
              >
                {props.isSubmitting
                  ? "Loading..."
                  : isSignUp
                  ? "Sign Up"
                  : "Login"}
              </Typography>

              <Box mt={5} mb={5} className={classes.bottomText}>
                <Typography component="p">
                  Already have an account?
                  <Link to="/sign-in" className={classes.link}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Auth;
