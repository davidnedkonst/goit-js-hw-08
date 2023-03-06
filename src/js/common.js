


export default function resetStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}