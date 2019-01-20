export const createProject = (project) => {
    // not returning an object/action but a function.
    return (dispatch, getState) => {
        // make asyncronous call to database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};