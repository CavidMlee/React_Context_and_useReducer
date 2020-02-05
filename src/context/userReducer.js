export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: Math.random(),
                    name: action.user.name,
                    about: action.user.about
                }
            ]
        default:
            return state;
    }
}