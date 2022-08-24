import { readable, writable } from 'svelte/store';

export const pageGoData = writable(1);
export const pageKm = writable(1);
export const maxPageKm = writable(2);
export const loadMoreVisibility = writable(true);

// Loading state
export const loadingRiset = writable(false);
export const loadingLoadMore = writable(false);

// Const
export const limitGoData = readable(6);
export const yearGoData = writable(2022);