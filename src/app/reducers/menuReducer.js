const initialState = {
    homeLink: 'Home'
}

const reducer = (state = initialState, action) => {
    if (state == null) {
        return initialState
    }

    switch (action.type) {
        case 'MNU_UPDATE_HOME':
            return {
                ...state,
                homeLink: action.payload
            }
    }
}

export default reducer
