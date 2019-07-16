let username = "Dani"
const hobManager = new hobManager()
const renderer = new renderer

// function greet(){
    
// }

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
    hobManager.saveData(newData,username)
})
