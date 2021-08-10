import React from 'react'
import './FullPost.scss';
import user1 from '../../assets/user1.jpg';
import gif from '../../assets/post1gif.gif';
import code from '../../assets/snippet1.png'
import code2 from '../../assets/snippet2.png'
function FullPost() {
    return (
        <section className="full__post">
            <div className="post__image"></div>
            <div className="container">
                <h1 className="post__title">Vuejs 3 Search Bar Using Computed Properties [Composition API] </h1>
                <p className="tags"> #javascript #vue #programming </p>
                <div className="full__post-info">
                    <div className="user__info">
                        <img src={user1} alt="" className="user__image" />
                        <p className="user__name">Raja Tamil</p>

                    </div>
                    <p className="date"> 9 Aug ・3 min read </p>
                </div>
                <p className="sub">
                    Whenever we have a list of items such as products, it’s obvious to have a search items functionality on the client-side for a better user experience.
                    <br />
                    <br />
                    In <strong>Vue 3 Composition API </strong> , we can easily create a search bar using computed properties.
                    <br />
                    <br />
                    In fact, this is one of the perfect cases for utilizing computed properties.
                </p>
                <img src={gif} alt="" className="post__gif" />
                <p className="sub">
                    I assume you already know how to get <span className='full__post-link'>
                        Up and Running With Vue JS 3 Project Using Vue CLI.
                    </span>
                    <br />
                    <br />
                    Let’s say I have a <strong>  ProductList.vue   </strong>page-based component that will show a list of products that I want to add search functionality to it.
                </p>
                <img src={code} alt="" className='snippet__image' />

                <h3 className="sub__title">
                    Get Products Data From Firebase
                </h3>
                <p className="sub">
                    Let’s make an HTTP request to a server to get a list of products.
                    <br /><br />
                    I use Firebase in this example however you do not need to know Firebase to follow along.
                    <br /><br />
                    It makes more sense to get data by making actual HTTP requests rather than just creating a list of items array within the component.
                    <br /><br />
                    As an example of the Observer pattern, we will go about implementing a simple interaction where multiple elements listen to the mouse position on the screen and perform different actions.
                </p>


                <img src={code2} alt="" className='snippet__image' />
            </div>






        </section >
    )
}

export default FullPost
