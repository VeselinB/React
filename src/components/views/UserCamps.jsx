import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import getCampService from '../services/getUserCamos'
import removeCampFromUser from '../services/removeCampFromUser'




class Camps extends React.Component {
    state = {
        camps: [],
        isRerender: false,
        isEmpty: true,

    }
    static service = new getCampService();



    static serviceRemoveCamp = new removeCampFromUser();
    removePostToUser = async (event) => {
        console.log(event.target.id)
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            this.props.history.push('/login')
            return
        }
        try {
            const res = await Camps.serviceRemoveCamp.removeCampFromUser(event.target.id);

            this.setState(() => {
                return {
                    isRerender: true


                }
            })

            console.log(res)
            this.props.history.push('/userCamps')
            // 
        } catch (err) {

            console.log(err);
        }

    }






    render() {
        const { camps } = this.state;
        const { isEmpty } = this.state;
        window.previousLocation = this.props.location.pathname
        console.log(window.previousLocation)
        if (isEmpty) {
            return null;
        } else {
            return (

                <section className="camps">
                    <h2>{`${localStorage.getItem('userName')}'s Upcoming CAMPS`}</h2>
                    <p>
                        {"Enjoy your Camp's"}
                    </p>
                    <ul>
                        {camps.map(({ imageUrl, title, date, price, _id }) => (
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s

                        </p>
                                    <Fragment>
                                        <Link to={`/camp/${_id}`}> <button>MORE INFO</button></Link>
                                        <button id={_id} onClick={this.removePostToUser}>CANCEL</button>
                                    </Fragment>
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
            const res = await Camps.service.getCamps(localStorage.getItem("id"));

            console.log(res)
            if (res !== 0) {
                this.setState(() => {
                    return {
                        isEmpty: false,
                        camps: res.camps,

                    }
                })
            }


        } catch (err) {

            console.log(err);
        }

    }

    async componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevState.isRerender !== this.state.isRerender) {
            try {
                const res = await Camps.service.getCamps(localStorage.getItem("id"));

                console.log(res)
                if (res !== 0) {
                    this.setState(() => {
                        return {
                            isEmpty: false,
                            camps: res.camps,

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
