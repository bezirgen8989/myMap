ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.118287519761, 26.023592998577826], // Координаты центра карты: «широта, долгота».
        zoom: 15, // Уровень масштабирования 0...19
        controls: ['zoomControl'], // для работы с картой 
        // behaviors: [] // для работы с пользовательскими событиями 
    }); 

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // точка
            coordinates: [53.118287519761, 26.023592998577826], // координаты точки
        },
        
    },{preset: 'islands#bluePocketIcon'}
    );

    var myGeoObject1 = new ymaps.GeoObject({
        geometry: {
            type: "Point", // точка
            coordinates: [53.11752533602894,26.02424972876957], // координаты точки
        }
    }, 
    {preset:'islands#redMoneyIcon'}
    );
    
    myPlacemark = new ymaps.Placemark([53.11920657146598,26.027836888850103], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: "Балун метка",
        balloonContentBody: "Содержимое <em>балуна</em> метки",
        balloonContentFooter: "Подвал",
        hintContent: "Хинт метки"
    },
    {preset: 'islands#oliveShoppingIcon'}
    );

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myGeoObject1);
    myMap.geoObjects.add(myPlacemark);

}