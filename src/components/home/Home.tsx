import React, {useEffect, useState} from "react";
// import Api from "../../service/Api";
import {DogBreed} from "../../model/dogBreed";
import Api from "../../service/Api";
import BreedList from "../dogBreed/BreedList";
import {useDispatch, useSelector} from "react-redux";
import {selectDogBreeds} from "../../store/dog.selectors";
import {loadDogBreeds} from "../../store/dog.reducers";
// @ts-ignore
import SearchLogo from "./images/icons8-search-128.png";
// @ts-ignore
import AiSearch from"./images/icons8-artificial-intelligence-64.png";
import ModalContent from "../modalBreed/ModalBreed";
import DogBreedComponent from "../dogBreed/DogBreedComponent";
const Home: React.FC = () =>{

    let dispatch = useDispatch();
    let breeds = useSelector(selectDogBreeds);
    let api = new Api();

    const getImg = async () => {

        const data = await api.getDasDogImage('akita')

        console.log('getImg ----- ', data);
    }


    useEffect(() => {
        const getTheBreeds = async () => {
            try {
                const data = await api.getAllDogBreeds();
                // @ts-ignore
               console.log('data din home ',data.imageUrl);
               // @ts-ignore
                dispatch(loadDogBreeds(data));
            } catch (error) {
                console.error(error);
            }
        };

        getImg();
        getTheBreeds();
    }, [dispatch]);




    return(
        <>
            <header>
                <div className="banner">Let Andrei Help You With Your Project. Prices Starting at $10/hour</div>
                <nav>
                    <div id="logo">

                        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 32H0V21.9849C0 17.1239 4.0116 13.1839 8.96 13.1839H15.2V0.468341C15.2 0.251458 15.3792 0.0754376 15.6 0.0754376C15.7184 0.0754376 15.8308 0.127301 15.9068 0.216883L17.3616 1.92719C18.402 1.07577 19.74 0.563816 21.2 0.563816H22C23.442 0.563816 24.7656 1.06359 25.8 1.89654L27.2932 0.14066C27.3692 0.0514706 27.4812 0 27.6 0C27.8208 0 28 0.175628 28 0.392904V15.3896H23.36C17.528 15.3896 12.8 20.0337 12.8 25.7623V32Z" fill="#45413E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.76 17.0569V12.0875C29.76 12.0836 29.76 12.0797 29.76 12.0758V6.79004C29.76 6.57435 29.9392 6.4 30.16 6.4C30.266 6.4 30.3676 6.44095 30.4424 6.51389L31.9576 7.98784C32.7864 7.42501 33.7936 7.09504 34.88 7.09504C35.97 7.09504 36.9808 7.42735 37.8112 7.99369L39.3176 6.52793C39.3924 6.45499 39.494 6.41404 39.6 6.41404C39.8208 6.41404 40 6.58878 40 6.80408V23.2632C40 28.0883 35.9884 32 31.04 32H14.4V25.7938C14.4 20.969 18.4116 17.0569 23.36 17.0569H29.76Z" fill="#45413E" />
                        </svg>
                        Andrei's <br /> AI Dog App
                    </div>
                    <ul className="navigation-menu">
                        <li><a href="#">Breeds</a>
                            <ul className="subnav">
                                <li className="card-med" id="sup-dog">
                                    <div className="card-image"><img src="https://ouch-cdn2.icons8.com/qPvaAv2gxwM3l0z7dl_eoh9v6h58HlzewBUfEgX6AZE/rs:fit:368:386/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIv/ZmM4YjNlYmItMDNj/Ni00NGM3LTliNGUt/YTUyOWUzOGU4NTE2/LnBuZw.png" /></div>
                                    <a href="#">
                                        <span>Dogs</span>
                                        <span>See All <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></span>
                                    </a>
                                </li>
                                <li className="card-med" id="sup-cat">
                                    <div className="card-image"><img src="https://ouch-cdn2.icons8.com/US6gJ6fHUOJqruLB7KDe5zEa82iDSp7OdO-bv-aLtvU/rs:fit:368:310/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjU5/LzdmOWU1ZjU0LTMx/ZDQtNDgwNS1iM2E2/LWM3NzgyMTcyNzJh/NC5wbmc.png" /></div>
                                    <a href="#">
                                        <span>Cats</span>
                                        <span>See All <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                            <li><a href="#">Services</a>
                                <ul className="subnav">
                                    <li className="card-med" id="serv-groom">
                                        <div className="card-image"> <img src={SearchLogo} alt="Search Icon" /></div>
                                        <a href="#">
                                            <span>Classic Search</span>
                                            <span>More Info <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></span>
                                        </a>
                                    </li>
                                    <li className="card-med" id="serv-board">
                                        <div className="card-image"><img src={AiSearch} alt="Ai Icon" /></div>
                                        <a href="#">
                                            <span>AI Search</span>
                                            <span>More Info<span className="material-symbols-outlined">
                                        arrow_forward
                                        </span></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">About Us</a>
                            </li>
                    </ul>

                </nav>
            </header>
            <section className="hero">
                <h1>Your Number One Pet Breed Finder!</h1>
                <div className="btn-group">
                    <button className="btn-filled-dark">Search with AI</button>
                </div>
            </section>


            <section id="locate">
                <div className="main-btn-container">
                    <h2>Breeds</h2>
                    <div className="btn-group">

                        {breeds.map((breed, index) => (
                            <DogBreedComponent key={index} name={breed} />
                        ))}
                    </div>
                </div>



            </section>

            <footer>

                <ul>
                    Products
                    <li><a href="#">Dog Health Products</a></li>
                </ul>


                <ul>
                    Our Services
                    <li><a href="#">Sell dogs</a></li>

                </ul>
                <ul>
                    Our Company
                    <li><a href="#">Desciption</a></li>

                </ul>
                <ul>
                    Social Media
                    <li><a href="#">Mail,FaceBook</a></li>

                </ul>
            </footer>

        </>
    )
}

export default Home