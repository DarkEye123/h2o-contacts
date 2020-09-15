export interface Record {
  phone: string;
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  note: string;
}

export interface CategoryRecordList {
  category: string;
  records: Record[];
}
