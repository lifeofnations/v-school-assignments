function authenticatePony(body) {
    if (body.imgUrl === undefined) return false;
    if (body.name === undefined) return false;
    if (body.name.length <= 3) return false;
    if (body.name.search(/[^a-z|^ ]/i) >= 0) return false;
    if (body.username === undefined) body.username = "Anonymous";
    return true;
}

module.exports = authenticatePony;