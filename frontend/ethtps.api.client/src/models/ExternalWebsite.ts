/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import type { ExternalWebsiteCateopry } from './ExternalWebsiteCateopry';
import {
    ExternalWebsiteCateopryFromJSON,
    ExternalWebsiteCateopryFromJSONTyped,
    ExternalWebsiteCateopryToJSON,
} from './ExternalWebsiteCateopry';
import type { ProviderLink } from './ProviderLink';
import {
    ProviderLinkFromJSON,
    ProviderLinkFromJSONTyped,
    ProviderLinkToJSON,
} from './ProviderLink';

/**
 * 
 * @export
 * @interface ExternalWebsite
 */
export interface ExternalWebsite {
    /**
     * 
     * @type {number}
     * @memberof ExternalWebsite
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ExternalWebsite
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalWebsite
     */
    iconBase64?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExternalWebsite
     */
    category?: number;
    /**
     * 
     * @type {ExternalWebsiteCateopry}
     * @memberof ExternalWebsite
     */
    categoryNavigation?: ExternalWebsiteCateopry;
    /**
     * 
     * @type {Array<ProviderLink>}
     * @memberof ExternalWebsite
     */
    readonly providerLinks?: Array<ProviderLink> | null;
}

/**
 * Check if a given object implements the ExternalWebsite interface.
 */
export function instanceOfExternalWebsite(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExternalWebsiteFromJSON(json: any): ExternalWebsite {
    return ExternalWebsiteFromJSONTyped(json, false);
}

export function ExternalWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalWebsite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'iconBase64': !exists(json, 'iconBase64') ? undefined : json['iconBase64'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'categoryNavigation': !exists(json, 'categoryNavigation') ? undefined : ExternalWebsiteCateopryFromJSON(json['categoryNavigation']),
        'providerLinks': !exists(json, 'providerLinks') ? undefined : (json['providerLinks'] === null ? null : (json['providerLinks'] as Array<any>).map(ProviderLinkFromJSON)),
    };
}

export function ExternalWebsiteToJSON(value?: ExternalWebsite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'iconBase64': value.iconBase64,
        'category': value.category,
        'categoryNavigation': ExternalWebsiteCateopryToJSON(value.categoryNavigation),
    };
}
