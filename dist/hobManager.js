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

    async getCharts(username ,ida ) {
        const id =ida  || ["healthChart","sportChart","smilesChart"]
        let data = await $.get('/users')
        let userObject = data.filter(u => u.userName == username)
        let healthData = userObject[0].status.map(s => s.healtyFood)
        if (healthData.length >5) {
            healthData = healthData.splice(0, (healthData.length - 5))
        }
        let sportData = userObject[0].status.map(s => s.sport)
        if (sportData.length > 5) {
            sportData = sportData.splice(0, sportData.length - 5)
        }
        let smilesData = userObject[0].status.map(s => s.smiles)
        if (smilesData.length > 5) {
            smilesData = smilesData.splice(0, smilesData.length - 5)
        }
        let dates = [1,2,3,4,5]
        paint(dates,healthData, id[0] ,"helath")
        paint(dates,sportData, id[1] ,"sport")
        paint(dates,smilesData,id[2] ,"smile")
    }
    createUser(name , password ,company)
    {
        const obj = {
            isManager : false,
            company: company,
            userName: name,
            password:  password,

        }
        $.post("/user" , obj )
    }
    async exsistUsers(name, password){
       const users = await $.get('/users')
       const user = users.find( u => u.userName == name)
       if(user){
           if(user.password == password){
            username =name 
            $("#sign").hide()
            greet(username)
            loadPage(username)
            peaceandlove()
               if ( user.isManager)
               {
                   $("#userContainer").append(`<button id = 'allCharts'>Manager button <i class="fas fa-user-secret"></i>

                   </button>`)
               }
           }
           else {
               alert("password did not curect")
           }
       }
       else
       {
           alert("user name in not exsist")
       }
    }
    async showAll()
    {
        console.log("in")
        let data = await $.get('/users')
        data = data.map(m => m.userName)
        console.log(data)
        let i = 0
        for (let d of data )
        {
            const obj = {health : "a" + i,sport : "b" +i ,smile :"c" +i ,userName :d}
            const source = $("#showAll-template").html()
            const template = Handlebars.compile(source)
            let someHTML = template(obj)
            $("#manger").append(someHTML)
            this.getCharts(d, ["a" +i , "b" +i , "c" +i])
            i++
        }
    }
}
