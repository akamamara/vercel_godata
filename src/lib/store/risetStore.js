import { readable, writable } from 'svelte/store';

export const loadingRiset = writable(false);
export const pageGoData = writable(1);
export const pageKm = writable(1);
export const loadMoreVisibility = writable(true);

// Const
export const limitGoData = readable(6);