import { Injectable } from '@nestjs/common';
import { NotesCreateRepository } from '../notes-create.repository/notes-create.repository';
import { NotesReadRepository } from '../notes-read.repository/notes-read.repository';
import { NotesUpdateRepository } from '../notes-update/notes-update';
import { NotesDeleteRepository } from '../notes-delete/notes-delete';

@Injectable()
export class NotesRepository {
    constructor(
        public read: NotesReadRepository,
        public create: NotesCreateRepository,
        public remove: NotesDeleteRepository,
        public update: NotesUpdateRepository,
    ){}
}
