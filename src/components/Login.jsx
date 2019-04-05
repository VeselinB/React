import React from 'react';
import LoginService from '../components/services/loginService'



class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            message: null,
        };
    }

    getEmaiRef = (email) => {
        this.email = email
    }

    getPasswordRef = (password) => {
        this.password = password
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { value: email } = this.email;
        const { value: password } = this.password;

        const payload = { email, password };

        //service for upload items
        const login = new LoginService();
        login.login(payload)
            .then((result) => {
                if (result.userName !== undefined) {
                    localStorage.setItem("userName", result.userName);
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("roles", result.roles.toString())
                    localStorage.setItem("isLoggedIn", "true")
                    localStorage.setItem("id", result.userId)
                    this.props.history.push("/");
                } else {
                    console.log(result.message);
                    this.message = result.message;
                    // this.setState((state, props) => ({
                    //     message: result.message
                    // }))
                }
            })
            .catch((err) => {
                this.error = err;
                this.setState(() => {
                    return {

                        error: err.toString()


                    }
                })
                console.log(err)

            })

        this.forceUpdate();



    }

    render() {
        const { error } = this.state;
        const { message } = this.state;
        if (error !== "") {
            return <section className="camps">
                <h2>{error}</h2>
            </section>
        }
        let ShowError = () => { return null }
        if (message === null) {
            ShowError = () => { return <div>{message}</div> }

        }
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <ShowError />
                    <label htmlFor="fname">Email</label>
                    <input type="email" id="email" ref={this.getEmaiRef} placeholder="Enter your email..." />
                    <label htmlFor="lname">Password</label>
                    <input type="password" id="password" ref={this.getPasswordRef} placeholder="Enter your password..." />
                    <button>Login</button>
                </form>
            </div>
            // <form onSubmit={this.handleSubmit}>
            //     Email: <input type="email" id="email" ref={this.getEmaiRef} />
            //     Password: <input type="password" id="password" ref={this.getPasswordRef} />
            //     <button>Button</button>
            // </form>
        )
    }
    componentDidMount() {

    }
}

export default MyForm;
