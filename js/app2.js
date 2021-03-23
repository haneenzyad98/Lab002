'use strict';
let allimg = [];
let keyWord = [];
let index = 0;
function Imge(img_url, title, description, keyword, horns){
    this.img_url = img_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    this.id = index;
    allimg.push(this)
}
let container;
Imge.prototype.renderAll = function() {
    container = $('#photo-template').clone();
    $('main').append(container);
    container.find('h2').text(this.title);
    container.find('img').attr('src',this.img_url);
    container.find('p').text(this.keyword);
    container.removeAttr('id');
    container.attr('id', this.id);
    index++;
}
Imge.prototype.addnewOption = function(){ 
    if (keyWord.includes(this.keyword)){

    }else{
        keyWord.push(this.keyword)
        let newOption = $('<option></option>');
        $('#select').append(newOption);
        newOption.text(this.keyword);
}}

function renderSelect () {
    $('#select').on('click', function(){
        for (let i = 0; i<index; i++){
            if (allimg[i].keyword == $('#select').val()) {
                $('#'+i).show();
            }else{
                if($('#select').val() == 'default'){
                    $('#'+i).show();
                }else{
                $('#'+i).hide();
            }}
        }
    })
}


function getData() {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };
    $.ajax('data2.json', ajaxSettings).then( data => {
        data.forEach(element => {
            let newAnimal = new Imge(element.image_url, element.title, element.description, element.keyword, element.horns);
            newAnimal.renderAll();
            newAnimal.addnewOption();
        });
    }
    
    )}

$('document').ready(getData);
renderSelect();