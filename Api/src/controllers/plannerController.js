const { STEPS } = require('../constants/steps');

class PlannerController {
   
  getQuestion(req, res) {
    try {
      const step = Number(req.params.step);
      return res.status(200).send(STEPS[step])
    }
    catch (error) {
      return res.status(500).send(error.message)
    }
  }

  saveAnswer(req, res) {
    return res.status(200).send({ success: true })
  } 

}
  
module.exports = PlannerController;