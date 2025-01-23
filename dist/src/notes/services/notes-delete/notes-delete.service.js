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
exports.NotesDeleteService = void 0;
const common_1 = require("@nestjs/common");
const notes_repository_1 = require("../../repositories/notes.repository/notes.repository");
const notes_read_service_1 = require("../notes-read/notes-read.service");
let NotesDeleteService = class NotesDeleteService {
    constructor(repo, note_read) {
        this.repo = repo;
        this.note_read = note_read;
    }
    async delete(id) {
        const note = await this.note_read.findOnde(id);
        return await this.repo.remove.delete(note.id);
    }
    async deletePermanent(id) {
        const note = await this.note_read.findOnde(id);
        return await this.repo.remove.deletePermanent(note.id);
    }
};
exports.NotesDeleteService = NotesDeleteService;
exports.NotesDeleteService = NotesDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_repository_1.NotesRepository,
        notes_read_service_1.NotesReadService])
], NotesDeleteService);
//# sourceMappingURL=notes-delete.service.js.map