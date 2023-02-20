import SecondRed from "../images/SecondRed.png"
import trees from "../images/trees.png"
import "./MiddlePage.css"
import SecondYellow from "../images//SecondYellow.png"
import SecondBlue from "../images/SecondBlue.png"
import mirror from "../images/mirror.png"
import SecondGreen from "../images/SecondGreen.png"
import PionCollection from "../images/PionCollection.png"
import BanCollection from "../images/BanCollection.png"
import { Card } from "react-bootstrap"
import { TextField } from "@mui/material"
import story from "../images/story.png"
import PionTree from "../images/PionTree.png"
import blueSubway from "../images/blueSubway.png"
import numbers from "../images/numbers.png"
import redFlip from "../images/redFlip.png"
import yellowFlip from "../images/yellowFlip.png"
import greenFlip from "../images/greenFlip.png"
import blueFlip from "../images/blueFlip.png"
import { useState } from "react"
import { useParallax } from "react-scroll-parallax"
import { display } from "@mui/system"

function MiddlePage() {
    const [flagRed, setFlagRed] = useState(false);
    const [flagYellow, setFlagYellow] = useState(false);
    const [flagBlue, setFlagBlue] = useState(false);
    const [flagGreen, setFlagGreen] = useState(false);
    const [flagRedF, setFlagRedF] = useState(false);
    const [flagYellowF, setFlagYellowF] = useState(false);

    return (


        <div style={{ fontFamily: "garamond", background: "white", borderRadius: "10px", paddingTop: "50px", paddingLeft: "50px", zIndex: 10 }}>

            <div style={{ display: "flex" }}>

                <div style={{ flex: 1, }}>
                    <p style={{ fontWeight: "bold", width: "18rem" }}>OHM is a collectible furniture studio backed by a manufacturing workshop.</p>
                    <a>learn more</a>
                </div>
                <h1 style={{ flex: 1, fontWeight: "bold", }}>— Influenced by images known to the human
                    eye, our pieces of furniture are simple and yet thought-through to be used in different ways.</h1>
            </div>
            <div className="main-section" style={{ fontSize: "1.2rem" }}>
                <div className="left-side" style={{ borderRadius: "10px", }}>
                    <picture style={{ display: "flex", flexDirection: "column" }}>
                        <div className="dotRed" style={{ position: "absolute", zIndex: "10" }}></div>
                        <img src={flagRedF ? redFlip : SecondRed} onMouseEnter={() => { setFlagRedF(true) }}
                            onMouseLeave={() => { setFlagRedF(false) }}

                            style={{ width: "340px", height: "443px", borderRadius: "10px" }} />
                        <div style={{ display: "flex", flexDirection: "row" }} >
                            PION - Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <p style={{ opacity: "0.7" }}>570$</p>

                        </div>
                    </picture>
                </div>

                <div className="right-side">
                    <picture style={{ display: "flex", flexDirection: "column" }}>
                        <img src={trees} style={{ width: "591px", height: "788px", borderRadius: "10px" }} />
                        <p style={{ opacity: "0.7" }}>PION collection in fields.</p>
                    </picture>
                </div>
            </div>
            <div style={{ display: "flex" }}>

                <h1 style={{ flex: 1, fontWeight: "bold", }}>— A traditional approach while
                    imagining what the furniture of tomorrow could be, in its use and representation.</h1>


                <div style={{ flex: 1, }}>
                    <div className="container" style={{ paddingLeft: "50px" }}>
                        <p style={{ fontWeight: "bold", width: "15rem" }} >OHM is a collectible furniture studio backed by a manufacturing workshop.</p>
                        <a>learn more</a>
                    </div>
                </div>

            </div>
            <div class="main-section" style={{ fontSize: "1.2rem" }}>
                <div className="left-side2">
                    <picture style={{ display: "flex", flexDirection: "column" }}>
                        <img src={mirror} style={{ width: "591px", height: "788px", borderRadius: "10px" }} />
                        <p style={{ opacity: "0.7" }}>PION collection in fields.</p>
                    </picture>
                </div>
                <div className="right-side2" style={{ borderRadius: "10px", }}>


                    <picture style={{ display: "flex", flexDirection: "column" }}>
                        <div className="dotYellow" style={{ position: "absolute", zIndex: "10" }}></div>
                        <img src={flagYellowF ? yellowFlip : SecondYellow} onMouseEnter={() => { setFlagYellowF(true) }}
                            onMouseLeave={() => { setFlagYellowF(false) }} style={{ position: "sticky", width: "340px", height: "443px", borderRadius: "10px", }} />
                        <div style={{ display: "flex", flexDirection: "row" }} >PION - Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <p style={{ opacity: "0.7" }}>570$</p></div>
                    </picture>
                </div>
            </div>
            <div style={{ paddingTop: "100px" }}>
                <center>
                    <h1 style={{ fontWeight: "bold" }}>Selected products</h1>
                </center>
                <div style={{ display: "grid", alignItems: "center", justifyItems: "center" }}>
                    <div style={{ display: "flex", gap: "15px", }}>
                        <picture className="picStyle">
                            <div className="dotRed" style={{ position: "absolute" }}></div>

                            <img className="SelectedImages" src={flagRed ? redFlip : SecondRed}
                                onMouseEnter={() => { setFlagRed(true) }} onMouseLeave={() => { setFlagRed(false) }} />
                            <p style={{ paddingTop: "20px" }}>PION -Red</p>
                        </picture>

                        <picture className="picStyle">
                            <div className="dotYellow" style={{ position: "absolute" }}></div>
                            <img className="SelectedImages" src={flagYellow ? yellowFlip : SecondYellow}
                                onMouseEnter={() => { setFlagYellow(true) }} onMouseLeave={() => { setFlagYellow(false) }} />
                            <p style={{ paddingTop: "20px" }}>PION -Yellow</p>
                        </picture>
                        <picture className="picStyle">
                            <div className="dotGreen" style={{ position: "absolute" }}></div>

                            <img className="SelectedImages" src={flagGreen ? greenFlip : SecondGreen}
                                onMouseEnter={() => { setFlagGreen(true) }} onMouseLeave={() => { setFlagGreen(false) }} />
                            <p style={{ paddingTop: "20px" }}>PION -Green</p>
                        </picture>
                        <picture className="picStyle">
                            <div className="dotBlue" style={{ position: "absolute" }}></div>

                            <img className="SelectedImages" src={flagBlue ? blueFlip : SecondBlue}
                                onMouseEnter={() => { setFlagBlue(true) }} onMouseLeave={() => { setFlagBlue(false) }} />
                            <p style={{ paddingTop: "20px" }}>PION -Blue</p>
                        </picture>
                    </div>
                    <a style={{ paddingTop: "60px", paddingBottom: "60px" }}>See all</a>
                </div>
            </div>
            <div style={{ display: "grid", alignItems: "center", justifyItems: "center" }}>
                <div style={{ display: "flex", gap: "35px" }}>
                    <div style={{ flex: 1 }}>
                        <div>
                            <Card style={{
                                width: '15rem', border: "none", borderRadius: "10px",
                                background: "white", position: "fixed", marginTop: "680px", left: "15%"
                            }}>
                                <Card.Body>
                                    <h1 style={{ fontWeight: "bolder" }}>PION</h1>
                                    <Card.Text style={{ fontWeight: "bold" }}>
                                        Four colored stools made in France from recycled steel, assembled by hand and then powder coated.
                                    </Card.Text>
                                    <a className="a" href="#">Buy now</a>
                                </Card.Body>
                            </Card>
                            <picture>

                                <img src={PionCollection} style={{ borderRadius: "10px", width: "43rem", height: "60rem" }} />
                            </picture>

                        </div>
                    </div>
                    <div>
                        <picture>
                            <Card style={{
                                width: '15rem', border: "none", borderRadius: "10px",
                                background: "white", position: "absolute", marginTop: "680px", right: "33%"
                            }}>
                                <Card.Body>
                                    <h1 style={{ fontWeight: "bolder" }}>BAN</h1>
                                    <Card.Text style={{ fontWeight: "bold" }}>
                                        Coming soon - Sign up to the waiting list to be informed about the availability of the product.
                                    </Card.Text>
                                    <div style={{ display: "flex" }}>
                                        <TextField id="standard-basic" label="Email" variant="standard" style={{ flex: 1 }} />
                                        <button className="a" href="#" style={{ background: "white", border: "none", flex: 1, fontWeight: "bold" }}>Enter</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <img src={BanCollection} style={{ borderRadius: "10px", width: "43rem", height: "60rem" }} />
                        </picture>
                    </div>

                </div>

            </div>
            <div style={{ gap: "1rem", display: "flex", paddingLeft: "61px", paddingTop: "200px", paddingBottom: "100px" }}>
                <picture>
                    <img className="InstaImages" src={story} />
                </picture>
                <picture>
                    <img className="InstaImages" src={PionTree} />
                </picture>
                <picture>
                    <img className="InstaImages" src={blueSubway} />
                </picture>
                <picture>
                    <img className="InstaImages" src={numbers} />
                </picture>
                <h1 style={{ fontFamily: "garamond", fontWeight: "bold", paddingLeft: "30px" }}>Follow us on Instagram<a href="#" style={{ color: "black" }}> @ohm.studio_</a></h1>
            </div>
        </div >
    )

}
export default MiddlePage;