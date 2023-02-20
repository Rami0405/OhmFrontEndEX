import MovingText from 'react-moving-text'
import MiddlePage from '../MiddlePage/MiddlePage';
import NavBar from '../NavBar/NavBar';
import green from '../images/GREEN.png';
import red from '../images/RED.png';
import blue from '../images/BLUE.png';
import yellow from '../images/YELLOW.png';
import Footer from '../Footer/Footer';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';



function MainPage() {
    const [image, setImage] = useState();

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const [transform, setTransform] = useState();
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log(scrollPosition)
        if (scrollPosition <= 150) {
            setImage(green)
        }
        if (scrollPosition >= 300) {
            setImage(red);
        }
        if (scrollPosition >= 450) {
            setImage(yellow)
        }
        if (scrollPosition >= 600) {
            setImage(blue)
        }
        if (scrollPosition < 650) {
            setTransform("scale(0.95)")
        }
        if (scrollPosition > 650) {
            setTransform("scale(1)")
        }
        if (scrollPosition > 4400) {
            setTransform("scale(0.95)")
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);



    return (
        <div>

            <header style={{ zIndex: -20 }}>
                <NavBar />
            </header>

            <div style={{ display: "gird", zIndex: -4, }}>

                <Parallax speed={-200}>

                    <div style={{ display: "flex", height: "100%", }}>
                        <Parallax speed={20}>
                            <div style={{ flex: 1, position: "absolute", bottom: 400 }}>
                                <MovingText

                                    type="flipFromTop"
                                    duration="500ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease"
                                    iteration="1"
                                    fillMode="none">
                                    <p style={{ position: "absolute", top: 300, left: 50, width: "25rem", fontSize: "40px", fontWeight: "500" }}>
                                        <h7 style={{ fontWeight: "bold", }}>PION</h7>
                                        —
                                        Four
                                        colored
                                        stools
                                        made in France
                                        from recycled steel
                                        assembled by hand
                                        and then powder
                                        coated.</p></MovingText>
                            </div>
                        </Parallax>
                        <div style={{ position: "absolute", flex: 2, top: -200, left: 500 }}>
                            <img src={image} width={900} height={900} style={{ zIndex: -4 }} />

                        </div>
                    </div>
                </Parallax>

                <Parallax speed={10}>

                    <div style={{ transition: "transform 1s", transform: transform, background: "rgb(245, 244, 244)", marginTop: "1000px" }}>
                        <MiddlePage />
                    </div>

                    <footer style={{ background: "rgb(245, 244, 244)", zIndex: 1 }}>


                        <Footer />
                    </footer>
                </Parallax>
            </div>


        </div >
    )
}
export default MainPage;