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
exports.NotesReadService = void 0;
const common_1 = require("@nestjs/common");
const notes_repository_1 = require("../../repositories/notes.repository/notes.repository");
const user_service_1 = require("../../../user/services/user/user.service");
let NotesReadService = class NotesReadService {
    constructor(repo, user_service) {
        this.repo = repo;
        this.user_service = user_service;
    }
    async findAll(user_id) {
        await this.user_service.read.findById(user_id);
        return await this.repo.read.findAllByUserId(user_id);
    }
    async findAllDeleted(user_id) {
        await this.user_service.read.findById(user_id);
        return await this.repo.read.findAllByUserIdDeleted(user_id);
    }
    async findOnde(id) {
        const note = await this.repo.read.findOneId(id);
        if (!note)
            throw new common_1.NotFoundException("nOTA NAO ENCONTRADA");
        return note;
    }
};
exports.NotesReadService = NotesReadService;
exports.NotesReadService = NotesReadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_repository_1.NotesRepository,
        user_service_1.UserService])
], NotesReadService);
//# sourceMappingURL=notes-read.service.js.map