import React from 'react'

const Landing = () => {
    return (
        <main>
            <section id="about">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at
                            cupiditate dicta
                            doloribus ea esse fugiat, impedit ipsam iure magni minus mollitia nobis quod soluta
                            suscipit ullam
                            unde ut veniam, voluptatibus! Blanditiis, laboriosam, maxime. At distinctio
                            doloremque laboriosam.
                            Quasi! Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>
            <section id="start">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>Ready to begin?</h2>
                        <h3>Join the millions of others taking the advantage of our knowledge base.</h3>
                        <button>Sign up</button>
                    </div>
                </div>
            </section>
            <section id="partner-sources">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>World-Class Programs from the top universities and experts</h2>
                        <div className="flex-row">
                            <div className="partners">
                                <img src="" alt=""/>
                            </div>
                            <div className="source">
                                <img src="" alt=""/>
                            </div>
                            <div className="source">
                                <img src="" alt=""/>
                            </div>
                            <div className="source">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contacts">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>Our contacts</h2>
                        <div className="flex-row">
                            <div className="map">map</div>
                            <div className="contact-form">
                                <form>
                                    <fieldset>
                                        <legend>Input your details</legend>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" name="email" id="email"
                                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" size="30"
                                               placeholder="email@gmail.com"
                                               required/>
                                        <input placeholder="Name" type="text" required/>
                                        <input placeholder="Email" type="email"
                                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                               size="30" required/>
                                        <textarea rows="4" cols="50" placeholder="Your message"/>
                                        <button className="submit" formNoValidate
                                                type="submit">Send</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Landing;