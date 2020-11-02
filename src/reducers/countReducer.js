export const countInitialState = {
    joyNumber : 21,
    kindNumber : 19,
    thanksNumber : 30,
    unComfNumber : 8,
    fundingPeople : 60,
}

export const JOY_INCREMENT = 'JOY_INCREMENT';
export const KIND_INCREMENT = 'KIND_INCREMENT';
export const THANKS_INCREMENT = 'THANKS_INCREMENT';
export const UN_INCREMENT = 'UN_INCREMENT';
export const PEOPLE_INCREMENT = 'PEOPLE_INCREMENT';

export const joyIncrementAction = () => ({
  type: JOY_INCREMENT
});

export const kindIncrementAction = () => ({
  type: KIND_INCREMENT
});

export const thanksIncrementAction = () => ({
  type: THANKS_INCREMENT
});

export const unIncrementAction = () => ({
  type: UN_INCREMENT
});

export const peopleIncrementAction = () => ({
  type: PEOPLE_INCREMENT
});

export const countReducer = (state = countInitialState, action) =>
{
    switch (action.type) {
      case JOY_INCREMENT: {
        return {
          ...state,
          joyNumber: state.joyNumber + 1 ,
        };
      }
      case KIND_INCREMENT: {
        return {
          ...state,
          kindNumber: state.kindNumber + 1 ,
        };
      }
      case THANKS_INCREMENT: {
        return {
          ...state,
          thanksNumber: state.thanksNumber + 1 ,
        };
      }
      case UN_INCREMENT: {
        return {
          ...state,
          unComfNumber: state.unComfNumber + 1 ,
        };
      }
      case PEOPLE_INCREMENT: {
        return {
          ...state,
          fundingPeople: state.fundingPeople + 1 ,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
};