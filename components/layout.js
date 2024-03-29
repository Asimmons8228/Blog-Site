import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <>
      <div id="wrapper">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Wrapper */}
        {/* Header */}
        <header id="header" className="alt">
          <a href="/" className="logo">
            <strong>Blog</strong> <span>by Aaron Simmons</span>
          </a>
        </header>
        {/* Menu */}


        {props.children}

        {/* Contact */}
        <section id="contact">
          <div className="inner">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Clear" />
                  </li>
                </ul>
              </form>
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope" />
                  <h3>Email</h3>
                  <a href="#">Aaroncourtneysimmons@gmail.com</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone" />
                  <h3>Phone</h3>
                  <span>(347) 965-9748</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home" />
                  <h3>Address</h3>
                  <span>
                    New York, NY
                    <br />
                    United States of America
                  </span>
                </div>
              </section>
            </section>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
