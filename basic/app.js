new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        greetings: "Hello",
        url: "https://youtube.com",
        classes: ['one', 'two'],
        numb: 1,
        mouse: {
            x: 0,
            y: 0
        },
        name: "Budi",
        result: "",
        showName: true,
        showAge: true,
        avengers: ['Ironman', 'Captain America', 'Hulk', 'Black Widow', 'Hawkeye'],
        avengersBio: [
            { name: "Ironman", age: 51 },
            { name: "Captain America", age: 70 },
            { name: "Hulk", age: 40 },
            { name: "Black Widow", age: 30 },
            { name: "Hawkeye", age: 35 }
        ]
    },
    // Create methods in vue instance
    methods: {
        greet(time) {
            return `${this.greetings} and good ${time}, Budi!`
        },
        changeCounter(amount) {
            this.numb += amount
        },
        logCoordinates(e) {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
        },
        updateName(e) {
            this.name = e.target.value
        },
        altClick() {
            console.log("Hello! this is Alt + Click")
        },
        toogleName() {
            // The value always the will alwasy the opposite of previous value
            this.showName = !this.showName
        },
        toogleAge() {
            // The value always the will alwasy the opposite of previous value
            this.showAge = !this.showAge
        }
    }
})