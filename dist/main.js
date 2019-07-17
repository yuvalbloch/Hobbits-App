let username = "Dani"
const HobManager = new hobManager()
const Renderer = new renderer()
// let dailyQoute

greet(username)
loadPage(username)

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
    HobManager.saveData(newData, username)
    Renderer.renderData(HobManager.user)
    HobManager.compare(Renderer.randetBest ,username)

})
HobManager.compare(Renderer.randetBest ,username)
function greet(user) {
    $("#welcomeUser").append(`<p>Welcome back ${user}, we missed you!</p>`)
}



// $.get('/qoute', function(res){
//     const qoute = JSON.parse(res.body).contents.quotes[0].quote
//     dailyQoute = qoute
//     $("#qoutes").append(`<p>${dailyQoute}</p>`)
// })

async function loadPage(){
let today = new Date().getTime()/86400000
const users = await $.get('/users')
let statuses = users.filter(u=> u.userName == username)
statuses = statuses[0].status.filter(s=>s.date/86400000+0.5 > today)
console.log(statuses[0])
if(statuses[0]) {
    Renderer.renderData(statuses[0])
   $('#info').hide()
}
}
