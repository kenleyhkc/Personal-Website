import React from 'react';
import {VerticalTimeline, VerticalTimelineElement}from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
class Education extends React.Component{
    render(){
        return (
        <div id="education">
            <VerticalTimeline>
                <VerticalTimelineElement
                className="timeline"
                date="2016-2019"
                iconStyle={{background:'rgb(33,150,243)',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                >
                    <h3>Bachelor of Engineering with Major in Computer Engineering</h3>
                    <h4>HKUST</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="timeline"
                date="2014-2016"
                iconStyle={{background:'rgb(33,150,243)',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                >
                    <h3>Associate of Engineering (DISTINCTION)</h3>
                    <h4>CCCU</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="timeline"
                date="2007-2014"
                iconStyle={{background:'rgb(33,150,243)',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                >
                    <h3>College</h3>
                    <h4>CCCMYC</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
            
        </div>
        )
    }
}

export default Education;