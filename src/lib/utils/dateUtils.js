export function getDate(raw) {
    let data = new Date(raw);
    return data.toLocaleString('id-ID', { dateStyle: 'full' });
}