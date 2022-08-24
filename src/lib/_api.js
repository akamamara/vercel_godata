import {get } from 'svelte/store';
import { itemRisetGoData } from './store';
import { limitGoData, loadingLoadMore, loadMoreVisibility, pageGoData } from './store/risetStore';

// const baseUrl = import.meta.env.VITE_BASE_API;
const baseUrl = 'https://web-godata-admin-git-development-codepanda.vercel.app/api';
// const baseUrl = 'http://localhost:3000/api';

async function fetchApi(endpoint = '', method = 'GET') {
    return await fetch(baseUrl + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => res.json())
        .catch((err) => console.log(err));
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
export async function getRisetGoData(page = 1, year = 2022, limit = 6) {
    const res = await fetchApi(`/research-go-data?limit=${limit}&page=${page}&year=${year}`);
    return res;
}

export async function getRisetKmData(page = 1, ministry = '', limit = 6) {
    const res = await fetchApi(`/research-km-ipb?limit=${limit}&ministry=${ministry}&page=${page}`);
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