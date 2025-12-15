class Service {
  constructor(dao) {
    this.dao = dao;
  }
//REVISAR
  getAll = async () => {
    return await this.dao.getAll();
  };

  createOrUpdateRunner = async (data) => {
    const { id, latitud, longitud } = data;

  
    const corredores = await this.dao.getAll();

   
    const alertas = corredores
      .filter(c => c.id !== id)
      .filter(c => {
        const distancia = this.distanciaGPS(
          latitud,
          longitud,
          c.latitud,
          c.longitud
        );
        return distancia < 50;
      })
      .map(c => c.id);

    
    const corredor = { id, latitud, longitud };
    await this.dao.createOrUpdate(corredor);

    return {
      corredor,
      alertas
    };
  };

  distanciaGPS = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // radio terrestre en metros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const lat1Rad = lat1 * Math.PI / 180;
    const lat2Rad = lat2 * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
}

export default Service;

