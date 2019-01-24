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
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            // console.log('this is just the default');
            return state;
    }
}

export default projectReducer;