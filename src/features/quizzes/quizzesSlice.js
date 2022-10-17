import {createSlice} from '@reduxjs/toolkit';
import {addQuizId} from '../topics/topicsSlice.js';

export const createNewQuiz = (payload) => {
    const {topicId, id} = payload;
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: topicId, quizId: id}))
    }
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers:{
        addQuiz: (state, action) => {
            const quizToAdd = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
            state.quizzes[action.payload.id] = quizToAdd;
        }
    }
});

export const selectQuiz = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
