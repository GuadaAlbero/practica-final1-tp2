class Controller {
  constructor(service) {
    this.service = service;
  }
//REVISAR
  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ errorMsg: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const result = await this.service.createOrUpdateRunner(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ errorMsg: error.message });
    }
  };
}

export default Controller;

