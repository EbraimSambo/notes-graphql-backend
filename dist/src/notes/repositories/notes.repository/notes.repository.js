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
exports.NotesRepository = void 0;
const common_1 = require("@nestjs/common");
const notes_create_repository_1 = require("../notes-create.repository/notes-create.repository");
const notes_read_repository_1 = require("../notes-read.repository/notes-read.repository");
const notes_update_1 = require("../notes-update/notes-update");
const notes_delete_1 = require("../notes-delete/notes-delete");
let NotesRepository = class NotesRepository {
    constructor(read, create, remove, update) {
        this.read = read;
        this.create = create;
        this.remove = remove;
        this.update = update;
    }
};
exports.NotesRepository = NotesRepository;
exports.NotesRepository = NotesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_read_repository_1.NotesReadRepository,
        notes_create_repository_1.NotesCreateRepository,
        notes_delete_1.NotesDeleteRepository,
        notes_update_1.NotesUpdateRepository])
], NotesRepository);
//# sourceMappingURL=notes.repository.js.map