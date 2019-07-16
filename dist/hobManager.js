class hobManager {
    constructor() {
        this.user = {}
    }
    saveData(data, userName) {
        const status = {
            userName: userName,
            date: new Date(),
            healtyFood: data.vegetables + data.water,
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
    compare() {
        $.get('/users', function () {

        })
    }
}
