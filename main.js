autoplay: false
autoplayTimeout: 5000
autoplayHoverPause: false

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

const picture_sec = document.querySelector(".picture")

const countries = [

    {
        name: " Greece",
        country: "./Img/Greece/Greece.webp",
        img: [

            {
                name: 'Acropolis',
                image: './Img/Greece/Athens.jpg',
                location: "fa fa-map-marker",
                info: "Located in a neoclassical building, just 400 metres from the New Acropolis Museum, SV Acropolis Residence offers 2 independent self-catering apartments with free WiFi access.",
                link: "https://www.booking.com/hotel/gr/1920-39-s-apartment-next-to-acropolis.en-gb.html?aid=314919&label=acropolis-3SNrrvQwI1dcxvrUDey7EgS384362696381%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-146342138710%3Akwd-17401766521%3Alp9070053%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfOICo1LOVmejEBpLq7NOGI&sid=2d61b7fe303ce8e6779197d40a7150ab",
                price: "170,433",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            },
            {
                name: "Blue Caves",
                image: './Img/Greece/blue-caves.jpg',
                location: "fa fa-map-marker",
                info: "Boasting garden views, Akachichi Guesthouse features accommodation with a garden and a terrace, around a 7-minute walk from Maeda Cape.",
                price: "51,295",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            },
            {
                name: "Corfu Beach",
                image: "./Img/Greece/corfu-beach.jpg",
                location: "fa fa-map-marker",
                info: "Set in Benitses, 400 metres from Kaiser Bridge Beach, El Greco hotel by Estia offers accommodation with a shared lounge, free private parking, a terrace and a bar. The 2-star hotel has air-conditioned rooms with a private bathroom and free WiFi. Each room has a patio.",
                price: "120,000",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            },
            {
                name: "Paros",
                image: "./Img/Greece/paros.jpg",
                location: "fa fa-map-marker",
                info: "Boasting a bar, garden, free WiFi, Pousada Aquarela Pirenopolis is situated in Pirenópolis, less than 1 km from Nossa Senhora do Rosario Church and an 11-minute walk from Cavalhadas Museum.",
                price: "15,737",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            },
            {
                name: "My Konos",
                image: './Img/Greece/mykonos.jpg',
                location: "fa fa-map-marker",
                info: "Palladium Hotel is located at Platys Gyalos, a 5-minute walk from Psarou and Platys Gyalos Beaches, as well as just a breath away from the famous Nammos.",
                price: "253,360",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            },
            {
                name: 'Delpthi',
                image: './Img/Greece/delphi.jpg',
                location: "fa fa-map-marker",
                info: "Hotel Orfeas is situated at a quite area, only 200 metres from Delphi’s centre. It is a family-owned hotel with rooms with magnificent views.",
                price: "14,442",
                hotel_imgs: [
                    './Img/Greece/athens_hotel.jpg',
                    './Img/Greece/athens_hotel.2jpg.jpg',
                    './Img/Greece/athens_hotel3.jpg',
                    './Img/Greece/athens_hotel4.jpg'
                ]
            }

        ]
    },
    {
        name: " Italy",
        country: './Img/Italy/Italy.jpg',
        img: [
            {
                name: "Colosseum",
                image: './Img/Italy/Colosseum.jpg',

            },
            {
                name: "Amalfli Coast",
                image: './Img/Italy/Amalfi-Coast.jpg',
            },
            {
                name: "Pompoeli",
                image: './Img/Italy/Pompeii.jpg',
            },
            {
                name: "Pisa",
                image: './Img/Italy/Tower-of-Pisa.jpg',
            },
            {
                name: "Vatican",
                image: './Img/Italy/Vatican-City.jpg',
            },
            {
                name: "Forum",
                image: './Img/Italy/Roman-Forum.jpg'
            },

        ]
    },
    {
        name: " Thailand",
        country: './Img/Thailand/Thailand.jpeg',
        img: [
            {
                name: "Railway Beach",
                image: "./Img/Thailand/thailand-railay-beach.jpg",
            },
            {
                name: "Old City",
                image: '/Img/Thailand/sukhothai-old-city.jpg',
            },
            {
                name: "Samui",
                image: './Img/Thailand/samui-beaches.jpg',

            },
            {
                name: "Doi Suteh",
                image: './Img/Thailand/doi-suthep.jpg',
            },
            {
                name: "Khao Saki",
                image: './Img/Thailand/khao-sok-national-park.jpg',
            },
            {
                name: "Phimai",
                image: './Img/Thailand/prasat-hin-phimai.jpg'
            }
        ]

    }

]

