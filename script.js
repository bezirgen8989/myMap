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
            coordinates: [53.118287519761, 26.023592998577826] // координаты точки
        },
        
    },{preset: 'islands#bluePocketIcon'}
    );

    var myGeoObject1 = new ymaps.GeoObject({
        geometry: {
            type: "Point", // точка
            coordinates: [53.11752533602894,26.02424972876957], // координаты точки
            balloonContentBody: 'БеларусьБанк'
        }
    }, 
    {preset:'islands#redMoneyIcon'}
    );
    
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myGeoObject1);

}