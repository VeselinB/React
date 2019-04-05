import React from 'react';
import RegisterService from '../components/services/registerService'

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            repeatedPassword: "",
            placeholderPasword: "Enter your password...",
            placeholderEmail: "Enter your email...",
            style: "",
            message: null,
        };
    }
    getEmaiRef = (email) => {
        this.email = email
    }
    getNameRef = (name) => {
        this.name = name
    }

    getPasswordRef = (password) => {
        this.password = password
    }

    getRepeatedPassword = (repeatedPassword) => {
        this.repeatedPassword = repeatedPassword
    }

    checkPassword = (first, second) => {
        if (first === second) {
            return true
        }

        return false
    }

    handleChangeEmail = (event) => {

        this.setState({ email: event.target.value });
    }

    handleChangePassword = (event) => {

        this.setState({ password: event.target.value });
    }

    handleChangePasswordRepeat = (event) => {

        this.setState({ repeatedPassword: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { value: email } = this.email;
        const { value: password } = this.password;
        const { value: name } = this.name;
        const { value: repeatedPassword } = this.repeatedPassword;

        const payload = { email, password, name };

        if (this.checkPassword(repeatedPassword, password)) {
            // console.log(JSON.stringify(payload));
            const register = new RegisterService();
            register.register(payload)
                .then((result) => {
                    console.log(result);
                    if (result.message === "User created!") {

                        this.props.history.push("/");
                    } else {

                        this.message = result.message;
                        // this.setState((state, props) => ({
                        //     message: result.message
                        // }))
                    }
                })
                .catch((err) => {
                    console.log(err)
                    this.error = err;
                    this.setState(() => {
                        return {

                            error: err.toString(),
                            placeholderEmail: "This Email is already exist!"

                        }
                    })
                    // console.log(err)

                })

        } else {
            console.log("tttt")
            this.setState(() => {
                return {


                    error: "",
                    repeatedPassword: "",
                    placeholderPasword: "These password are not equlals, pleace try again....",
                    laceholderStyle: { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        "color": "",
                        "opacity": 1
                    },

                }
            })

        }

        //service for upload items




    }

    render() {
        const { placeholderPasword, placeholderEmail, email, password, repeatedPassword } = this.state;


        if (placeholderEmail === "This Email is already exist!!!") {
            this.placeholderStyle = { /* Chrome, Firefox, Opera, Safari 10.1+ */
                "border-color": "red",
                "opacity": 1,

            }
        }

        if (placeholderPasword === "These password are not equlals, pleace try again...") {
            this.placeholderStyle1 = { /* Chrome, Firefox, Opera, Safari 10.1+ */
                "border-color": "red",
                "opacity": 1,

            }
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="text" ref={this.getNameRef} placeholder="Enter your name..." />
                    <label htmlFor="femail">Email</label>
                    <input style={this.placeholderStyle} value={email} type="email" id="email" ref={this.getEmaiRef} onChange={this.handleChangeEmail} placeholder={placeholderEmail} />
                    <label htmlFor="lname">Password</label>
                    <input style={this.placeholderStyle1} value={password} type="password" id="password" ref={this.getPasswordRef} onChange={this.handleChangePassword} placeholder={placeholderPasword} />
                    <label htmlFor="lname">Repeat password</label>
                    <input value={repeatedPassword} type="password" id="repeatedPassword" ref={this.getRepeatedPassword} onChange={this.handleChangePasswordRepeat} placeholder="Repeat your password..." />
                    <button>Register</button>
                </form>
            </div>

        )
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevState.placeholderPasword !== this.state.placeholderPasword) {
            this.setState(() => {
                return {

                    password: "",
                    error: "",
                    repeatedPassword: "",

                    placeholderPasword: "These password are not equlals, pleace try again...",

                }
            })

        }
        if (prevState.placeholderEmail !== this.state.placeholderEmail) {
            console.log(prevState.placeholderEmail)
            this.setState(() => {
                return {

                    email: "",

                    error: "",

                    placeholderEmail: "This Email is already exist!!!",


                }
            })

        }
    }
}

export default MyForm;
