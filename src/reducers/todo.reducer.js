const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id:action.id,
                    complete: action.complete,
                    text: action.text
                }
                ];
        default:
            return state;
    }
}

export default todos;