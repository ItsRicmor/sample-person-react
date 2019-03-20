const URL = 'localhost:8443'

export const getAll = async (controller) => {
    try {
        let response = await fetch(`http://${URL}/${controller}`, {
            method: 'GET'
        });
        let objectJsonList = await response.json();
        return objectJsonList;
    } catch (error) {
        console.log(error);
    }
}