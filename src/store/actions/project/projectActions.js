export const createProject = (project) => {
    // not returning an object/action but a function.
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyncronous call to database
        const fireStore = getFirestore();

        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Chidinma',
            authorLastName: 'Kalu',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};