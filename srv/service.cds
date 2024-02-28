using db as db from '../db/schema';
service MyService {
    entity student as projection on db.student;
}