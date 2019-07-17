class hobManager {
    constructor() {
        this.user = {}
    }

    saveData(data, userName) {
        const status = {
            userName: userName,
            date: new Date().getTime(),
            healtyFood: parseInt(data.vegetables) + parseInt(data.water),
            sport: data.floors,
            smiles: data.smiles,
        }

        this.user = status
        $.ajax({
            type: "PUT",
            url: `/updateuser/${userName}`,
            data: status,
            success: function () {
                console.log("success")
            },
        });

    }
    async compare(callback, userName) {
        const now = new Date().getTime() / 86400000
        const users = await $.get("/users")
        const company = users.find(u => u.userName == userName).company
        let sort = users.filter(u => u.company = company)
        sort = sort.map(u => { return u.status })
        sort = sort.filter(u => u[0])
        sort = sort.map(u => u.filter(u => u.date))
        sort = sort.map(u => u.filter(u => u.date / 86400000 + 1 > now))
        sort = sort.map(u => { return u[u.length - 1] })

        let bestsInFood = sort.sort(function (a, b) {
            return b.healtyFood - a.healtyFood;
        }).slice(0, 3).filter(m => m.userName);
        let bestsInSport = sort.sort(function (a, b) {
            return b.sport - a.sport;
        }).slice(0, 3).filter(m => m.userName);
        let bestsInSmile = sort.sort(function (a, b) {
            return b.smiles - a.smiles;
        }).slice(0, 3).filter(m => m.userName);
        bestsInSport = bestsInSport.map(m => { return { userName: m.userName } })
        bestsInFood = bestsInFood.map(m => { return { userName: m.userName } })
        bestsInSmile = bestsInSmile.map(m => { return { userName: m.userName } })
        const bests = { bestsInSmile: bestsInSmile, bestsInSport: bestsInSport, bestsInFood: bestsInFood }
        callback(bests)
    }

    async getCharts(username) {
        let data = await $.get('/users')
        let userObject = data.filter(u => u.userName == username)
        console.log(userObject)
        let healthData = userObject[0].status.map(s => s.healtyFood)
        console.log(healthData.length-5)
        healthData = healthData.splice(0, (healthData.length - 5))
        console.log(userObject)
        let sportData = userObject[0].status.map(s => s.sport)
        sportData = sportData.splice(0, sportData.length - 5)

        let smilesData = userObject[0].status.map(s => s.smiles)
        smilesData = smilesData.splice(0, smilesData.length - 5)
        let dates = [1,2,3,4,5]
        paint(dates,healthData, "healthChart")
        paint(dates,sportData, "sportChart")
        paint(dates,smilesData,"smilesChart")
    }
}
