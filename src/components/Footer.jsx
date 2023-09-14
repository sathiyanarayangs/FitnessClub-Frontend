import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="footer" >
                <div className="container" style={{ marginTop: '-50px' }}>
                    <div className="row py-2">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="footer__copyright__text">
                                <p>
                                    Copyright &copy; All rights reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="footer__copyright__social">
                                <a href="/"><i className="fa fa-facebook"></i></a>
                                <a href="/"><i className="fa fa-instagram"></i></a>
                                <a href="/"><i className="fa fa-twitter"></i></a>
                                <a href="/"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer