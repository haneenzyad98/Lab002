'use strict';
let allimg = [];
let keyWord = [];


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

$('document').ready(getData);
renderSelect();