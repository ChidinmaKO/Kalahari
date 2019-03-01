import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = (props) => {
    // console.log(props);
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia deleniti, veniam voluptates facere ipsa excepturi! 
                        Magni, sequi? Molestias minus quisquam, explicabo quam pariatur delectus, maiores voluptas quidem magni, commodi velit!
                    </p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Chidinma K.</div>
                    <div>13th January 2019, 7pm</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // return{
    //     projects: state.
    // }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetail);
