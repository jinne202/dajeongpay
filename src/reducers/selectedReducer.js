export const selectInitialState = {
    emotionCard : '',
}

export const SELECT_EMOTION = 'SELECT_EMOTION';

export const selectEmotionAction = (payload) => {
    return {
      type: SELECT_EMOTION,
      payload,
    };
  };

export const selectedReducer = (state = selectInitialState, action) =>
{
    switch (action.type) {
      case SELECT_EMOTION: {
        // if (emotionCard.includes(action.payload)) {
        //   console.log("중복")
        //   return state;
        // }
        return {
          ...state,
          emotionCard : action.payload
        };
      }
      default: {
        console.log(state, "select state");
        return {
          ...state,
        };
      }
    }
};