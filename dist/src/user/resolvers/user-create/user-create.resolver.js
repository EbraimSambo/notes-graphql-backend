"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_user_dto_1 = require("../../dto/create-user.dto");
const user_entity_1 = require("../../entities/user.entity");
const user_service_1 = require("../../services/user/user.service");
let UserCreateResolver = class UserCreateResolver {
    constructor(user_service) {
        this.user_service = user_service;
    }
    async createUser(fields) {
        return await this.user_service.create.save(fields);
    }
};
exports.UserCreateResolver = UserCreateResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('fields')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTo]),
    __metadata("design:returntype", Promise)
], UserCreateResolver.prototype, "createUser", null);
exports.UserCreateResolver = UserCreateResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserCreateResolver);
//# sourceMappingURL=user-create.resolver.js.map