const initState = {
    projects: [
        {id: '1', title: 'Create New Dashboard', content: 'blah blah blah'},
        {id: '2', title: 'Teach Pytorch to Beginners', content: 'yada yada yada'},
        {id: '3', title: 'Host Study Session', content: 'yada blah yada'},
        {id: '4', title: 'Stay Awesome', content: 'content content content'}

    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
        //     break;
        // default:
        //     console.log('hey');
        //     break;
    }
    return state;
}

export default projectReducer;