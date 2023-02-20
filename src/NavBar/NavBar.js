import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./NavBar.css"
import "../DropDown/DropDown.css";
import React, { useRef } from "react";
import green from '../images/GREEN.png'
import red from '../images/RED.png'
import blue from '../images/BLUE.png'
import yellow from '../images/YELLOW.png'
import zIndex from "@mui/material/styles/zIndex";

function NavBar() {

    const [display, setDisplay] = useState("none");
    const [width, setWidth] = useState();
    const [flag, setFlag] = useState(false);
    const [delay, setDelay] = useState();

    useEffect(() => {
        if (flag == true) {
            setDisplay("");
            setWidth("140px")
            console.log("hello")
            setDelay(0);
            setMarginLeft("120px")
        } else if (flag == false) {
            setTimeout(() => {
                setDisplay("none");
                setMarginLeft("60px")
            }, 1500)
            setWidth("80px");
            setDelay(1.5)

        }
    }, [flag])

    const [isActiveA, setIsActiveA] = useState(false);
    const [isActiveS, setIsActiveS] = useState(false);
    const [marginLeft, setMarginLeft] = useState();
    const [background, setBackground] = useState("#e3e3e3");
    const [background2, setBackground2] = useState("#e3e3e3");

    return (
        <div style={{ zIndex: -20, }}>
            <Navbar style={{ fontFamily: "HelveticaNeue", background: "none", color: "black" }}>
                <Container >
                    <motion.div
                        initial={{ width: width }}
                        whileHover={{ width: width }}
                        transition={{ delay: delay }}
                    >
                        <box onMouseEnter={() => { setFlag(true) }} onMouseOut={() => { setFlag(false) }}
                            style={{ display: "flex", background: "#e3e3e3", transitionDuration: "200ms", border: "10px solid #e3e3e3", borderRadius: "10px" }}>
                            <button style={{ background: (background), border: "none" }} onMouseEnter={() => { setFlag(true); setBackground("white"); }}
                                onMouseLeave={() => setBackground("#e3e3e3")}
                            >OHM  </button>
                            <button style={{ position: "absolute", transitionDuration: "200ms", marginLeft: "60px", display: display, background: (background2), border: "none" }}
                                onMouseEnter={() => { setFlag(true); setBackground2("white"); }}
                                onMouseLeave={() => setBackground2("#e3e3e3")} >PIONS</button>
                            <p style={{ position: "absolute", marginLeft: (marginLeft), transitionDuration: "200ms" }} onMouseEnter={() => { setFlag(true); }}>||</p>
                        </box>
                    </motion.div>
                    <Nav className="justify-content-end" >
                        <Nav.Link onMouseEnter={() => { setIsActiveS(!isActiveS); setIsActiveA(false) }}
                            href="#home" style={{ color: "black" }}>Shop</Nav.Link>
                        <Nav.Link onMouseEnter={() => { setIsActiveA(!isActiveA); setIsActiveS(false) }}
                            href="#features" style={{ color: "black" }}>About</Nav.Link>
                        <Nav.Link style={{ color: "black" }}>en/fr</Nav.Link>
                        <Nav.Link href="#pricing" style={{ color: "black" }} >Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
            <div className="container" >
                <div className="menu-container" style={{ zIndex: 10 }}>

                    <nav
                        className={`menu ${isActiveA ? "active" : "inactive"}`}
                    >
                        <div style={{ padding: "20px" }} onMouseLeave={() => { setTimeout(() => { setIsActiveA(!isActiveA) }, 1000) }} >
                            <p >
                                <a className="DropDownText" href="#">Who we are</a>
                            </p>
                            <p>
                                <a className="DropDownText" href="#">Press</a>
                            </p>
                            <p>
                                <a className="DropDownText" href="#">Dealers</a>
                            </p>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container" >
                <div className="menu-container" style={{ zIndex: 10 }}>

                    <nav
                        className={`menu ${isActiveS ? "active" : "inactive"}`}
                    >
                        <div onMouseLeave={() => { setTimeout(() => { setIsActiveS(!isActiveS) }, 1000) }}>
                            <ul style={{ padding: "20px" }}  >
                                <li style={{ display: "relative" }} >
                                    <a className="DropDownText" href="#">PION<bdi style={{ fontSize: "small" }}>&copy;</bdi></a>
                                    <div className="Pions" style={{ right: 250, }}>
                                        <motion.a
                                            initial={{ y: 0, }}
                                            whileHover={{ y: 10, }}>
                                            <img className="Pions" src={green} style={{ top: 0, zIndex: -1 }} ></img>
                                        </motion.a>
                                    </div>
                                    <div className="Pions" style={{ right: 180, }}>
                                        <motion.a
                                            initial={{ y: 0 }}
                                            whileHover={{ y: 10 }}>
                                            <img className="Pions" src={blue} style={{ top: 0, zIndex: -1 }} ></img>
                                        </motion.a>
                                    </div>
                                    <div className="Pions" style={{ right: 110, }}>
                                        <motion.a
                                            initial={{ y: 0 }}
                                            whileHover={{ y: 10 }}>
                                            <img className="Pions" src={yellow} style={{ top: 0, zIndex: -1 }} ></img>
                                        </motion.a>
                                    </div>
                                    <div className="Pions" style={{ right: 40, }}>
                                        <motion.a
                                            initial={{ y: 0, zIndex: -1 }}
                                            whileHover={{ y: 10, zIndex: -1 }}>
                                            <img className="Pions" src={red} style={{ top: 0, zIndex: -1 }} ></img>
                                        </motion.a>
                                    </div>


                                </li>
                                <li style={{ background: "white" }}>
                                    <a className="DropDownText" href="#">BAN<bdi style={{ fontSize: "small" }}>&copy;</bdi></a>
                                </li>
                                <li style={{ display: "inline-flex", paddingTop: "40px" }}>

                                    <a>See all</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div >

    )
}
export default NavBar;