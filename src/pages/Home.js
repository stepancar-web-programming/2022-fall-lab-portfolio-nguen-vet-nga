import React from 'react'
import '../styles/Home.css'
import jeremie from '../assets/jeremie.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../js/Particle'
import pikachu from '../assets/pikachu.jpg'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillMail
} from 'react-icons/ai'

function Home () {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <div>Hello World!</div>
              </h1>

              <h1 className="heading-name">
                <div className="inline">
                  <div className="type2">
                    My Name is
                    <strong className="main-name"> JEREMIE NGUYEN</strong>
                  </div>

                </div>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <h3>
                  <span>always be</span>
                  <div className="message">
                    <div className="word1">practice</div>
                    <div className="word2">code</div>
                    <div className="word3">creating</div>
                  </div>
                </h3>
              </div>
            </Col>

            <Col md={3} style={{ paddingBottom: 20 }}>
              <img src={jeremie}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '400px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em' }}>
                BRIEFLY ABOUT ME
              </h1>
              <p className="home-about-body">
                I come from <b className="light-yellow">Vietnam</b>. <span className="fi fi-vn"></span>
                <br />
                <br />
                I am majoring in <b className="light-yellow">software engineering</b> at <b className="light-yellow">ITMO University</b>.
                <br />
                <br />
                I am currently interested in working with <b className="light-yellow">data</b>.
                <br />
                <br />
                Desire to become a <b className="light-yellow">data scientist</b>.
                <br />
                <br />
                Besides, <b className="light-yellow">sports</b> is also one of my strengths.
                <br />
                <br />
                I can play many sports well such as <b className="light-yellow">football, volleyball, badminton,</b> ...
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <figure>
                <img src={pikachu} className="img-fluid circle-border" alt="avatar" />
              </figure>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONTACT ME</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/jeremie2k1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010667591602"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://mail.google.com/mail/u/?authuser=vietngaitmo@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home
