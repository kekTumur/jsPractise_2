const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error('not fetch')
    }
    return await res.json();
};

export {postData, getResource};