import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => { 
    // receiving projects that was passed as a props to the ProjectList
    return(
        <div className="section project-list">
            { projects && projects.map(project => {
                return (
                    <ProjectSummary project={ project } key={ project.id } />
                )
            })}
            {/* 'projects && projects.map()' means that if there are projects available,
                then return a map of the projects. If there are no projects,
                output nothing.
            */}
        </div>
    )
}

export default ProjectList;