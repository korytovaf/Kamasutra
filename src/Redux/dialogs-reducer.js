const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, login: 'kris', name: 'Кристина'},
        {id: 2, login: 'kirill', name: 'Кирилл'},
        {id: 3, login: 'nata', name: 'Наталья'},
        {id: 4, login: 'uliya', name: 'Юлия'},
        {id: 5, login: 'matvey', name: 'Матвей'},
        {id: 6, login: 'sony', name: 'София'}
    ],

    messagesData: [
        {id: 1, login: 'kris', message: 'Привет!'},
        {id: 2, login: 'admin', message: 'Как дела!'},
        {id: 3, login: 'kris', message: 'Все нормально!'},
        {id: 4, login: 'admin', message: 'Изучаю реакт на IT-Kamasutra.'}
    ]
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 10,
                login: 'admin',
                message: action.newMessage
            }
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            return stateCopy;

        default:
            return state;
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogReducer;