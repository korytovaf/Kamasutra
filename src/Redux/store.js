/*
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {

        massagesPage: {
            dialogsData: [
                {id: 1, login: 'kris', name: 'Кристина'},
                {id: 2, login: 'kirill', name: 'Кирилл'},
                {id: 3, login: 'nata', name: 'Наталья'},
                {id: 4, login: 'uliya', name: 'Юлия'},
                {id: 5, login: 'matvey', name: 'Матвей'},
                {id: 6, login: 'sony', name: 'София'}
            ],

            massagesData: [
                {id: 1, login: 'kris', massage: 'Привет!'},
                {id: 2, login: 'admin', massage: 'Как дела!'},
                {id: 3, login: 'kris', massage: 'Все нормально!'},
                {id: 4, login: 'admin', massage: 'Изучаю реакт на IT-Kamasutra.'}
            ],

            newMassageText: ''
        },

        postPage: {
            postsData: [
                {id: 1, login: 'admin', post: 'Привет, это мой первый пост', like: 0, date: '21/05/2019 18:00'},
                {id: 2, login: 'admin', post: 'Привет, это мой второй пост', like: 0, date: '21/05/2019 18:00' },
                {id: 3, login: 'admin', post: 'Это третий пост!!!', like: 0, date: '21/05/2019 18:00' }
            ],
            newPostText: ''
        }
    },

    _subscribe(observer) {
        this.renderAll = observer;
    },

    _renderAll() {
        console.log('State изменился')
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.massagesPage = dialogReducer(this._state.massagesPage, action);
        this._state.postPage = profileReducer(this._state.postPage, action);

        this.renderAll(this._state);
    }
}


export default store*/
