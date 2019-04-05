import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import getCampService from '../services/getCampService'
import addCampToUser from '../services/addPostToUserService'



class Camps extends React.Component {
    state = {
        post: {},
        isEmpty: true,
    }
    static service = new getCampService();
    static serviceAddCampToUser = new addCampToUser();

    // bookDetails = (event) => {

    //     const BookId = event.target.getAttribute('id');
    //     this.props.history.push(`/books/${BookId}`);
    //     console.log(this.props.history)


    // }

    test = (post) => {
        console.log(post);
    }
    addPostToUser = async () => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            this.props.history.push('/login')
            return
        }
        try {
            const res = await Camps.serviceAddCampToUser.addPostToService(this.props.match.params.id);


            console.log(res)
            this.props.history.push('/userCamps')
            // 
        } catch (err) {

            console.log(err);
        }

    }

    render() {
        let RenderButton = () => {

            return <button onClick={this.addPostToUser}>ENROLL TODAY</button>
        }
        if (window.previousLocation === '/userCamps') {
            RenderButton = () => {

                return <Link to={`/userCamps`}> <button>MY CAMPS</button></Link>
            }
        }


        const { post } = this.state;
        this.test(post)
        const { imageUrl } = post;
        const { price } = post;
        const { title } = post;
        const { content } = post;

        const { isEmpty } = this.state;


        if (isEmpty) {
            return null;
        } else {
            return (

                <section className="camps">

                    <ul>

                        <li key={""}>
                            <img src={`${imageUrl}`} alt="pic" />
                            <section className="more-info">
                                <section className="info">
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{""}</p>
                                    </div>
                                    <div>
                                        ${price}
                                    </div>
                                </section>

                                <p>
                                    {content}
                                </p>
                                <RenderButton />
                                {/* <Route path="/users/:id" component={UserPage}/> 
                                               this.props.match.params.id */}
                            </section>
                        </li>

                    </ul>
                </section>


            )
        }
    }
    async  componentDidMount() {
        try {
            const res = await Camps.service.getTopRatedBook(this.props.match.params.id);


            if (res !== 0) {
                this.setState(() => {
                    return {
                        isEmpty: false,
                        post: res.post,

                    }
                })
            }

        } catch (err) {

            console.log(err);
        }

    }
}



export default Camps;