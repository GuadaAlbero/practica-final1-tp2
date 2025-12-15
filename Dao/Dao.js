class Dao {
  data = [];

  getAll = async () => {
    return this.data;
  };

//ESTA OK?
  createOrUpdate = async (corredor) => {
    const index = this.data.findIndex(c => c.id === corredor.id);

    if (index === -1) {
      this.data.push(corredor);
      return corredor;
    }

    this.data[index] = corredor;
    return corredor;
  };
}

export default Dao;

