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
exports.NotesUpdateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const update_upadte_notes_dto_1 = require("../../dto/update-upadte-notes.dto");
const notes_entity_1 = require("../../entities/notes.entity");
const notes_service_1 = require("../../services/notes/notes.service");
let NotesUpdateResolver = class NotesUpdateResolver {
    constructor(service) {
        this.service = service;
    }
    async updateNote(fields, id) {
        return await this.service.update.upadate(fields, id);
    }
};
exports.NotesUpdateResolver = NotesUpdateResolver;
__decorate([
    (0, graphql_1.Mutation)(() => notes_entity_1.Note),
    __param(0, (0, graphql_1.Args)('fields')),
    __param(1, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_upadte_notes_dto_1.UpdateNotesDto, Number]),
    __metadata("design:returntype", Promise)
], NotesUpdateResolver.prototype, "updateNote", null);
exports.NotesUpdateResolver = NotesUpdateResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesUpdateResolver);
//# sourceMappingURL=notes-update.resolver.js.map