let username = "nata"
const HobManager = new hobManager()
const Renderer = new renderer

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
    HobManager.saveData(newData, username)
    Renderer.renderData(HobManager.user)
    HobManager.compare(Renderer.randetBest ,username)

})
HobManager.compare(Renderer.randetBest ,username)
function greet(user) {
    $("#welcomeUser").append(`<p>Welcome back ${user}, we missed you!</p>`)
}

