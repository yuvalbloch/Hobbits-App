class renderer{
    constructor(){

    }
    renderData(todayData){
        $("#hobbits").empty()
        console.log(todayData)
        const source   = $("#hobbies-template").html()
        const template = Handlebars.compile(source);
        let someHTML = template(todayData)
        $("#hobbits").append(someHTML)
    }
} 