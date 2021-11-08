/**
 * ETHTPS.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GPSDataPoint from '../model/GPSDataPoint';
import { GPSResponseModel } from "..";
/**
* GPS service.
* @module api/GPSApi
* @version 1.0
*/
export default class GPSApi {

    /**
    * Constructs a new GPSApi. 
    * @alias module:api/GPSApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the aPIGPSGetGet operation.
     * @callback module:api/GPSApi~aPIGPSGetGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: [GPSResponseModel]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.provider 
     * @param {String} opts.interval 
     * @param {String} opts.network  (default to 'Mainnet')
     * @param {Boolean} opts.includeSidechains  (default to true)
     * @param {module:api/GPSApi~aPIGPSGetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: [GPSResponseModel]}>}
     */
    aPIGPSGetGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'provider': opts['provider'],
        'interval': opts['interval'],
        'network': opts['network'],
        'includeSidechains': opts['includeSidechains']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = {'String': [GPSResponseModel]};
      return this.apiClient.callApi(
        '/API/GPS/Get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the aPIGPSInstantGet operation.
     * @callback module:api/GPSApi~aPIGPSInstantGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: [GPSDataPoint]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeSidechains  (default to true)
     * @param {module:api/GPSApi~aPIGPSInstantGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: [GPSDataPoint]}>}
     */
    aPIGPSInstantGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'includeSidechains': opts['includeSidechains']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = {'String': [GPSDataPoint]};
      return this.apiClient.callApi(
        '/API/GPS/Instant', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the aPIGPSMaxGet operation.
     * @callback module:api/GPSApi~aPIGPSMaxGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:model/{String: GPSDataPoint}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.provider 
     * @param {String} opts.network  (default to 'Mainnet')
     * @param {module:api/GPSApi~aPIGPSMaxGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, module:model/{String: GPSDataPoint}>}
     */
    aPIGPSMaxGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'provider': opts['provider'],
        'network': opts['network']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = {'String': GPSDataPoint};
      return this.apiClient.callApi(
        '/API/GPS/Max', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}