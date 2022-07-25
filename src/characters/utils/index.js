export function extractIdFromUrl(url) {
    console.log({url});
    console.log(url.split("/"));

    return url.split("/")[5]
}