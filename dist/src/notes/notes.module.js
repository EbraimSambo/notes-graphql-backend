"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesModule = void 0;
const common_1 = require("@nestjs/common");
const notes_create_repository_1 = require("./repositories/notes-create.repository/notes-create.repository");
const notes_repository_1 = require("./repositories/notes.repository/notes.repository");
const notes_read_repository_1 = require("./repositories/notes-read.repository/notes-read.repository");
const notes_service_1 = require("./services/notes/notes.service");
const notes_create_service_1 = require("./services/notes-create/notes-create.service");
const notes_read_service_1 = require("./services/notes-read/notes-read.service");
const database_module_1 = require("../database/database.module");
const user_module_1 = require("../user/user.module");
const notes_upadte_service_1 = require("./services/notes-upadte/notes-upadte.service");
const notes_delete_service_1 = require("./services/notes-delete/notes-delete.service");
const notes_create_resolver_1 = require("./resolvers/notes-create/notes-create.resolver");
const notes_read_resolver_1 = require("./resolvers/notes-read/notes-read.resolver");
const notes_delete_resolver_1 = require("./resolvers/notes-delete/notes-delete.resolver");
const notes_update_resolver_1 = require("./resolvers/notes-update/notes-update.resolver");
const notes_update_1 = require("./repositories/notes-update/notes-update");
const notes_delete_1 = require("./repositories/notes-delete/notes-delete");
let NotesModule = class NotesModule {
};
exports.NotesModule = NotesModule;
exports.NotesModule = NotesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            user_module_1.UserModule
        ],
        providers: [notes_create_repository_1.NotesCreateRepository,
            notes_repository_1.NotesRepository, notes_read_repository_1.NotesReadRepository,
            notes_service_1.NotesService, notes_create_service_1.NotesCreateService, notes_read_service_1.NotesReadService,
            notes_update_1.NotesUpdateRepository, notes_delete_1.NotesDeleteRepository, notes_upadte_service_1.NotesUpadteService, notes_delete_service_1.NotesDeleteService, notes_create_resolver_1.NotesCreateResolver, notes_read_resolver_1.NotesReadResolver, notes_delete_resolver_1.NotesDeleteResolver, notes_update_resolver_1.NotesUpdateResolver]
    })
], NotesModule);
//# sourceMappingURL=notes.module.js.map