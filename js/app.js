'use strict';
let allimg = [];
let keyWord = [];
let allimg2 = [];
let keyWord2 = [];

function Imge(img_url, title, description, keyword, horns) {
    this.img_url = img_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    this.id = index;
    allimg.push(this)

}
let index = 0;
let x;
Imge.prototype.renderAll = function () {
    x = $('#photo-template').clone();
    $('main').append(x);
    x.find('h2').text(this.title);
    x.find('img').attr('src', this.img_url);
    x.find('p').text(this.description);
    x.removeAttr('id');
    x.attr('id', this.id);
    index++;
}
keyWord.push(this.keyword)
console.log(keyWord);
Imge.prototype.filloption = function () {
    for (let i = 0; i < keyWord.length; i++) {
        let newOption = $('<option></option>');

        if ($('option').val() != keyWord[i]) {
            $('#select').append(newOption);
            newOption.text(this.keyword);
        }
    }
}

function renderSelect() {
    $('#select').on('click', function () {
        for (let i = 0; i < index; i++) {
            if (allimg[i].keyword == $('#select').val()) {
                $('#' + i).show();
            } else {
                if ($('#select').val() == 'alloption') {
                    $('#' + i).show();
                } else {
                    $('#' + i).hide();
                }

            }
        }
    })
}


function getData() {
    $('#select').empty();
    for (let i = 0; i < index; i++) {
        $('#' + i).hide();
    }
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };
    $.ajax('data.json', ajaxSettings).then(data => {
        data.forEach(element => {
            let newimg = new Imge(element.image_url, element.title, element.description, element.keyword, element.horns);
            newimg.renderAll();
            newimg.filloption();
        });
    }

    )
}
function getData2() {
    $('#select').empty();
    for (let i = 0; i < index; i++) {
        $('#' + i).hide();
    }

    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };
    console.log('test');
    $.ajax('data2.json', ajaxSettings).then(data => {
        data.forEach(element => {
            let newimg = new Imge(element.image_url, element.title, element.description, element.keyword, element.horns);
            newimg.renderAll();

            newimg.filloption();
        });
    }

    )
}
$('#pageTwo').on('click', console.log('عاعؤؤغرسؤ'))
$('document').ready(getData());
renderSelect();

$('#pageTwo').on('click', getData2)
$('#pageOne').on('click', getData)




//------------------------------------------------
// function sortig() {
//     $('#selectTwo').on('change', function () {
//         let Select = $('#selectTwo').val();
//         let container2;
//         if (Select == 'A to Z') {
//             $('div').hide();
//             $('#cont').empty();)
//             objArrOne.sort((a, b) => {
//                 if (a.title > b.title) {
//                     return 1;
//                 } else {
//                     return -1;
//                 }
//             });

//         }
    
// }}


sortig();



















// 'use strict';
// let objArrOne = [];
// let objArrTwo = [];
// let keyWord = [];
// let keyWordTwo = [];
// let inx = 0;
// function Animals(bigObjArr) {
//     for (let key in bigObjArr) {
//         this[key] = bigObjArr[key]
//     }
//     this.id = inx;
//     inx++;
// }
// let container;
// Animals.prototype.renderDivs = function () {
//     $('section').hide();
//     $('div').show();
//     container = $('#photo-template').clone();
//     container.attr('id', this.id);
//     $('#cont').append(container);
//     container.find('h2').text(this.title);
//     container.find('img').attr('src', this.image_url);
//     container.find('p').text(this.keyword);
//     $('#photo-template').hide();

// }
// let n = 0;
// Animals.prototype.renderSection = function () {

//     let template = $('#tempOne').html();
//     let html = Mustache.render(template, objArrTwo[n]);
//     // template.find('img').attr('src', this.image_url)
//     $('section:last').attr('id', n + 20)
//     n++
//     return html;
// }

// let addOptionOne = function () {
//     $('#select').empty();
//     keyWord = [];
//     let mainOption = $('<option></option>');
//     $('#select').append(mainOption);
//     mainOption.text('Filter by Keyword');
//     objArrOne.forEach(element => {

//         if (!keyWord.includes(element.keyword)) {
//             keyWord.push(element.keyword)

//             let newOption = $('<option></option>');
//             $('#select').append(newOption);
//             newOption.text(element.keyword);
//         }

//     });
// }

// let addOptionTwo = function () {
//     $('#select').empty();
//     keyWordTwo = [];
//     let newOption = $('<option></option>');
//     $('#select').append(newOption);
//     newOption.text('Filter by Keywords');
//     objArrTwo.forEach(element => {

//         if (!keyWordTwo.includes(element.keyword)) {
//             keyWordTwo.push(element.keyword)
//             let newOption = $('<option></option>');
//             $('#select').append(newOption);
//             newOption.text(element.keyword);
//         }
//     });

// }

// function renderOne() {

//     $('#select').on('change', function () {
//         let selected = $('#select').val();
//         for (let i = 0; i < objArrOne.length; i++) {
//             // $('#' + element.id).hide();
//             if (selected == 'Filter by Keyword') {
//                 $('#' + i).show();
//             } else if (selected == objArrOne[i].keyword) {
//                 $('#' + i).show();
//             } else {
//                 $('#' + i).hide();
//             }
//         };
//         console.log(selected)
//     })
// }

