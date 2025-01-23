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
exports.NotesUpadteService = void 0;
const common_1 = require("@nestjs/common");
const notes_read_service_1 = require("../notes-read/notes-read.service");
const notes_repository_1 = require("../../repositories/notes.repository/notes.repository");
let NotesUpadteService = class NotesUpadteService {
    constructor(repo, note_read) {
        this.repo = repo;
        this.note_read = note_read;
    }
    async upadate(fields, id) {
        const note = await this.note_read.findOnde(id);
        return await this.repo.update.update(fields, note.id);
    }
};
exports.NotesUpadteService = NotesUpadteService;
exports.NotesUpadteService = NotesUpadteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_repository_1.NotesRepository,
        notes_read_service_1.NotesReadService])
], NotesUpadteService);
//# sourceMappingURL=notes-upadte.service.js.map