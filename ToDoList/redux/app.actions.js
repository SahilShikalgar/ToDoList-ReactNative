export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';

export class addListItem {
    type = ADD_LIST_ITEM;

    constructor(payload) {
        this.payload = payload;
    }
}