const select = document.querySelector(".select")
const selected_option = document.querySelector(".selected_option")

function renderSearch() {
    if (selected_option.value === "select") {

        for (let i = 0; i < countries.length; i++) {


            const option = document.createElement("option")
            select.append(option)
            option.innerText = countries[i].name
            option.setAttribute("value", countries[i].name)

            select.addEventListener("change", (ev) => {
                // const country_section = document.querySelector(".countries_section")
                // country_section.classList= "new_countries_section"
                // const enter_country = document.querySelector(" .enter_country")
                //  enter_country.classList = "new_enter_country"
                if (ev.target.value == option.value && ev.target.value !== "select") {

                    picture_sec.innerHTML = " "
                    const img_obj = countries[i].img


                    for (let img of img_obj) {
                        const country_name = img.name
                        const country_img = img.image

                        const country_price = img.price
                        const country_info = img.info
                        const country_hotel = img.hotel_imgs


                        const box = document.createElement("div")
                        box.classList = "box"
                        picture_sec.append(box)


                        const image = document.createElement("img")
                        const name = document.createElement("p")
                        image.classList = "image"
                        image.setAttribute("src", country_img)
                        name.innerText = country_name
                        box.append(image, name)
                        hover_func(box, country_img, country_name, country_price, country_info, country_hotel)
                        // moreInfo(image)

                    }

                } else if (ev.target.value === "select") {
                    picture_sec.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6139551.5283225225!2d12.712159999999988!3d41.290850000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sam!4v1691403328614!5m2!1sen!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

                }

            })

        }
    }
}

renderSearch()

function hover_func(box, country_img, country_name, country_price, country_info, country_hotel) {  //...test as parameter   


    const background = document.createElement("div")
    background.classList = "background"
    box.append(background)

    const info = document.createElement("p")
    info.innerText = "More info..."
    info.classList = "info"
    background.append(info)

    moreInfo(background, country_img, country_name, country_price, country_info, country_hotel)


}



function moreInfo(background, country_img, country_name, country_price, country_info, country_hotel) { //...test
    background.addEventListener("click", () => {
        const modal = document.createElement("div")
        modal.classList = "modal"
        picture_sec.append(modal)
        const modal_content = document.createElement("div")
        modal_content.classList = "modal_content"
        modal.append(modal_content)

        const close = document.createElement("span")
        close.innerText = "X"
        close.classList = "close"
        modal_content.append(close)

        close.addEventListener("click", () => {
            modal.style.display = "none";

        })
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                // modal.style.transition= "all 0.8s ease 0s"
            }
        }

        modal_content.innerHTML = `
        <img style="width:200px;heigyht:200px" src=${country_img} alt="country_img">
        
        <div style="display:flex; flex-direction:column">
        <p>${country_name}</p>
        <p>${country_price}AMD  per night</p>
        <p>${country_info}</p>
        </div>
        <div class="wrap" style="width: 110px; height: 110px;display: flex; flex-wrap: wrap;">    
        </div>
        `

        country_hotel.map((img) => {
            // console.log(img);
            const wrap = document.querySelector(".wrap")
            wrap.innerHTML += `
            <img style="width: 50px;height: 50px;"  src=${img} alt="img">
            `

        })

    })
}

