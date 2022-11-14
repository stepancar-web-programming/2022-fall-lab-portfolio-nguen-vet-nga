import React from "react";
import { Container } from "react-bootstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <Container fluid className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <FacebookIcon />
                <GitHubIcon />
            </div>
            <p> &copy; Designed by Jeremie Nguyen </p>
        </Container>
    )
}

export default Footer;