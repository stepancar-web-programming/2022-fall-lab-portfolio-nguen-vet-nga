import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../project_list/ListProjects";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            {project.video ?
                <video autoPlay muted controls>
                    <source src={project.video} type="video/mp4" />
                </video> :
                <img src={project.image}>
                </img>}

            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href={project.link} target="_blank">
                <GitHubIcon className="cursor" />
            </a>
        </div >
    );
}

export default ProjectDisplay;