class renderer {
    constructor() {

    }
    renderData(todayData) {
        const source = $("#hobbies-template").html()
        const template = Handlebars.compile(source);
        let someHTML = template(todayData)
        $("#userDay").append(someHTML)
    }
    randetBest(data)
    {
        $("#best").empty()
        const source = $("#bests-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template(data)
        $("#best").append(someHTML)
    }
 } 