import { Injectable } from '@nestjs/common';
import { NotesCreateService } from '../notes-create/notes-create.service';
import { NotesReadService } from '../notes-read/notes-read.service';
import { NotesDeleteService } from '../notes-delete/notes-delete.service';
import { NotesUpadteService } from '../notes-upadte/notes-upadte.service';

@Injectable()
export class NotesService {
    constructor(
        public read: NotesReadService,
        public create: NotesCreateService,
        public update: NotesUpadteService,
        public remove: NotesDeleteService,
    ){}
}
