import React from "react";
import { VerticalTimeline, VerticalTimelineElement }
    from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import '../../styles/Resume.css'

function Resume() {
    return (

        <div className="experience">
            <VerticalTimeline lineColor="#B0A2C7">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="2007-2015"
                    iconStyle={{ background: "#333", color: "#fff" }}
                    icon={<SchoolIcon />} >
                    <h3 className="vertical-timeline-element-title">University of Arizona
                        Tucson, Arizona
                    </h3>
                    <h4>Bachelors of Applied Science</h4>
                    <p>Network Administration</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="Graduated June 2023"
                    iconStyle={{ background: "#333", color: "#fff" }}
                    icon={<SchoolIcon />} >
                    <h3 className="vertical-timeline-element-title">University of Arizona
                        Tucson, Arizona
                    </h3>
                    <h4>Full Stack Developer Bootcamp</h4>
                    <p>Certification</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="2004-2015"
                    iconStyle={{ background: "#333", color: "#0a0652" }}
                    icon={<WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">Teletech
                    </h3>
                    <h4>Customer Support/Lost Package Investigation</h4>
                    <p>Assisted in front line customer support and promoted to the missing package department</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="2015-2019"
                    iconStyle={{ background: "#333", color: "#0a0652" }}
                    icon={<WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">Callpointe
                    </h3>
                    <h4>Tech Support and Strategic Account Specialist</h4>
                    <p>Handled inbound tech support calls promoted to the Strategic Accounts Team.  Worked with mySQL to update customer tables</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="2019-Present"
                    iconStyle={{ background: "#333", color: "#0a0652" }}
                    icon={<WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">Integrated Axis Technology Group
                    </h3>
                    <h4>Sytems and Network Support</h4>
                    <p>Handled trouble tickets pertaining to Windows and Network issues.</p>
                </VerticalTimelineElement>

            </VerticalTimeline>


        </div>
    )
}

export default Resume;