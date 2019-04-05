import React from 'react';
import { Link } from 'react-router-dom'
import getCampsService from '../services/getOfferingsServise'




class Offerings extends React.Component {
    state = {
        camps: [],
        isEmpty: true,
        error: "",
    }
    static service = new getCampsService();


    bookDetails = (event) => {

        const CampId = event.target.getAttribute('id');
        this.props.history.push(`/books/${CampId}`);
        console.log(this.props.history)


    }



    render() {
        const { posts } = this.state;
        const { isEmpty } = this.state;
        const { error } = this.state;

        let Button = (props) => {
            return null
        }
        if (localStorage.getItem('roles') !== null) {
            if (localStorage.getItem('roles').includes("Admin")) {


                Button = (props) => {
                    return (
                        <div>
                            <Link to={`/editOffering/${props.id}`}> <button>Edit</button></Link>

                        </div>
                    )



                }


            }
        }


        // //editing if you are admin
        // if (isEmpty) {
        //     Buttons = () => {
        //         return (<div><button>Edit</button> <button>Remove</button></div>)
        //     };

        // AddButton=()=>{
        //     return   <button>Add Contribution</button>
        // }

        // }
        if (error !== "") {
            return <section className="camps">
                <h2>{error}</h2>
            </section>
        }

        if (isEmpty) {
            return null;
            //
        } else {
            return (

                <section class="offerts">
                    <h2> Our offerings </h2>
                    <ul>
                        {posts.map(({ imageUrl, title, content, _id }) => (
                            <li key={_id}><Link to={_id}>

                                <img src={`${imageUrl} `} alt="pic" />
                            </Link>
                                <h3>{title}</h3>
                                <p>{content}</p>

                                <Button id={_id} />
                            </li>


                        ))}
                    </ul>

                </section>


            )
        }
    }
    async  componentDidMount() {
        try {
            const res = await Offerings.service.getOfferings();
            this.posts = res.posts;
            console.log(res.posts);
            if (res.posts.length !== 0) {
                this.setState(() => {
                    return {
                        isEmpty: false,
                        posts: res.posts,
                    }
                })
            }

        } catch (err) {

            console.log(err);
            this.setState(() => {
                return {

                    error: err.toString()


                }
            })
        }

    }
}



export default Offerings;