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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const notes_create_service_1 = require("../notes-create/notes-create.service");
const notes_read_service_1 = require("../notes-read/notes-read.service");
const notes_delete_service_1 = require("../notes-delete/notes-delete.service");
const notes_upadte_service_1 = require("../notes-upadte/notes-upadte.service");
let NotesService = class NotesService {
    constructor(read, create, update, remove) {
        this.read = read;
        this.create = create;
        this.update = update;
        this.remove = remove;
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_read_service_1.NotesReadService,
        notes_create_service_1.NotesCreateService,
        notes_upadte_service_1.NotesUpadteService,
        notes_delete_service_1.NotesDeleteService])
], NotesService);
//# sourceMappingURL=notes.service.js.map