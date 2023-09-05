import {UserController} from "./controller/UserController";
import {CategoryController} from "./controller/CategoryController";
import {IndexesController} from "./controller/IndexesController";
import {AuditController} from "./controller/AuditController";
import {EventController} from "./controller/EventController";
import {FAQController} from "./controller/FAQController";

export const Routes = [{
      method: "get",
      route: "/freshdb/users",
      controller: UserController, action: "all"
   }, {
      method: "get",
      route: "/freshdb/users/:id", controller: UserController, action: "one"
   }, {
      method: "post",
      route: "/freshdb/users",
      controller: UserController, action: "save"
   }, {
      method: "delete", route: "/freshdb/users/:id", controller: UserController,
      action: "remove"
},{
        method: "get",
        route: "/freshdb/categoryindexes",
        controller: CategoryController, action: "all"
     },{
               method: "get",
               route: "/freshdb/categories",
               controller: CategoryController, action: "allCat"
            }, {
        method: "get",
        route: "/freshdb/category/:id", controller: CategoryController, action: "one"
     }, {
        method: "post",
        route: "/freshdb/categoryInsert",
        controller: CategoryController, action: "save"
     }, {
        method: "delete", route: "/freshdb/category/:id", controller: CategoryController,
        action: "remove"
  },{
          method: "get",
          route: "/freshdb/indexes",
          controller: IndexesController, action: "all"
       }, {
          method: "get",
          route: "/freshdb/indexes/:id", controller: IndexesController, action: "one"
       }, {
          method: "post",
          route: "/freshdb/indexesInsert",
          controller: IndexesController, action: "save"
       }, {
          method: "delete", route: "/freshdb/indexes/:id", controller: IndexesController,
          action: "remove"
    },{
            method: "get",
            route: "/freshdb/auditTrail",
            controller: AuditController, action: "all"
         },{
                 method: "get",
                 route: "/freshdb/events",
                 controller: EventController, action: "all"
              }, {
                 method: "get",
                 route: "/freshdb/events/:id", controller: EventController, action: "one"
              }, {
                 method: "post",
                 route: "/freshdb/events",
                 controller: EventController, action: "save"
              }, {
                 method: "delete", route: "/freshdb/events/:id", controller: EventController,
                 action: "remove"
           },{
                              method: "get",
                              route: "/freshdb/faq",
                              controller: FAQController, action: "all"
                           }, {
                              method: "get",
                              route: "/freshdb/faq/:id", controller: FAQController, action: "one"
                           }, {
                              method: "post",
                              route: "/freshdb/faqInsert",
                              controller: FAQController, action: "save"
                           }, {
                              method: "delete", route: "/freshdb/faq/:id", controller: FAQController,
                              action: "remove"
                        }];