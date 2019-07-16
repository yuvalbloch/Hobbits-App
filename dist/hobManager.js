class hobManager{
    constructor() {
        this.user = {}
    }
    saveData(data,userName ) {
        const status = {
            userName: userName,
            date: new Date(),
            healtyFood: data.vegetabels + data.water,
            sport: data.floor,
            smiles: data.smiles,
        }

        this.user = status
        $.ajax({
            type: "put",
            url: "/updateuser/:" +userName ,
            data: status,
            success: function (data) {
                console.log("sucses")
            },
        });

    }
    compare () {
        $.get('/users' , function () {

        })
    }
}
