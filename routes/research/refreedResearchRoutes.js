const express = require('express');
const RefereedResearchRouter = express.Router();
const refereedResearchController = require('../../controllers/research/refreedResearchController');

// routes for /research/publications/refreedResearch
RefereedResearchRouter.route('/create')
    .post(refereedResearchController.createRefereedResearch);

RefereedResearchRouter.route('/id/:id')
    .get(refereedResearchController.getRefereedResearchById)
    .patch(refereedResearchController.editRefereedResearch)
    .delete(refereedResearchController.hideRefereedResearch)
    .put(refereedResearchController.deleteRefereedResearch);

RefereedResearchRouter.route('/all/:visible')
    .get(refereedResearchController.getAllRefereedResearches);

module.exports = RefereedResearchRouter;
