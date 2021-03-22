'use strict';
let allimg=[];
let allkey=[];


function imge(image_url,title,description,keyword,horns){
    this.image_url=image_url;
    this.title=title;
    this.description=description;
    this.keyword=keyword;
    this.horns=horns;
    allimg.push(this)
    allkey.push(this.keyword)
}
 console.log(allimg);
 console.log(allkey);
 console.log('test');
 
imge.prototype.render=function(){ 
    let imgsec=$('#photo-template').clone();
    $('main').append(imgsec);
    $('select').append(`<option value='${this.keyword}'>${this.keyword}</option>`);

    imgsec.find('h2').text(this.title);
    imgsec.find('img').attr('src', this.image_url);
    imgsec.find('p').text(this.description)
    imgsec.removeAttr('id');

    
}
// function castvote() { 
//     var sel = document.getElementById("select");
//  console.log(sel);
//     alert(sel.options[sel.selectedIndex].value); 
  
//  }
//  castvote();

function getimgData() {
    console.log('test2');
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }
    $.ajax('data.json', ajaxSettings).then(data =>{
    console.log("we got the data!!")
    data.forEach(element => {
        let imgobj=new imge(element.image_url,element.title,element.description,element.keyword,element.horns)
        
    imgobj.render();
    

  
    });
})


}

$('document').ready(getimgData);

