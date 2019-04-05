import React from 'react';
import CreateCampService from './services/createNewCampService';



class AddCamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            picture: "",
            price: "",
            error: "",
            message: null,
        };
    }

    getTitleRef = (title) => {
        this.title = title
    }

    getContentRef = (content) => {
        this.content = content
    }

    getPictureRef = (picture) => {
        this.picture = picture
    }

    getPriceRef = (price) => {
        this.price = price
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { value: title } = this.title;
        const { value: content } = this.content;
        const { value: picture } = this.picture;
        const { value: price } = this.price;

        const payload = { title, content, imageUrl: picture, price };
        console.log(payload)
        const create = new CreateCampService();
        create.CreateCampSevice(payload)
            .then((result) => {
                this.props.history.push('/camps')
                console.log(result)
            })
            .catch((err) => {
                this.error = err;
                console.log(err)
            })



        //service for upload items






    }

    render() {
        const { message } = this.state;
        let ShowError = () => { return null }
        if (message === null) {
            ShowError = () => { return <div>{message}</div> }

        }
        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <p>Please fill the form to add a new camp.</p>
                    <ShowError />
                    <label htmlFor="fname">Title</label>
                    <input type="text" id="title" ref={this.getTitleRef} placeholder="Enter title..." />
                    <label htmlFor="lname">Content</label>
                    <input type="text" id="content" ref={this.getContentRef} placeholder="Enter content..." />
                    <label htmlFor="lname">Picture</label>
                    <input type="text" id="picture" ref={this.getPictureRef} placeholder="Enter picture url..." />
                    <label htmlFor="lname">Price</label>
                    <input type="text" id="price" ref={this.getPriceRef} placeholder="Enter price..." />
                    <button>Confirm</button>
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

export default AddCamp;
