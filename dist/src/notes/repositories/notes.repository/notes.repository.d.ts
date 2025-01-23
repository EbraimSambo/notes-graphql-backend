import { NotesCreateRepository } from '../notes-create.repository/notes-create.repository';
import { NotesReadRepository } from '../notes-read.repository/notes-read.repository';
import { NotesUpdateRepository } from '../notes-update/notes-update';
import { NotesDeleteRepository } from '../notes-delete/notes-delete';
export declare class NotesRepository {
    read: NotesReadRepository;
    create: NotesCreateRepository;
    remove: NotesDeleteRepository;
    update: NotesUpdateRepository;
    constructor(read: NotesReadRepository, create: NotesCreateRepository, remove: NotesDeleteRepository, update: NotesUpdateRepository);
}
