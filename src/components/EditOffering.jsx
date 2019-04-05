import React from 'react';
import UpdateCampSevice from '../components/services/putCampService';
import getOffering from '../components/services/getOfferingService';
import upfateOfferingService from '../components/services/putOfferingSevice'



class EditOffering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            picture: "",
            error: "",
            message: null,
        };
    }
    static service = new getOffering();
    handleChange = (event) => {
        console.log(event.target.id)
        this.setState({ [event.target.id]: event.target.value });
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


        const payload = { title, content, imageUrl: picture };
        console.log(payload)
        const create = new upfateOfferingService();
        create.UpdateCampSevice(this.props.match.params.id, payload)
            .then((result) => {
                this.props.history.push('/offering/offerings')
                console.log(result)
            })
            .catch((err) => {
                this.error = err;
                console.log(err)
            })



        //service for upload items






    }

    render() {
        const { message, title, content, picture } = this.state;
        let ShowError = () => { return null }
        if (message === null) {
            ShowError = () => { return <div>{message}</div> }

        }
        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <p>Edit offering.</p>
                    <ShowError />
                    <label htmlFor="fname">Title</label>
                    <input value={title} type="text" id="title" ref={this.getTitleRef} onChange={this.handleChange} />
                    <label htmlFor="lname">Content</label>
                    <input value={content} type="text" id="content" ref={this.getContentRef} onChange={this.handleChange} />
                    <label htmlFor="lname">Picture</label>
                    <input value={picture} type="text" id="picture" ref={this.getPictureRef} onChange={this.handleChange} />

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
    async  componentDidMount() {
        try {
            const res = await EditOffering.service.getOffering(this.props.match.params.id);

            console.log(res);
            if (res !== 0) {
                this.setState(() => {
                    return {
                        title: res.post.title,
                        content: res.post.content,
                        picture: res.post.imageUrl,

                        isEmpty: false,


                    }
                })
            }

        } catch (err) {

            console.log(err);
        }

    }
}


export default EditOffering;
