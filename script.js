ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.118287519761, 26.023592998577826], // Координаты центра карты: «широта, долгота».
        zoom: 15, // Уровень масштабирования 0...19
        controls: ['zoomControl'], // для работы с картой 
        // behaviors: [] // для работы с пользовательскими событиями 
    }); 
    ymaps.modules.require(['pieChartCluster'], function (pieChartCluster){
        var clusters = new pieChartCluster();
        var point = [
            new ymaps.Placemark(
                [53.11752533602894,26.02424972876957],
                {
                    preset: 'islands#greyIcon'
                }
            )
        ]
    })

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // точка
            preset: 'islands#redIcon',
            coordinates: [53.118287519761, 26.023592998577826] // координаты точки
        }
    });

            
    // Размещение геообъекта на карте.
    
    myMap.geoObjects.add(myGeoObject); 
    clusterer.add(points);
    myMap.geoObjects.add(clusters); 

   
}



// objectManager.objects.setObjectOptions(1, {
//     preset: 'islands#redIcon',
//     balloonContentBody: 'Загружено (бла бла бла)',
//     properties: {
//         balloonContentBody: 'Загружено (бла бла бла)'
// }