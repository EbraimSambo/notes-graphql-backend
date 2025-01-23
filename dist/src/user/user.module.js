"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_read_resolver_1 = require("./resolvers/user-read/user-read.resolver");
const user_create_resolver_1 = require("./resolvers/user-create/user-create.resolver");
const user_repository_1 = require("./repositories/user.repository/user.repository");
const user_create_repository_1 = require("./repositories/user-create.repository/user-create.repository");
const database_module_1 = require("../database/database.module");
const user_service_1 = require("./services/user/user.service");
const user_cretae_service_1 = require("./services/user-cretae/user-cretae.service");
const user_read_repository_1 = require("./repositories/user-read.repository/user-read.repository");
const user_read_service_1 = require("./services/user-read/user-read.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule
        ],
        providers: [
            user_read_resolver_1.UserReadResolver,
            user_create_resolver_1.UserCreateResolver,
            user_repository_1.UserRepository,
            user_create_repository_1.UserCreateRepository, user_service_1.UserService, user_cretae_service_1.UserCretaeService, user_read_repository_1.UserReadRepository, user_read_service_1.UserReadService,
        ],
        exports: [
            user_service_1.UserService
        ]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map