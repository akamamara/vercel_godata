import {get } from 'svelte/store';
import { itemRisetGoData } from './store';
import { limitGoData, loadMoreVisibility, pageGoData } from './store/risetStore';

let baseUrl = 'https://web-godata-admin-git-development-codepanda.vercel.app/api';

// TODO: Add fallback when message not success

// Form
export async function getFormData() {
    const res = await fetch(baseUrl + '/form').then((res) => res.json());
    return res;
}

// Home
export async function getHomeNews() {
    const res = await fetch(baseUrl + '/news').then((res) => res.json());
    return res;
}

// Riset
export async function getRisetGoData(page = 1, limit = 6) {
    const res = await fetch(`${baseUrl}/research-go-data?limit=${limit}&page=${page}`).then((res) =>
        res.json()
    );
    return res;
}

export async function getRisetKmData(page = 1, limit = 6) {
    const res = await fetch(`${baseUrl}/research-km-ipb?limit=${limit}&page=${page}`).then((res) =>
        res.json()
    );
    return res;
}

export async function getRisetGodataById(id = '') {
    const res = await fetch(baseUrl + '/research-go-data/' + id).then((res) => res.json());
    return res;
}

export async function getRisetKmById(id = '') {
    const res = await fetch(baseUrl + '/research-km-ipb/' + id).then((res) => res.json());
    return res;
}

export async function loadMoreRisetGoData() {
    pageGoData.update((n) => n + 1);
    getRisetGoData(get(pageGoData)).then((res) => {
        let result = res.data.results;
        if (result.length < get(limitGoData)) loadMoreVisibility.set(false);
        itemRisetGoData.set([...get(itemRisetGoData), ...result]);
    });
}

// Database

// Tentang
export async function getAboutDescription() {
    const res = await fetch(baseUrl + '/about').then((res) => res.json());
    return res;
}

export async function getListDivisionPerson() {
    const res = await fetch(baseUrl + '/person').then((res) => res.json());
    return res;
}