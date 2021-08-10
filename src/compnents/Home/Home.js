import React from 'react'
import './Home.scss'
import Post from '../post/Post'
import User1 from '../../assets/user1.jpg'
import User2 from '../../assets/user2.jpg'
import User3 from '../../assets/user3.jpg'
import User4 from '../../assets/user4.jpg'
import User5 from '../../assets/user5.jpg'
import User6 from '../../assets/user6.jpg'
function Home() {



    return (
        <section className="home__section">
            <div className="container">
                <div className="home__heading">
                    <h3 className="home__title">Posts</h3>
                    <select className={'feed__select'}>
                        <option >Feed</option>
                        <option >Week</option>
                        <option >Month</option>
                        <option >Year</option>
                        <option >Latest</option>
                    </select>
                </div>
                <div className="feed">

                    <Post
                        img={User1}
                        time={3}
                        tags={'#Javascript #vue #programming'}
                        title={'Vuejs 3 Search Bar Using Computed Properties [Composition API]'}
                        date={'Aug 9 (6 hours ago)'}
                        name={'Raja Tamil'}
                        hearts={3}
                        comments={2}
                    />
                    <Post
                        img={User2}
                        time={10}
                        tags={'datastructure #linkedlist #programming #javascript'}
                        title={'Data Structure Series: Linked List'}
                        date={'Aug 9 (4 hours ago)'}
                        name={'Chuck Choi'}
                        hearts={17}
                        comments={5}
                    />
                    <Post
                        img={User3}
                        time={4}
                        tags={' #javascript #node #webdev #tips '}
                        title={'Top 20 JavaScript tips and tricks to increase your Speed and Efficiency'}
                        date={'Aug 9 (1 hours ago)'}
                        name={'Hadier Ali'}
                        hearts={66}
                        comments={0}
                    />
                    <Post
                        img={User4}
                        time={5}
                        tags={'#react #javascript #webdev #beginners'}
                        title={'How to Create Public And Private Routes using React Router'}
                        date={'Aug 9 (13 hours ago)'}
                        name={'Nilanth'}
                        hearts={69}
                        comments={3}
                    />
                    <Post
                        img={User5}
                        time={5}
                        tags={'#react #javascript #webdev #beginners'}
                        title={'How to Create Public And Private Routes using React Router'}
                        date={'Aug 9 (13 hours ago)'}
                        name={'Nilanth'}
                        hearts={9}
                        comments={3}
                    />
                    <Post
                        img={User6}
                        time={8}
                        tags={'  #javascript #react #redux #webdev  '}
                        title={'Understand One-way Data Binding in React the easy way!  '}
                        date={'Aug 10 (6 hours ago)'}
                        name={'Parnika-Gupta'}
                        hearts={10}
                        comments={2}
                    />
                </div>
            </div>






        </section>
    )
}

export default Home
