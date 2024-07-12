// useCapitalizeWords.js
function useProperCase(text:string):string {
    if (!text) return '';

    const capitalized = text.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');

    return capitalized;
}

export default useProperCase;
