import {UserController} from "./controller/UserController";
import {CategoryController} from "./controller/CategoryController";
import {IndexesController} from "./controller/IndexesController";
import {AuditController} from "./controller/AuditController";
import {EventController} from "./controller/EventController";
import {FAQController} from "./controller/FAQController";

export const Routes = [
    //User Routes
    {
        method: "get",
        route: "/freshdb/users",
        controller: UserController, action: "all"
    }, {
        method: "get",
        route: "/freshdb/user/:id",
        controller: UserController, action: "one"
    }, {
        method: "post",
        route: "/freshdb/user",
        controller: UserController, action: "save"
    }, {
        method: "delete",
        route: "/freshdb/user/:id",
        controller: UserController, action: "remove"
    },
    //Category & Index Routes
    {
        method: "get",
        route: "/freshdb/categoryindexes",
        controller: CategoryController, action: "all"
    },
    //Category Routes
    {
        method: "get",
        route: "/freshdb/categories",
        controller: CategoryController, action: "allCat"
    }, {
        method: "get",
        route: "/freshdb/category/:id",
        controller: CategoryController, action: "one"
    }, {
        method: "post",
        route: "/freshdb/category",
        controller: CategoryController, action: "save"
    }, {
        method: "delete",
        route: "/freshdb/category/:id",
        controller: CategoryController, action: "remove"
    },
    //Index Routes
    {
        method: "get",
        route: "/freshdb/indexes",
        controller: IndexesController, action: "all"
    }, {
        method: "get",
        route: "/freshdb/index/:id",
        controller: IndexesController, action: "one"
    }, {
        method: "post",
        route: "/freshdb/index",
        controller: IndexesController, action: "save"
    }, {
        method: "delete",
        route: "/freshdb/index/:id",
        controller: IndexesController, action: "remove"
    },
    //Audit Routes
    {
        method: "get",
        route: "/freshdb/auditTrail",
        controller: AuditController, action: "all"
    },
    //Event Routes
    {
        method: "get",
        route: "/freshdb/events",
        controller: EventController, action: "all"
    }, {
        method: "get",
        route: "/freshdb/event/:id",
        controller: EventController, action: "one"
    }, {
        method: "post",
        route: "/freshdb/event",
        controller: EventController, action: "save"
    }, {
        method: "delete",
        route: "/freshdb/event/:id",
        controller: EventController, action: "remove"
    },
    //FAQ Routes
    {
        method: "get",
        route: "/freshdb/faqs",
        controller: FAQController, action: "all"
    }, {
        method: "get",
        route: "/freshdb/faq/:id",
        controller: FAQController, action: "one"
    }, {
        method: "post",
        route: "/freshdb/faq",
        controller: FAQController, action: "save"
    }, {
        method: "delete",
        route: "/freshdb/faq/:id",
        controller: FAQController, action: "remove"
    }];