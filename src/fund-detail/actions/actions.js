import {TOGGLETAB} from './constants';

export function toggleTab(tabIndex) {
    return {
        type: TOGGLETAB,
        tabIndex
    }
}