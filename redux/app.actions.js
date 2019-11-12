export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';

export function addListItem(payload) {
    return { type: ADD_LIST_ITEM, payload: payload }
}
