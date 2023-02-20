import MovingText from 'react-moving-text'
import { useEffect, useState } from 'react';
import MainPage from '../MainPage/MainPage';
import { Scrollbar } from 'smooth-scrollbar-react';
function Loader() {

    const [load, setLoad] = useState(undefined);
    const [loadText, setLoadText] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setLoadText(true)
        }, 2000)
        setTimeout(() => {
            setLoad(true)
        }, 6300)
    })
    return (
        <>
            <div>{!load ? (<div>
                <MovingText
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        position: "absolute", top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        transform: "translate(-50%, -50%,50%,50%)",
                    }}
                    type="fadeOutToTop"
                    duration="1200ms"
                    delay="5s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">

                    <MovingText
                        style={{
                            position: "absolute", top: "25%",
                            color: "white",
                            left: "35%",
                            right: 0,
                            bottom: 0,
                            transform: "translate(-50%, -50%,50%,50%)",
                        }}
                        type="fadeInFromBottom"
                        duration="1500ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">

                        <h1 style={{ fontSize: "120px" }}>OHM &copy;</h1>

                    </MovingText>
                </MovingText>
                {loadText ? (<MovingText

                    type="fadeOutToTop"
                    duration="1500ms"
                    delay="1.5s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">

                    <MovingText
                        style={{ color: "white" }}
                        type="fadeInFromBottom"
                        duration="1500ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">

                        <p >— A collectible
                            furnitures brand <p style={{ fontWeight: "bold" }}>backed by
                                a manufacturing studio.</p></p>

                    </MovingText>
                </MovingText>) : (<p></p>)}

            </div>) :

                <MainPage />}
            </div>
        </>
    )
}
export default Loader;