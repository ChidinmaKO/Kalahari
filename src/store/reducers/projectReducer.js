const initState = {
    projects: [
        {id: '1', title: 'Create New Dashboard', content: 'blah blah blah'},
        {id: '2', title: 'Teach Pytorch to Beginners', content: 'yada yada yada'},
        {id: '3', title: 'Host Study Session', content: 'yada blah yada'},
        {id: '4', title: 'Stay Awesome', content: 'content content content'}

    ]
}

const projectReducer = (state=initState, action) => {
    // console.log(state);
    return state;
}

export default projectReducer;