function regEx() { ///error ka kuxxes

    const input = document.querySelector(".mail_input")
    const submit = document.querySelector(".submit")

    input.addEventListener("change", (ev) => {

        input.style.background = "white"
        if (ev.target !== " ") {


            // submit.addEventListener("click", () => {
            let text = input.value
            const regexp = /^[a-z]+\d+@(mail|gmail|yahoo).(ru|com)$/g
            let expres = text.match(regexp)
            expres ? input.style.background = "green" : input.style.background = "red"

            // })
        } else if (text === " " && text.trim()) {
            console.log(0);
            input.style.background = "white"
        }
    })
}
regEx()

// let slideIndex = 0
// function carousel() {


//     const carousel = document.querySelector(".blog")
//     for (let i = 0; i < countries.length; i++) {
//         let country_img = countries[i].country
// console.log(country_img);
//         const slides = document.createElement("div")
//         slides.classList = "slides"
//         const image = document.createElement("img")
//         image.setAttribute("src", country_img)
//         slides.append(image)
//         carousel.append(slides)
//         image.style = `
//             width:50%;
//            height:100%;
//             position:absolute;
//            `
//         const slide = document.querySelectorAll(".slides")
//         for (let i = 0; i < slide.length; i++) {
//             slide[i].style.display = "none"

//         }
//         slideIndex++
//         console.log(slideIndex);
//         if (slideIndex > slide.length) {
//             slideIndex = 1
//         }
//         slide[slideIndex - 1].style = "block"

//         setTimeout(carousel, 3000)
//     }
// }


// carousel()

// function sidenav(){
//     const bar = document.querySelector(".menu_bar")
//     bar.addEventListener("click",()=>{

//     })
// }
// sidenav()
function openNav() {
    let bar = document.getElementById("mySidenav")
    bar.addEventListener("click", () => {
        const menu = document.querySelector(".menu_list")
        const close = document.querySelector(".close")
        close.style =
            `
        
        `
        menu.style = `
       display:block;
       width:250px;
    //    height:100%;
       left:0;
       top: -20;
        position: fixed;
        z-index: 1;
        background-color: #333;
        overflow-x: hidden;
        transition: 0.5s;
        // padding-top: 60px;
       `

    })
}
openNav()
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



let images = []
let time = 3000
const slide = document.querySelector(".about_pic")

// function slider() {
//     setTimeout(function(){

//         for (let i = 0; i < countries.length; i++) {
//             let obj = countries[i].img
//             // console.log(obj);
//             for (let img of obj) {
//                 // console.log(img.image);
//                 images.push(img.image)
//             }
//         }
//         for (let i = 0; i < images.length; i++) {
//             console.log(images[i]);

//             const container = document.createElement("img")
//             container.classList = "slide"
//             slide.append(container)

//             container.src = images[i]
//             if(i < images.length - 1){
//                 i++
//             }else{
//                 i = 0
//             }
//     }

//     },3000)

//     }

// slider()



// const slide_image = document.querySelector(".slide_image")


for (let i = 0; i < countries.length; i++) {
    let obj = countries[i].img
    for (let img of obj) {
        images.push(img.image)
    }
}
console.log(images)
// debugger
const container = document.createElement("img")
container.classList = "slide"
slide.append(container)

let i = 0;
function slider(){

    // for(let i = 0; i < images.length; i++){
        
    
        // console.log(images[i]);
        if(i < images.length -1){
            container.src  = images[i]
            
            i++
           
        }else{
            i = 0
        }
        
    // }
}
setInterval(slider, time)

// slider()

    // container.src = images[i++]   

    // setTimeout(() => {

    //     if (i < images.length - 1) {

    //         container.src = images[i]
    //         i++
    //     } else {
    //         i = 0
    //     }
    // }, time)

//     let counter = 1 
//     setInterval(()=>{
//     const img = document.querySelector(`.img-${counter}`)
//     img.classList.add("show")
//     counter++
//     if(counter > 11){
//         counter=1
//     }
    
//     img.classList.remove("show")
// },3000)