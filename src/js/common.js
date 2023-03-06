
export function resetStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("reset Storage");
}