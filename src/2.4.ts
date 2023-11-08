{
    //generic - interface
    interface Developer<T, X = null> {
        name: string
        computer: {
            brand: string
            modal: string
            releaseYear: number
        }
        smartWatch: T
        bike?: X
    }


    type XiaomiWatch = {

        brand: string
        modal: string
        display: string

    }

    const poorDeveloper: Developer<XiaomiWatch> = {
        name: "rahat",
        computer: {
            brand: "lenovo",
            modal: "think pad",
            releaseYear: 2018
        },
        smartWatch: {
            brand: "xiaomi",
            modal: "mi-7",
            display: "lcd"
        }
    }


    interface AppleWatch {
        brand: string
        modal: string
        heartTrack: boolean
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "rich dev",
        computer: {
            brand: "apple",
            modal: "macbook",
            releaseYear: 2023
        },
        smartWatch: {
            brand: "apple",
            modal: "watch-7",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "yamaha",
            engineCapacity: "100cc"
        }
    }

}