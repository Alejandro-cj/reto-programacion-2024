function getParams(url) {
    if (url.indexOf('?') === -1) return [];
    const params = url.slice(url.indexOf('?') + 1).split('&');
    return params?.map((el) => el.slice(el.indexOf('=') + 1));
  }
  
  // Tests
  console.log(getParams('https://retosdeprogramacion.com'));
  console.log(getParams('https://retosdeprogramacion.com?year=2023&challenge=0'));
  console.log(getParams('https://www.patreon.com/artechnaut/posts?filters%5Btag%5D=Battle'));
  console.log(getParams('https://www.youtube.com/results?search_query=mouradev'));
  console.log(getParams('https://www.youtube.com/watch?v=4Azc4Gs2nlU&t=334s'));
  