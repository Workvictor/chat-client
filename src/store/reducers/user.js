const onlineStatus=[
  `online`,
  `afk`
];

const initialState={
  id: null,
  name: null,
  online: onlineStatus[0],
};

const availableTypes=[
  `user_reset`,
  `user_update`
];

const returnState=(state, payload)=>({
  undefined: state,
  [`user_reset`]: initialState,
  [`user_update`]: {
    ...state,
    ...payload
  },
});

const getProperType=type=>(availableTypes.find(prop=>prop===type));

export const user=(state=initialState, action)=>{
  const { type, payload }=action;
  return returnState(state, payload)[getProperType(type)];
};