// function renderTwo() {
//     $('#select').on('change', function () {
//         let selected = $('#select').val();
//         for (let i = 21; i < 41; i++) {
//             // $('#' + i).hide();
//             if (selected == 'Filter by Keywords') {
//                 $('#' + i).show();
//             } else if (selected == objArrTwo[i - 21].keyword) {
//                 $('#' + i).show();
//             } else {
//                 $('#' + i).hide();
//             }
//         };
//         $('div').hide();
//         $('#cont').show();
//     })
// }
// function sortingOne(){
//     $('#selectTwo').on('change', function () {
//         let secSelect = $('#selectTwo').val();
//         let container2;
//         if (secSelect == 'A to Z') {
//             $('div').hide();
//             $('#cont').empty();
//             objArrOne.sort((a, b) => {
//                 if (a.title > b.title) {
//                     return 1;
//                 } else {
//                     return -1;
//                 }
//             });
//             objArrOne.forEach(function (element, index) {
//                 container2 = $('#photo-template').clone();
//                 container2.attr('id', index);
//                 console.log(container2)
//                 $('#cont').append(container2);
//                 container2.find('h2').text(element.title);
//                 container2.find('img').attr('src', element.image_url);
//                 container2.find('p').text(element.keyword);
//                 $('div').show();
//                 $('#photo-template').hide();
//             });

//         } else if (secSelect == 'By Horns') {
//             $('div').hide();
//             $('#cont').empty();
//             objArrOne.sort((a, b) => a.horns - b.horns);
//             objArrOne.forEach(function (element, index) {
//                 container2 = $('#photo-template').clone();
//                 container2.attr('id', index);
//                 $('#cont').append(container2);
//                 container2.find('h2').text(element.title);
//                 container2.find('img').attr('src', element.image_url);
//                 container2.find('p').text(element.keyword);
//                 $('div').show();
//                 $('#photo-template').hide();
//             }
//             );
//         }
//     })
// }
// sortingOne()
// function sortingTwo() {
//     $('#selectTwo').on('change', function () {
//         let secSelect = $('#selectTwo').val();
//         let container2;
//         if (secSelect == 'A to Z') {
//             $('div').hide();
//             $('section').hide();
//             $('section').empty();
//             objArrTwo.sort((a, b) => {
//                 if (a.title > b.title) {
//                     return 1;
//                 } else {
//                     return -1;
//                 }
//             });
//             objArrTwo.forEach(function (element, index) {
//                 container2 = $('<section></section>')
//                 container2.attr('id', index + 21);
//                 console.log(container2)
//                 $('#cont').append(container2);
//                 container2.append('<h2></h2> <img/> <p></p>')
//                 container2.find('h2').text(element.title);
//                 container2.find('img').attr('src', element.image_url);
//                 container2.find('p').text(element.keyword);
//                 $('#cont').show();
//                 $('#cont section').show();
//             });

//         } else if (secSelect == 'By Horns') {
//             $('div').hide();
//             $('#cont').empty();
//             objArrTwo.sort((a, b) => a.horns - b.horns);
//             objArrTwo.forEach(function (element, index) {
//                 container2 = $('<section></section>')
//                 container2.attr('id', index + 21);
//                 console.log(container2)
//                 $('#cont').append(container2);
//                 container2.append('<h2></h2> <img/> <p></p>')
//                 container2.find('h2').text(element.title);
//                 container2.find('img').attr('src', element.image_url);
//                 container2.find('p').text(element.keyword);
//                 $('#cont').show();
//                 $('#cont section').show();
//             });
//         }

// })};
// const ajaxSettings = {
//     method: 'get',
//     dataType: 'json'
// };
// $.ajax('data.json', ajaxSettings).then(data => {
//     data.forEach(element => {
//         let firstAnimal = new Animals(element);
//         objArrOne.push(element)
//         firstAnimal.renderDivs();
//     });
//     addOptionOne();
// }
// );

// let buttonOne = $('<button>Page One</button>');
// $('header').append(buttonOne);
// buttonOne.on('click', function () {
//     $('#select').empty();
//     addOptionOne();

//     $('section').hide();
//     $('div').show();
//     $('#photo-template').hide();

// });
// renderOne();




// const ajaxSetting = {
//     method: 'get',
//     dataType: 'json'
// };
// $.ajax('data2.json', ajaxSetting).then(datas => {
//     datas.forEach(element => {
//         let secondAnimal = new Animals(element);
//         objArrTwo.push(element)
//         $('main').append(secondAnimal.renderSection());
//         console.log('hello')
//         $('section:last').attr('id', n + 20)
//         $('section').hide();
//     })

// })

// let buttonTwo = $('<button>Page Two</button>');
// $('header').append(buttonTwo);
// buttonTwo.on('click', function () {
//     $('#select').empty();
//     addOptionTwo();
//     $('div').hide();
//     $('section').show();
//     renderTwo()
//     sortingTwo()
//     console.log(objArrOne)
//     console.log(objArrTwo)

// })
