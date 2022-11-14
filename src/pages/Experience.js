import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import HourglassFull from "@material-ui/icons/HourglassFullOutlined"
import "../styles/Experience.css";



function Experience() {
    return (
        <div className="exp-contain">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2016"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Nghia Dong Secondary School
                    </h4>
                    <p>Secondary School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Quoc Hoc Hue Highschool
                    </h4>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - now"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">
                        ITMO University
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<HourglassFull />}
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}></VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}

export default Experience;