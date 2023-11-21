
export default function localStoragedata() {
    const notedata = localStorage.getItem('data');
    if (notedata) {
        return JSON.parse(notedata);
    }
    else {
        return [];
    }
}
