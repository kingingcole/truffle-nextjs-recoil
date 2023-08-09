import { atom } from "recoil";

const ethState = atom({
    key: 'ethState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default ethState;