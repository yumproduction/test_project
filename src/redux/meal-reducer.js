const SET_SELECTED = 'test-project/selected/SET_SELECTED';
const SET_HOVERED = 'test-project/selected/SET_HOVERED';


let initialState = {
    food: [
        {
            id: 1,
            name: 'фуа-гра',
            portionCount: 10,
            mouseCount: 'мышь',
            weigth: '0,5',
            description: 'Печень утки разварная с артишоками.',
            inStock: true,
            selected: false,
            hovered: false
        },
        {
            id: 2,
            name: 'рыбой',
            portionCount: 40,
            mouseCount: '2 мыши',
            weigth: '2',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            inStock: true,
            selected: false,
            hovered: false
        },
        {
            id: 3,
            name: 'курой',
            portionCount: 100,
            mouseCount: '2 мыши',
            weigth: '5',
            description: 'Филе из цыплят с трюфелями в бульоне.',
            inStock: false,
            selected: false,
            hovered: false
        }
    ]
}

const mealReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SELECTED:
            return {
                ...state,
                food: state.food.map(f => {
                    if (f.id === action.id) return { ...f, selected: !f.selected }

                    return f
                })
            }
        case SET_HOVERED:
            return {
                ...state,
                food: state.food.map(f => {
                    if (f.id === action.id && f.selected) return { ...f, hovered: action.hovered }

                    return f
                })
            }
        default:
            return state
    }
}

export const setSelected = (id) => ({ type: SET_SELECTED, id });
export const setHovered = (id, hovered) => ({ type: SET_HOVERED, id, hovered });




export default mealReducer;