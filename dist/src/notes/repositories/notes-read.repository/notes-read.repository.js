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
exports.NotesReadRepository = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../database/services/database/database.service");
let NotesReadRepository = class NotesReadRepository {
    constructor(database) {
        this.database = database;
    }
    async findAllByUserId(user_id) {
        return this.database.note.findMany({
            where: {
                user_id,
                is_delete: {
                    not: {
                        equals: true
                    }
                }
            },
            orderBy: {
                created_at: "desc"
            }
        });
    }
    async findAllByUserIdDeleted(user_id) {
        return this.database.note.findMany({
            where: {
                user_id,
                is_delete: {
                    not: {
                        equals: false
                    }
                }
            },
            orderBy: {
                created_at: "desc"
            }
        });
    }
    async findOneId(id) {
        return this.database.note.findUnique({
            where: {
                id,
            }
        });
    }
};
exports.NotesReadRepository = NotesReadRepository;
exports.NotesReadRepository = NotesReadRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], NotesReadRepository);
//# sourceMappingURL=notes-read.repository.js.map