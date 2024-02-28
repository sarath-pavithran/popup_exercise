namespace db;
entity student {
    key studentId : String(16);
    name : String(32);
    age : Integer;
    address : String(64);
}