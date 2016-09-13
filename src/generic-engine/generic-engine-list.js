'use strict';
const user = require('../../mongoose/organism/organism-user');
const getQuery = require('../utils/action-get-query-http');
const findAndPagination = require('../utils/findAndPagination');
const callback = require('../utils/action-callback-http-200');


function genericEngineList(req, res) {

    const query = getQuery(req);
    findAndPagination(user, query, req.params.current_page, req.params.per_page, (err, data) => callback(err, data, res));

}
module.exports = genericEngineList;
