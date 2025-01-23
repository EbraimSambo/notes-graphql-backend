import { NotesCreateService } from '../notes-create/notes-create.service';
import { NotesReadService } from '../notes-read/notes-read.service';
import { NotesDeleteService } from '../notes-delete/notes-delete.service';
import { NotesUpadteService } from '../notes-upadte/notes-upadte.service';
export declare class NotesService {
    read: NotesReadService;
    create: NotesCreateService;
    update: NotesUpadteService;
    remove: NotesDeleteService;
    constructor(read: NotesReadService, create: NotesCreateService, update: NotesUpadteService, remove: NotesDeleteService);
}
