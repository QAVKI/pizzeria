async function init() {
  const myMap = new ymaps.Map('map-test', {
    center: [59.91795236804815, 30.304908500000003],
    zoom: 100,
    controls: ['routePanelControl'],
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [
        [56.829089, 60.561955],
        [crd.latitude, crd.longitude],
      ],
    }, {
      boundsAutoApply: true,
    });
    multiRoute.model.events.add('requestsuccess', () => {
      const activeRoute = multiRoute.getActiveRoute();
      const time = document.querySelector('.time');
      time.innerHTML = `Пицца прибудет примерно через: ${activeRoute.properties.get('duration').text}`;
    });
    myMap.geoObjects.add(multiRoute);

    const reverseGeocoder = ymaps.geocode([crd.latitude, crd.longitude]);
    let locationText = null;
    reverseGeocoder.then((res) => {
      locationText = res.geoObjects.get(0).properties.get('text');
      const adress = document.querySelector('#adress');
      adress.value = locationText;
    });
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

ymaps.ready(init);
