async function init() {
  const myMap = new ymaps.Map('map-test', {
    center: [59.91795236804815, 30.304908500000003],
    zoom: 17,
    controls: ['routePanelControl'],
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    const cords = document.querySelector('#map-test');
    console.log(cords.dataset.use)
    const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [
        [56.829089, 60.561955],
        [cords.dataset.use],
      ],
    }, {
      boundsAutoApply: true,
    });
    multiRoute.model.events.add('requestsuccess', () => {
      multiRoute.getActiveRoute();
    });
    myMap.geoObjects.add(multiRoute);

    const reverseGeocoder = ymaps.geocode([crd.latitude, crd.longitude]);
    let locationText = null;
    reverseGeocoder.then((res) => {
      locationText = res.geoObjects.get(0).properties.get('text');
    });
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

ymaps.ready(init);
