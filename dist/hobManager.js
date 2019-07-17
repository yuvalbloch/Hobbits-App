class hobManager {
    constructor() {
        this.user = {}
    }

    saveData(data, userName ) {
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
    async compare (callback, userName) {
        const now = new Date().getTime()/86400000
        const users = await $.get("/users")
        const company = users.find(u => u.userName == userName).company
        let sort = users.filter( u => u.company = company)
        sort = sort.map(u => {return u.status})
        sort = sort.filter(u => u[0])
        sort = sort.map(u => u.filter(u =>u.date))
        sort = sort.map(u => u.filter(u=>u.date/86400000 +1 > now))
        sort = sort.map(u => {return u[u.length-1]})

        let bestsInFood = sort.sort(function (a, b) {
            return b.healtyFood - a.healtyFood;
        }).slice(0,3).filter(m => m.userName);
        let bestsInSport = sort.sort(function (a, b) {
            return b.sport - a.sport;
        }).slice(0,3).filter(m => m.userName);
        let bestsInSmile = sort.sort(function (a, b) {
            return b.smiles - a.smiles;
        }).slice(0,3).filter(m => m.userName);
        bestsInSport =bestsInSport.map(m => {return {userName :m.userName}})
        bestsInFood = bestsInFood.map(m => {return {userName :m.userName}})
        bestsInSmile =bestsInSmile.map(m => {return {userName :m.userName}})
        const bests = { bestsInSmile : bestsInSmile , bestsInSport : bestsInSport ,bestsInFood : bestsInFood}
        callback(bests)
    }
}
