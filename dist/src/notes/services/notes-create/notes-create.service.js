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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesCreateService = void 0;
const common_1 = require("@nestjs/common");
const notes_repository_1 = require("../../repositories/notes.repository/notes.repository");
const user_service_1 = require("../../../user/services/user/user.service");
let NotesCreateService = class NotesCreateService {
    constructor(repo, user_service) {
        this.repo = repo;
        this.user_service = user_service;
    }
    async save(fields) {
        await this.user_service.read.findById(fields.user_id);
        return await this.repo.create.save(fields);
    }
};
exports.NotesCreateService = NotesCreateService;
exports.NotesCreateService = NotesCreateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_repository_1.NotesRepository,
        user_service_1.UserService])
], NotesCreateService);
//# sourceMappingURL=notes-create.service.js.map