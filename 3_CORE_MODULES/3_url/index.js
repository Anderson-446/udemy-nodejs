const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parseUrl = new url.URL(address);

console.log(parseUrl.host); //www.meusite.com.br
console.log(parseUrl.pathname);///catalog
console.log(parseUrl.search);//?produtos=cadeira
console.log(parseUrl.searchParams);//URLSearchParams { 'produtos' => 'cadeira' }
console.log(parseUrl.searchParams.get('produtos'));//cadeira