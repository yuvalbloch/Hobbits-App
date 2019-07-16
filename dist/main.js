let username = "Dani"
const HobManager = new hobManager()
const Renderer = new renderer
greet(username)

$('#updateButton').on('click', function(){
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
    HobManager.saveData(newData,username)
    Renderer.renderData(HobManager.user)
})

function greet(user){
    $("#welcomeUser").append(`<p>Welcome back: ${user}</p>`)
}
