/**
 * ETHTPS.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DataPoint } from './DataPoint';
import { HttpFile } from '../http/http';

export class DataResponseModel {
    'data'?: Array<DataPoint>;
    'provider'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<DataPoint>",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}
