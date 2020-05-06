console.log('R+L by barlord')
let sky1 ={
    photo: '/pic/img/sky1.jpg',
    title: 'Napfelkelte Berlinben',
    description: 'Az iskolába menet keszült fotó berlinből',
};
let ship=  {
    photo: '/pic/img/ship.jpg',
    title: 'Berlini hajó',
    description: 'Philippel voltunk egy nagyon menő expoon',
}
let andrassy=  {
    photo: '/pic/img/andrassy.jpg',
    title: 'Andrassy út',
    description: 'Egy naplemente az andrássy útról nézve',
}
let berlin=  {
    photo: '/pic/img/berlin.jpg',
    title: 'Berlini emlékek ',
    description: 'Berlini utazásaim emléke egy hógömbben',
}
let duna=  {
    photo: '/pic/img/duna.jpg',
    title: 'A duna tavasszal',
    description: 'Tavaszi virágok a duna mellett',
}
let forest=  {
    photo: '/pic/img/forest.jpg',
    title: 'Kirándulás az egri vár makettjéhez',
    description: 'Egy geoláda megtalálása után keszült',
}
let htwon=  {
    photo: '/pic/img/htown.jpg',
    title: 'Potsdami karácsonyi vásár',
    description: 'Egy szép holland negyed potsdamban karácsonykor',
}
let kakao=  {
    photo: '/pic/img/kakao.jpg',
    title: 'Esti Kakaó',
    description: 'Egy jó nap lezárása ez a kakaó',
}
let level=  {
    photo: '/pic/img/level.jpg',
    title: 'Eső',
    description: 'Miközben vártam a fuvarom berlinben esett az eső',
}
let mchernobyl=  {
    photo: '/pic/img/mchernobyl.jpg',
    title: 'Magyar Chernobyl',
    description: 'Szilveszteri kirándulás közben egy elhagyatott telepen keszült',
}
let moha=  {
    photo: '/pic/img/moha.jpg',
    title: 'Moha',
    description: 'Az új házam miután el kellett költöznöm berlinben',
}
let muzeum=  {
    photo: '/pic/img/muzeum.jpg',
    title: 'Muzeum',
    description: 'a Szépmüvészeti Múzeum',
}
let sky=  {
    photo: '/pic/img/sky.jpg',
    title: 'Felhők',
    description: 'Kilátás az ablakomból',
}
let sky2=  {
    photo: '/pic/img/sky2.jpg',
    title: 'Naplemente berlinben',
    description: 'A berlini iskola udvarán keszült kép',

}
let sky3=  {
    photo: '/pic/img/sky3.jpg',
    title: 'Az utolsó Berlini nap',
    description: 'Uton a reptérre keszült ez a kép berlinben',

}
let sky4=  {
    photo: '/pic/img/sky4.jpg',
    title: 'Festett égbolt',
    description: 'Az egyik nap edzésre menet keszült ez a festői kép',
}
let szhid=  {
    photo: '/pic/img/szhid.jpg',
    title: 'Szabadság híd ',
    description: 'A gellért hegy a nyugodt Duna és a Gellért szálló',
}
let Cphoto = 0
let osszes = [sky1, ship, andrassy , berlin, duna, forest, htwon, kakao, level, mchernobyl, 
moha, muzeum, sky , sky2, sky3, sky4, szhid,  ]

let load= function(Cphoto) {
    $("#photo").attr('src', osszes[Cphoto].photo);
$('#title').text(osszes[Cphoto].title)
$('#description').text(osszes[Cphoto].description)
}
load(Cphoto)
$('.balnyil').click(function () {
    if (Cphoto>0) { Cphoto=Cphoto-1}
    else {Cphoto=osszes.length}
    load(Cphoto)
   
    
})
$('.jobbnyil').click(function () {
   if (Cphoto<osszes.length){ Cphoto=Cphoto+1}
   else {Cphoto=0}
    load(Cphoto)
    
})

osszes.forEach(tnail)
function tnail(item, index, array) {
    console.log(index, item.photo)
    $(".tnail_cont").append(
    `<div class="lebegtart">
    <img id="item.photo" class="tnail" src="${item.photo}" data-number="${index}"></img>
    
    <h2 class="lebeg">${item.title}</h5>
    </div> `);
$('.tnail').click(function(event) {
    let indexClicked = $(event.target).attr('data-number');
    let numberIndex = parseInt(indexClicked);
    $("#photo").attr('src', osszes[numberIndex].photo);
    $('#title').text(osszes[numberIndex].title)
    $('#description').text(osszes[numberIndex].description)
}) 
}
