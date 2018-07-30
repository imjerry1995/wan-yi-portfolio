var elEdu = document.getElementById('eduacation');
var elMain = document.querySelector('.main');
var goBtn = document.querySelector('.base_line .go');

elMain.addEventListener('scroll',function(){
    if (elMain.scrollTop >= elEdu.offsetTop-300){
        goBtn.setAttribute('class', 'ani');
    }
})


var myskills = [
    {
        name: 'HTML、CSS',
        discription: '熟悉HTML及CSS語法，且純手刻過多種版型',
        works: {
            wname:'',
            whref:''
        },
        processes: 90
    },{
        name: 'SASS',
        discription: '了解css用變數管理的好處，並用mixin歸納常用屬性，加快開發速度',
        works: {
            wname:'品牌guideline',
            whref: 'https://codepen.io/jerrytw1113/pen/WEJgWK'
        },
        processes: 45
    }, {
        name: 'Bootstrap',
        discription: '能運用Bootstrap開發響應式網頁',
        works: {
            wname:'dashboard切版',
            whref: 'https://imjerry1995.github.io/power-dashboard-demo/'
        },
        processes: 70
    }, {
        name: 'jQuery',
        discription: '運用jQuery做出多種動畫效果，也能透過使用套件豐富網頁',
        works: {
            wname: '「幻。奇 BELIEVE」—— 彰師大107級畢業典禮',
            whref: 'http://ncue.ga/107/'
        },
        processes: 80
    }, 
    {
        name: 'JavaScript',
        discription: '了解變數、條件式、函式、迴圈及基本DOM操作，了解JSON格式及AJAX概念',
        works: {
            wname: '',
            whref: ''
        },
        processes: 55
    }
    ,{
        name: 'Vue.js',
        discription: '能透過Vue與後端資料介接，渲染到前端介面',
        works: {
            wname: '[畢業專題]Pintour - 拼出你的旅遊地圖',
            whref: 'http://www.pintour.tk/'
        },
        processes: 40
    }
    , {
        name: 'git',
        discription: '了解基本命令提示字元操作，能將專案push到GitHub上',
        works: {
            wname:'',
            whref:''
        },
        processes: 30
    },{
        name: 'php',
        discription: '了解基本語法及SQL語法，能搭配MySQL，撰寫並匯出JSON格式資料',
        works: {
            wname:'',
            whref:''
        },
        processes: 50
    }
    
];

var vm2 = new Vue({
    el: '#skills', //可作用區域
    data: {
        skills: myskills
    }
});

//開啟vue
var vm = new Vue({
    el: '#app2', //可作用區域
    data: {
        skills: myskills,
        lists: []
    },
    methods: {
        handleScroll(event) {
            // Any code to be executed
            // when the window is scrolled
            var app2_top = document.getElementById('experience');
            var elScroll = document.querySelector('.main'); 
            if (elScroll.scrollTop >= app2_top.offsetTop-500){
                this.lists = [];
                this.lists = [
                    {
                        years: '2018.05 - 2018.06',
                        title: '製作彰師大107級畢業典禮網站',
                        content: [
                            {
                                tags: '與UI合作，透過HTML,CSS,jQuery,RWD 寫出畢業典禮資訊網站'
                            },
                            {
                                tags: '透過Linux VM架設網站，註冊並掛上網域',
                            }
                        ]
                    },
                    {
                        years: '2017.12 - 2018.06',
                        title: '彰師大地理系系網頁維護管理',
                        content: [{
                            tags: '網頁資料管理、上架'
                        },
                        {
                            tags: '協助網頁後台問題修正',
                        }
                        ]
                    },
                    {
                        years: '2017.07 - 2017.12',
                        title: '英賽特數位行銷 - 網頁實習生',
                        content: [{
                                tags: '網頁前端切版、協作專案'
                            },
                            {
                                tags: 'Wordpress網站架設',
                            }
                        ]
                    },
                    {
                        years: '2017.05 - 2017.06',
                        title: '製作彰師大106級畢業典禮網站',
                        content: [{
                            tags: '與UI合作，結合版型製作畢業典禮資訊網站'
                        },
                        {
                            tags: '透過Linux VM架設網站，註冊並掛上網域',
                        }
                        ]
                    },
                    {
                        years: '2017.02 - 2018.06',
                        title: '彰師大管理學院網管工讀生',
                        content: [{
                                tags: '網頁維護、管理'
                            },
                            {
                                tags: '修復後台錯誤',
                            }
                        ]
                    }
                ];
            }
        }
    },
    created() {
        var elScroll = document.querySelector('.main'); 
        elScroll.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        var elScroll = document.querySelector('.main');
        elScroll.removeEventListener('scroll', this.handleScroll);
    }
    
    }

);



var myworks = [
    {
        title: 'Pintour - 拼出你的旅遊地圖',
        img: 'images/works/pintour.png',
        href: 'http://www.pintour.tk/',
        tags: ['畢業專題', '前端開發', '後端協作',],
        discription: ['HTML,CSS,jQuery,Vue.js,Google Map API', '大學畢業專題', '一款以拼圖為意象的旅遊攻略規劃平台', '製作前端、及後端協助，整體平台規劃']
    },
    {
        title: '「幻。奇 BELIEVE」— 彰師大107級畢業典禮',
        img: 'images/works/ncue-107.png',
        href: 'http://ncue.ga/107/',
        tags: ['前端開發', '與UI合作'],
        discription: ['HTML,CSS,jQuery,Bootstrap', '運用jQuery製作動畫豐富網站', '與UI合作，製作畢業典禮網站']
    },
    {
        title: '(協助製作)玉山國家公園',
        img: 'images/works/yushan.png',
        href: 'https://www.ysnp.gov.tw/default.aspx',
        tags: ['實習作品', '前端協作','多語系配色設計'],
        discription: ['HTML,CSS,jQuery', '協助切版頁面', '依照客戶需求調整樣式']
    },
    {
        title: '台灣電力公司 電力維護處',
        img: 'images/works/tai.png',
        href: 'https://imjerry1995.github.io/power-dashboard-demo/',
        tags: ['實習作品', '前端切版'],
        discription: ['HTML,SASS,jQuery,Bootstrap', '前端切版頁面','(作品連結為自己本機上版本)' ]
    }, {
        title: '(協助製作)國立中興大學 國務所系網',
        img: 'images/works/nchu.png',
        href: 'http://www.ginppa.nchu.edu.tw/',
        tags: ['實習作品', '前端協作'],
        discription: ['HTML,CSS,jQuery,Bootstrap', '協助前端頁面', '統整客戶需求']
    },
    {
        title: '大數據與歷史教學 - 彰師大歷史科研討會',
        img: 'images/works/ncue.png',
        href: 'http://web.ncue.edu.tw/~ccource/105BigData&History/index.html',
        tags: ['工讀作品', '前端開發','一頁式網站','主視覺設計'],
        discription: ['HTML,CSS,jQuery', '一頁式網站','也負責設計主視覺']
    }

];

var vm3 = new Vue({
    el: '#web', //可作用區域
    data: {
        works: myworks
    }
});

//JQuery
$(document).ready(function () {
    

    $(".menu > li > a[href*=#]").click(function (event) {
        // event.preventDefault();
        var target = $($(this).attr("href")).offset().top;
        // console.log(target);
        $(".main").animate({
            scrollTop: target
        }, 800);
    });

    
});