const Api = require('./Api');

/**
 * Datasets
 * @constructor
 * @param {Object} configuration
 * @param {string} configuration.accountKey Your DataGraphs account key
 * @param {string} configuration.apiKey - Your DataGraphs application API Key
 * @param {string} configuration.clientId - Your DataGraphs application client id
 * @param {string} configuration.clientSecret - Your DataGraphs application client secret
 */
function Datasets({ accountKey, apiKey, clientId, clientSecret } = {}){
  const api = new Api({ accountKey, apiKey, clientId, clientSecret });

  /**
   * Get all datasets
   * @function all
   * @memberOf Datasets#
   * @param {Object} options
   * @param {number} [options.pageSize=10] - Number of results to return per page
   * @param {number} [options.pageNo=1] - Which page of results to return
   * @param {string} [options.sort] - Sort order in the format {property1}:{asc|desc},{property2}:{asc|desc}
   * @returns {DatasetSearchResults} Search Results
   */
  this.all = ({ pageSize, pageNo, sort } = {}) => api.getJson('', { qs: { pageSize, pageNo, sort } });
}

exports = module.exports = Datasets;

/**
 * @typedef DatasetSearchResults Dataset Search Results
 * @property {Object} search
 * @property {number} search.totalResults
 * @property {Object[]} results
 * @property {string} results.id
 * @property {string} results.name
 */