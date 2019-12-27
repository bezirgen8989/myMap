ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.132341, 26.017609], // // Координаты центра карты: «широта, долгота».
        zoom: 12, // Уровень масштабирования 0...19
        controls: ['zoomControl'], // для работы с картой 
        // behaviors: [] // для работы с пользовательскими событиями 
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // точка
            preset: 'islands#redIcon',
            coordinates: [53.118287519761, 26.023592998577826] // координаты точки
        }

    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject); 
}