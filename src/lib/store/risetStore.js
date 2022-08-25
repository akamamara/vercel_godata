import { readable, writable } from 'svelte/store';

// GODATA
export const pageGoData = writable(1);
export const loadMoreVisibility = writable(true);

// KM
export const pageKm = writable(1);
export const maxPageKm = writable(2);
export const yearGoData = writable(new Date().getFullYear());
export const ministryKm = writable('');

// Loading state
export const loadingRiset = writable(false);
export const loadingLoadMore = writable(false);

// Const
export const limitGoData = readable(6);