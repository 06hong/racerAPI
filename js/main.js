const getData = async () => {
    let response = await axios.get('http://ergast.com/api/f1/<season>/<round>/driverStandings.json')
    return response.data
};


