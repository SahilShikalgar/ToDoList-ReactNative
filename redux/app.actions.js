export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const GET_LIST_ITEMS = 'GET_LIST_ITEMS';

export function addListItem(payload) {
    return { type: ADD_LIST_ITEM, payload: payload }
}

export function getListItems() {
    return { type: GET_LIST_ITEMS }
}
