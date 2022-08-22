import { stateGoData, stateKm } from '$lib/store';
import { loadMoreVisibility, pageGoData } from '$lib/store/risetStore';

export function updateStateTypeRiset(route = '') {
    switch (route) {
        case 'km':
            stateGoData.set(false);
            stateKm.set(true);
            break;
        default:
            stateGoData.set(true);
            stateKm.set(false);
            break;
    }
}

export function resetPaginationGoData() {
    loadMoreVisibility.set(true);
    pageGoData.set(1);
}