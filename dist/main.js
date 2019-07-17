let username = "Dani"
const HobManager = new hobManager()
const Renderer = new renderer
let dailyQoute

greet(username)

$('#updateButton').one('click', function () {
    let water = $(this).siblings('#insertWater').val()
    let vegetables = $(this).siblings('#insertVeg').val()
    let floors = $(this).siblings('#insertFood').val()
    let smiles = $(this).siblings('#insertSmiles').val()
    let newData = {
        water: water,
        vegetables: vegetables,
        floors: floors,
        smiles: smiles
    }
    console.log(newData)
    HobManager.saveData(newData, username)
    Renderer.renderData(HobManager.user)
})
HobManager.compare()

function greet(user) {
    $("#welcomeUser").append(`<p>Welcome back ${user}, we missed you!</p>`)
}


$.get('/qoute', function(res){
    const qoute = JSON.parse(res.body).contents.quotes[0].quote
    dailyQoute = qoute
    console.log(qoute)
    console.log(dailyQoute)
})

