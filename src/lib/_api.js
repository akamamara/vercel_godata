import { browser } from '$app/env';
import {get } from 'svelte/store';
import { itemRisetGoData, loading } from './store';
import {
    limitGoData,
    loadingLoadMore,
    loadingRiset,
    loadMoreVisibility,
    ministryKm,
    pageGoData
} from './store/risetStore';

// const baseUrl = import.meta.env.VITE_BASE_API;
const baseUrl = 'https://web-godata-admin-git-development-codepanda.vercel.app/api';
// const baseUrl = 'http://localhost:3000/api';

const currentYear = new Date().getFullYear();
const currentMinistry = get(ministryKm);

async function fetchApi(endpoint = '', component = false, method = 'GET') {
    if (!get(loading) && !component) loading.set(true);
    let data;
    const res = await fetch(baseUrl + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(res.status + '. Something went wrong. Message: ' + res.statusText);
        })
        .catch((err) => {
            if (browser) alert(err);
            console.error(err);
        })
        .finally(() => loading.set(false));
    data = res;
    return data;
}
// TODO: Add fallback when message not success

// Form
export async function getFormData() {
    const res = await fetchApi('/form');
    return res;
}

// Home
export async function getHomeNews() {
    const res = await fetchApi('/news');
    return res;
}

// Riset
export async function getRisetGoData(page = 1, year = currentYear, component = true, limit = 6) {
    const res = await fetchApi(
        `/research-go-data?limit=${limit}&page=${page}&year=${year}`,
        component
    ).then((res) => {
        if (res.data.results.length < get(limitGoData)) {
            loadMoreVisibility.set(false);
        } else {
            loadMoreVisibility.set(true);
        }
        return res;
    });
    return res;
}

export async function getRisetKmData(
    page = 1,
    ministry = currentMinistry,
    component = true,
    limit = 6
) {
    loadingRiset.set(true);
    const res = await fetchApi(
        `/research-km-ipb?limit=${limit}${'&ministry=' + ministry.toLowerCase()}&page=${page}`,
        component
    ).finally(() => loadingRiset.set(false));
    return res;
}

export async function getRisetGodataById(id = '') {
    const res = await fetchApi('/research-go-data/' + id);
    return res;
}

export async function getRisetKmById(id = '') {
    const res = await fetchApi('/research-km-ipb/' + id);
    return res;
}

export async function loadMoreRisetGoData(year = 2022) {
    pageGoData.update((n) => n + 1);
    getRisetGoData(get(pageGoData), year).then((res) => {
        let result = res.data.results;

        if (result.length < get(limitGoData)) loadMoreVisibility.set(false);
        itemRisetGoData.set([...get(itemRisetGoData), ...result]);
        loadingLoadMore.set(false);
    });
}

// Database
export async function getDatabaseData() {
    const res = await fetchApi('/database');
    return res;
}

// Tentang
export async function getAboutDescription() {
    const res = await fetchApi('/about');
    return res;
}

export async function getListDivisionPerson() {
    const res = await fetchApi('/person');
    return res;
}