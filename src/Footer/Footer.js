import "./Footer.css";
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Card } from "react-bootstrap";
import { TextField } from "@mui/material";
function Footer() {

    return (
        <MDBFooter bgColor='rgb(245, 244, 244)' style={{ color: "black", paddingTop: "150px" }} className='text-center text-lg-start'>


            <section className=''>
                <MDBContainer className='text-center text-md-start'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>

                            <h6 style={{ color: "black", fontFamily: "HelveticaNeue", fontSize: "1.75rem", letterSpacing: "-0.02rem" }}>
                                <b> OHM </b> — A collectible furniture studio <b> backed by a manufacturing workshop.</b>
                            </h6>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="1" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pion
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Ban
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    All
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Who are we
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Dealers
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Press
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQ
                                </a>
                            </p>

                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms and conditions
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Legal notice
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Press
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <Card style={{
                                width: '15rem', border: "none", borderRadius: "10px",
                                background: "white",
                            }}>
                                <Card.Body>
                                    <h1 style={{ fontWeight: "bolder" }}>NEWS</h1>
                                    <Card.Text style={{ fontWeight: "bold" }}>
                                        Sign up and stay up to date on product launches and pre order.                                    </Card.Text>
                                    <div style={{ display: "flex" }}>
                                        <TextField id="standard-basic" label="Email" variant="standard" style={{ flex: 1 }} />
                                        <button className="a" href="#" style={{ background: "white", border: "none", flex: 1, fontWeight: "bold" }}>Enter</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </MDBCol>

                    </MDBRow>
                    <div className='text-muted' style={{ paddingLeft: "20px" }}>
                        © 2022 OHM.
                        &nbsp;&nbsp;&nbsp;
                        All right Reserved.
                        &nbsp;&nbsp;&nbsp;

                        <a className='text-reset' href='#'>
                            Made by Thomas & Teo3tc
                        </a>
                    </div>
                </MDBContainer>
            </section>

        </MDBFooter>

    )

}
export default Footer;