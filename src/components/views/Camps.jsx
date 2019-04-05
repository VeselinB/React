import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import getCampsService from '../services/getCampsService'
import DeleteCampSevice from '../services/delCampService'





class Camps extends React.Component {
    state = {
        camps: [],
        isEmpty: true,
        reRender: false,
        error: ""

    }
    static service = new getCampsService();
    static delete = new DeleteCampSevice();

    delCamp = async (id) => {
        let result = await Camps.delete.DeleteCampSevice(id)
        console.log(result)
        this.setState({
            reRender: true
        })


    }





    render() {
        const { camps } = this.state;
        const { isEmpty } = this.state;
        const { error } = this.state;
        window.previousLocation = this.props.location.pathname;
        let AddButton = () => { return null }
        let Button = (props) => {

            return (<Fragment> <Link to={`/camp/${props.id}`}> <button>MORE INFO</button></Link>



            </Fragment>)
        }


        if (localStorage.getItem('roles') !== null) {
            if (localStorage.getItem('roles').includes("Admin")) {
                AddButton = () => {
                    return <Link to={`/add`}> <button>Add Camp</button></Link>
                }

                Button = (props) => {
                    return (
                        <div>
                            <Link to={`/edit/${props.id}`}> <button>Edit</button></Link>
                            <button onClick={() => { this.delCamp(props.id) }}>Delete</button>
                        </div>
                    )
                }
            }
        }


        console.log(camps)
        if (error !== "") {
            return <section className="camps">
                <h2>{error}</h2>
            </section>
        }
        if (isEmpty) {
            return <div>There are no camps</div>;
        } else {
            return (

                <section className="camps">
                    <h2>{"Upcoming CAMPS"}</h2>
                    <p>
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the                        industry's standard dummy text ever since the 1500s"}
                    </p>
                    <AddButton />
                    <ul>
                        {camps.map(({ imageUrl, title, content, price, _id, date }) => (
                            <li key={_id}>
                                <img src={`${imageUrl}`} alt="pic" />
                                <section className="more-info">
                                    <section className="info">
                                        <div>
                                            <h3>{title}</h3>
                                            <p>{date}</p>
                                        </div>
                                        <div>
                                            ${price}
                                        </div>
                                    </section>

                                    <p>
                                        {content}
                                    </p>
                                    <Button id={`${_id}`} />

                                    {/* <Route path="/users/:id" component={UserPage}/> 
                                               this.props.match.params.id */}
                                </section>
                            </li>))
                        }

                    </ul>
                </section>


            )
        }
    }
    async  componentDidMount() {

        try {
            const res = await Camps.service.getTopRatedBooks();
            this.camps = res.posts;

            if (res.posts.length !== 0) {
                this.setState(() => {
                    return {
                        isEmpty: false,
                        camps: res.posts,

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

    async componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevState.reRender !== this.state.reRender) {
            try {
                const res = await Camps.service.getTopRatedBooks();
                console.log(res)
                if (res.posts.length === 0) {
                    this.setState(() => {
                        return {
                            isEmpty: true,

                        }
                    })
                }
                this.camps = res.posts;
                console.log(res.posts);
                if (res.posts.length !== 0) {
                    this.setState(() => {
                        return {
                            isEmpty: false,
                            camps: res.posts,
                            reRender: false
                        }
                    })
                }

            } catch (err) {

                console.log(err);
            }

        }
    }
}



export default Camps;