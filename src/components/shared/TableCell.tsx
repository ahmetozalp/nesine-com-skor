import React from 'react';

const TableCell = React.memo(({ text, onClick, className }: { text?: string; className?: string; onClick?: () => void }) => {
  return (
    <td className={`border border-slate-300 py-2 text-slate-500 text-center text-sm ${className}`} onClick={onClick}>
      {text}
    </td>
  );
});

export default TableCell;