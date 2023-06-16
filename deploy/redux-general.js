export const UPDATE_PAGE = 'UPDATE_PAGE';
;
const start = {
    page: 'primary-contract'
};
export const app = (state = start, action) => {
    switch (action.type) {
        case UPDATE_PAGE: return { ...state, page: action.page };
        default:
            return state;
    }
};
export const loadPage = (page) => async (dispatch) => {
    switch (page) {
        case 'primary-contract':
            import('./primary-contract');
            break;
        case 'sub-contract':
            import('./sub-contract');
            break;
        case 'purchase-order':
            import('./purchase-order');
            break;
        case 'warranty-contract':
            import('./warranty-contract');
            break;
        default:
            await import('./primary-contract');
    }
    dispatch(updatePage(page));
};
const updatePage = (page) => {
    return { type: UPDATE_PAGE, page };
};
//# sourceMappingURL=redux-general.js.map