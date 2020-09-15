import React from 'react';
import { CategoryRecordList } from '../types';

interface RecordListProps {
  records: CategoryRecordList;
}

const RecordList: React.FC<RecordListProps> = ({ records }) => {
  return (
    <ul key={records.category}>
      {records.records.map(r => (
        <span key={r.email}>{r.email}</span>
      ))}
    </ul>
  );
};

export default RecordList;
