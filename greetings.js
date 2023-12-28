const dataList = [

    {
        id: "4e55b9ca-8d6e-48ab-8642-3a0ef26ab9ca",
        msg: "Persnol Message to User 1"
    },
    {
        id: "8cdea4c1-6f8a-4e33-88e2-7ce722bb0eaa",
        msg: "Persnol Message to User 2"
    },
    {
        id: "c1948bccc-cc41-4201-ac68-c08858fa3c90",
        msg: "Persnol Message to User 3"
    },
    {
        id: "1948bccc-cc41-4201-ac68-c08858fa3c90",
        msg: "Persnol Message to User 4"
    },
    {
        id: "5b494360-cca8-428a-9200-455f7b118183",
        msg: "Persnol Message to User 5"
    },
    {
        id: "code6",
        msg: "Persnol Message to User 6"
    },
    {
        id: "code7",
        msg: "Persnol Message to User 7"
    },
    {
        id: "code8",
        msg: "Persnol Message to User 8"
    },
]

const colorsName = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'crimson',
    '#fcba03',
    '#03fc0f',
    '#fc03f4',
    '#90fc03',
    '#a103fc',
]


const newYearHomePageEl = document.getElementById("newYearHomePage");
const newYearGiftCanvasConEl=document.getElementById("newYearGiftCanvasCon")
const newYearMsgConEl = document.getElementById("newYearMsgCon");
newYearMsgConEl.style.display = "none"
const messageEl = document.getElementById("message");
const userId = new URLSearchParams(window.location.search).get('id');
const newYearSong = `<audio autoplay id="cristmasSong" src="https://streaming.jubilate.co.uk/lyric/preview-mp3/82163.mp3"  ></audio>`
const typedText = document.getElementById("typedText");

const speed = 500;

function getdata() {

    let targetedObj = dataList.find(eachObj => (eachObj.id === userId));
    if ((userId === '') /*|| (userId.length !== 5)*/ || (targetedObj === undefined)) {
        alert("Enter Valid URL:(")
    } else {

        setTimeout(() => {
            typeWords(targetedObj.msg, speed)
            newYearGiftCanvasConEl.style.display = "none"
            newYearHomePageEl.classList.add('new-year-msg-bg-con2');
            newYearMsgConEl.style.display = ""
        }, 500)

        //Typed JS CDN 

        var typed = new Typed(typedText, {
            strings: ["WISH YOU A HAPPY NEW YEAR","GOOD BYE TO 2K23","WELCOME TO 2K24"],
            typeSpeed: 50,  
            loop: true,
            loopCount: Infinity,
            showCursor: false,
            backSpeed: 30,
            backDelay: 1000,


        });
    }
}

setTimeout(() => {
    getdata()
}, 3000);

const getUniqeColor = () => {
    let colorIndx = Math.ceil(Math.random() * (colorsName.length - 1))
    return (colorsName.splice(colorIndx, 1))[0]

}

const typeWords = (text, speed) => {
    //This function takes an HTML element, a string, and speed as arguments and creates a typing word effect with the assigned speed in the spanEl
    let i = 0;
    const typing = setInterval(() => {
        const wordArrary = text.split(' ');
        let spanEl = document.createElement('span');
        spanEl.style.color = getUniqeColor()
        messageEl.appendChild(spanEl);

        spanEl.textContent += wordArrary[i] + "   ";
        i++;
        if (i > wordArrary.length - 1) {

            setInterval(() => {
                console.log(1)
                messageEl.classList.toggle("display-none")
            }, 1000)
            clearInterval(typing)
        }
    }, speed);

};




