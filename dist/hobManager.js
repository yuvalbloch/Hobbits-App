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
    async compare () {
        const now = new Date().getTime()/86400000
        console.log("in")
        const users = await $.get("/users")
        let sort = users.map(u => {return u.status})
        sort = sort.filter(u => u[0])
        sort = sort.map(u => u.filter(u =>u.date))
        sort = sort.map(u => u.filter(u=>u.date/86400000 +1 > now))
        sort = sort.map(u => {return u[u.length]})
        let bestsInFood = sort.sort(function (a, b) {
            return b.healtyFood - a.healtyFood;
        }).slice(0,3);
        let bestsInSport = sort.sort(function (a, b) {
            return b.sport - a.sport;
        }).slice(0,3);
        let bestsInSmile = sort.sort(function (a, b) {
            return b.smile - a.smile;
        }).slice(0,3);
        bestsInSport =bestsInSport.map(m => {return m.userName})
        bestsInFood = bestsInFood.map(m => {return m.userName})
        bestsInSmile =bestsInSmile.map(m => {return m.userName})
        const bests = { bestsInSmile : bestsInSmile , bestsInSport : bestsInSport ,bestsInFood : bestsInFood}
     console.log(bests)
        return bests
    }
}
