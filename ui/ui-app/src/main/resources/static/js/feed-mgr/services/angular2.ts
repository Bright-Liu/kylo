import {FactoryProvider} from "@angular/core";
import * as angular from "angular";

import CategoriesService from "./CategoriesService";
import {EntityAccessControlService} from "../shared/entity-access-control/EntityAccessControlService";
import {DomainTypesService} from "./DomainTypesService";
import {DefaultFeedPropertyService} from "./DefaultFeedPropertyService";
import {RegisterTemplatePropertyService} from "./RegisterTemplatePropertyService";
import {FeedInputProcessorPropertiesTemplateService} from "./FeedInputProcessorPropertiesTemplateService";
import {FeedDetailsProcessorRenderingHelper} from "./FeedDetailsProcessorRenderingHelper";
import { EntityAccessControlDialogService } from "../shared/entity-access-control/EntityAccessControlDialogService";
import {FeedService} from "./FeedService";
import {UiComponentsService} from "./UiComponentsService";

export class AngularServiceUpgrader {
    constructor(){

    }

    static upgrade(service:Function,name:string = service.name) :FactoryProvider{
        return {
            provide: service,
            useFactory: (i: angular.auto.IInjectorService) => i.get(name),
            deps: ["$injector"]
        }
    }
}

export const entityAccessControlDialogServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(EntityAccessControlDialogService);
export const entityAccessControlServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(EntityAccessControlService);

export const categoriesServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(CategoriesService);

export const feedServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(FeedService);

export const domainTypesServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(DomainTypesService);

export const feedPropertyServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(DefaultFeedPropertyService,"FeedPropertyService");

export const registerTemplatePropertyServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(RegisterTemplatePropertyService);

export const uiComponentsServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(UiComponentsService);

export const feedInputProcessorPropertiesTemplateServiceProvider: FactoryProvider = AngularServiceUpgrader.upgrade(FeedInputProcessorPropertiesTemplateService);

export const feedDetailsProcessorRenderingHelperProvider: FactoryProvider = AngularServiceUpgrader.upgrade(FeedDetailsProcessorRenderingHelper);

