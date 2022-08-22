import { writable } from 'svelte/store';

// Form
export const formData = writable({
    _id: '',
    survey: '',
    research: '',
    __v: 0
});

// Home
export const newsData = writable([{
    date: '',
    image: '',
    title: '',
    description: ''
}]);

// Riset
export const stateGoData = writable(true);
export const stateKm = writable(false);
export const itemRisetGoData = writable([{
    _id: '',
    year: '',
    title: '',
    description: '',
    responden: 0,
    report: '',
    image: '',
    __v: 0
}]);

export const itemRisetKm = writable([{
    _id: '',
    ministry: '',
    title: '',
    description: '',
    researcher: '',
    date: '',
    report: '',
    __v: 0
}]);

// Tentang
export const aboutDescData = writable([{
    _id: '',
    description: 'GODATA merupakan sebuah portal informasi yang berisikan data demografis, kemahasiswaan, dan pergerakan Mahasiswa Institut Pertanian Bogor untuk mewujudkan BEM KM IPB based on data driven. Berdasarkan pengambilan data yang kami lakukan, fungsi GODATA IPB terbagi menjadi GO-DATA SURVEYS, GO-DATA BASE dan GO-DATA RESEARCH.\nSecara struktural, GODATA dikelola oleh Biro Riset dan Pengembangan BEM KM IPB setiap tahunnya. Biro Riset dan Pengembangan sendiri muncul dikarenakan adanya keresahan terhadap data, baik secara pengumpulan maupun arsip dan penyimpanannya di BEM KM IPB. GODATA secara resmi diperkenalkan pada bulan Maret 2016 oleh Biro Riset dan Pengembangan namun hanya tersedia di Line Account dan Instagram dikarenakan adanya beberapa kendala teknis. GODATA mulai hadir dalam bentuk website pada bulan November 2016 sehingga lebih mudah diakses oleh semua kalangan masyarakat.',
    __v: 0
}]);

export const aboutPersonData = writable([{
    _id: '',
    division: '',
    name: '',
    position: '',
    image: '',
    __v: ''
}]);