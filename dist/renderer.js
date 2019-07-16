class renderer {
    constructor() {

    }
    renderData(todayData) {
        console.log(todayData)
        const source = $("#hobbies-template").html()
        const template = Handlebars.compile(source);
        let someHTML = template(todayData)
        $("#userDay").append(someHTML)
    }
 } 