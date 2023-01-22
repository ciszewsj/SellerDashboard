let user1Data = () => {
    return {
        orders: {
            notPaid: 5,
            notSent: 10,
            returns: 3,
        },
        qualitySales: {
            mark: {
                get: 50,
                max: 70,
                mark: 2
            },
            worst: [
                {
                    type: 1,
                    get: 1,
                    max: 5
                },
                {
                    type: 3,
                    get: 1,
                    max: 6
                },
                {
                    type: 4,
                    get: 1,
                    max: 3
                }
            ]
        },
        feedback: {
            best: [
                {
                    get: 4,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 5,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 3,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 4,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }, {
                    get: 4,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }
            ],
            worst: [
                {
                    get: 1,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 2,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 3,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 1,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }, {
                    get: 2,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }
            ],
            all: [
                {
                    get: 3,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 2,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 5,
                    max: 5,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                }, {
                    get: 4,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }, {
                    get: 3,
                    max: 5,
                    comment: "Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"
                }
            ]
        },
        offers: {
            best: {
                amount: [
                    {
                        name: "Odkurzacz",
                        amount: 100,
                        transactions: 1000,
                        image: "https://a.allegroimg.com/s512/117dd2/703a9ade4ba380993f62e2891417/Odkurzacz-workowy-Zelmer-ZVC-3501T-Antek-900W-3-5l"
                    },
                    {
                        name: "Rakieta",
                        amount: 99,
                        transactions: 10000,
                        image: "https://ocdn.eu/pulscms-transforms/1/L1Pk9kuTURBXy81N2I0NzU1NS02ZDhiLTQ3NGEtOTk2My0wYTUwMWJjMDM4MzMuanBlZ5GVAs0DBwDDw94AAaEwAQ"
                    },
                    {
                        name: "Paletka",
                        amount: 98,
                        transactions: 1000,
                        image: "https://rybyakwariowe.eu/media/paletka-dysk-dyskowiec-ryba-akwariowa-paletki-ryby.jpg"
                    },
                    {
                        name: "DOM",
                        amount: 96,
                        transactions: 1000000,
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png"
                    },
                    {
                        name: "Odkurzacz",
                        amount: 50,
                        transactions: 100,
                        image: "https://modini.pl/img/cms/Skarpety/1809/SK183_1.jpg"
                    },

                ],
                transactions: [
                    {
                        name: "DOM",
                        amount: 96,
                        transactions: 1000000,
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png"
                    },
                    {
                        name: "Rakieta",
                        amount: 99,
                        transactions: 10000,
                        image: "https://ocdn.eu/pulscms-transforms/1/L1Pk9kuTURBXy81N2I0NzU1NS02ZDhiLTQ3NGEtOTk2My0wYTUwMWJjMDM4MzMuanBlZ5GVAs0DBwDDw94AAaEwAQ"
                    },
                    {
                        name: "Odkurzacz",
                        amount: 100,
                        transactions: 1000,
                        image: "https://a.allegroimg.com/s512/117dd2/703a9ade4ba380993f62e2891417/Odkurzacz-workowy-Zelmer-ZVC-3501T-Antek-900W-3-5l"
                    },
                    {
                        name: "Paletka",
                        amount: 98,
                        transactions: 1000,
                        image: "https://rybyakwariowe.eu/media/paletka-dysk-dyskowiec-ryba-akwariowa-paletki-ryby.jpg"
                    },

                    {
                        name: "Odkurzacz",
                        amount: 50,
                        transactions: 100,
                        image: "https://modini.pl/img/cms/Skarpety/1809/SK183_1.jpg"
                    },
                ]
            },
            worst: {
                amount: [
                    {
                        name: "RTX 4090",
                        amount: 0,
                        views: 0,
                        image: "https://images.morele.net/i1064/11815306_0_i1064.jpg"
                    },
                    {
                        name: "Neardeltalczyk",
                        amount: 1,
                        views: 1,
                        image: "https://bi.im-g.pl/im/63/18/1b/z28411747AMP,Neandertalczyk.jpg"
                    },
                    {
                        name: "Harnaś",
                        amount: 4,
                        views: 2,
                        image: "https://sklep.uchowanca.pl/userdata/public/gfx/747/Piwo-jasne-pelne-6.jpg"
                    },
                    {
                        name: "Praca magisterska",
                        amount: 5,
                        views: 2,
                        image: "https://kserokrakow.pl/wp-content/uploads/2021/07/praca_magisterska_okladka_kanalowa_twarda_granatowa-1.jpg"
                    },

                    {
                        name: "Staubsauger",
                        amount: 6,
                        views: 5,
                        image: "https://www.leifheitsklep.pl/medias/PIM142411-755Wx755H?context=bWFzdGVyfHJvb3R8MTgyNzV8aW1hZ2UvanBlZ3xoNDMvaGRhLzk0MDA3ODYxNTc1OTguanBnfDExZWNkOWNlNWZhMGZjM2NhZTE2MGZmOTQxZWIxZWY5OTgwYzViMWM5ZGE2NjFmZTkzZTNlZjdlZTFhNGIxZmQ"
                    },
                ],
                views:[
                    {
                        name: "Staubsauger",
                        amount: 6,
                        views: 5,
                        image: "https://www.leifheitsklep.pl/medias/PIM142411-755Wx755H?context=bWFzdGVyfHJvb3R8MTgyNzV8aW1hZ2UvanBlZ3xoNDMvaGRhLzk0MDA3ODYxNTc1OTguanBnfDExZWNkOWNlNWZhMGZjM2NhZTE2MGZmOTQxZWIxZWY5OTgwYzViMWM5ZGE2NjFmZTkzZTNlZjdlZTFhNGIxZmQ"
                    },
                    {
                        name: "Harnaś",
                        amount: 4,
                        views: 2,
                        image: "https://sklep.uchowanca.pl/userdata/public/gfx/747/Piwo-jasne-pelne-6.jpg"
                    },
                    {
                        name: "Praca magisterska",
                        amount: 5,
                        views: 2,
                        image: "https://kserokrakow.pl/wp-content/uploads/2021/07/praca_magisterska_okladka_kanalowa_twarda_granatowa-1.jpg"
                    },
                    {
                        name: "Neardeltalczyk",
                        amount: 1,
                        views: 1,
                        image: "https://bi.im-g.pl/im/63/18/1b/z28411747AMP,Neandertalczyk.jpg"
                    },
                    {
                        name: "RTX 4090",
                        amount: 0,
                        views: 0,
                        image: "https://images.morele.net/i1064/11815306_0_i1064.jpg"
                    },
                ]
            }
        }
    }
}
export default user1Data
