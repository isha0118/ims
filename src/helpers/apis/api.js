export const deleteItems = deleteId => {
    fetch(`/api/items/${deleteId}`, {
        method: 'DELETE'
    })
    .catch(error => {
        console.error(error);
    });
}

export const updateItems = async (value) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
    };
    const response  = await fetch(`/api/items/${value.id}`, requestOptions)
        .then(response => response.json())
    .catch(error => {
        console.error(error);
    });
    return response;
}

export const bulkUpdateItems = async (rows) => {
    const result = [];
    rows.forEach(async (value, i) => {
        if(i>0) {
            const resp = await updateItems(value);
            result.push(resp);
        }
    });
    return result;
}

