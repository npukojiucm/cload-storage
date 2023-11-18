import { Button, Form } from "react-bootstrap";
import SignUpFormElement from "./SignUp.props";
import moment from "moment-with-locales-es6";
import { useDispatch } from "react-redux";
import { setEmailOrLogin } from "../../redux/slices/fieldsCheckInDBSlice";
import { useEffect } from "react";

export default function SignupPage() {
  const dispatch = useDispatch();

  useEffect(()=>{},)

  const submitHandler = (e: React.FormEvent<SignUpFormElement>): void => {
    e.preventDefault();

    const fetchCreateUser = async (data: string) => {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          body: data,
        });

        if (response.status === 201) {
          console.log("ok");
        }
      } catch (e) {
        console.log(e);
      }
    };

    const userInformation = {
      name: e.currentTarget.elements.formName.value,
      lastName: e.currentTarget.elements.formLastName.value,
      login: e.currentTarget.elements.formName.value,
      email: e.currentTarget.elements.formName.value,
      password: e.currentTarget.elements.formName.value,
      createdAt: moment(Date.now()).format("YYYY-MM-DD"),
    };

    // console.log(userInformation);
    fetchCreateUser(JSON.stringify(userInformation));
  };

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'login' | 'email'
  ): void => {
    const value = e.currentTarget.value;

    if (field === "login") {
      
    }

    dispatch(
      setEmailOrLogin({
        value,
        field,
      })
    );
  };

  return (
    <Form
      id="signup-form"
      className="ms-auto me-auto mt-5 p-3 border rounded-4"
      style={{ width: 500 }}
      onSubmit={submitHandler}
    >
      <Form.Group className="m-3" controlId="formName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="John" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Doe" />
      </Form.Group>

      <Form.Group className="m-3 mb-0" controlId="formLogin">
        <Form.Label className="">Login</Form.Label>
        <Form.Control
          type="text"
          placeholder="john.doe"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputHandler(e, "login")
          }
        />
      </Form.Group>

      <Form.Group className="m-3 mb-0" controlId="formEmail">
        <Form.Label className="">Email</Form.Label>
        <Form.Control type="email" placeholder="john.jivanovich@example.com" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formRepeatPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group
        className="d-flex justify-content-end"
        controlId="formBtnSubmit"
      >
        <Button variant="primary" type="submit" className="w-25 m-3">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
