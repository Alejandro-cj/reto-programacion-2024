function fetchDATA(URL) {
    fetchDATA(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
fetchData('https://rickandmortyapi.com/api');
