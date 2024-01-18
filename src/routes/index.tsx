import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';

import fetchMatchs from '@src/services/api';
import TableRowMatch from '@src/components/shared/TableRowMatch';
import TableHeader from '@src/components/shared/TableHeader';
import Basket from '@src/components/ui/Basket';

const Application: React.FC = () => {
  const ref = React.useRef();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['nesineScore'],
    queryFn: fetchMatchs,
    retry: false,
  });

  const virtualizer = useVirtualizer({
    count: Array.from(data ?? []).length,
    getScrollElement: () => ref.current,
    estimateSize: useCallback(() => 74, []),
    overscan: 20,
  });

  if (isError) return <div>Hata</div>;
  if (isLoading) return <div>Yükleniyor...</div>;

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  return (
    <div className="p-0 m-0 leading-3 align-baseline border-0 text-neutral-400 text-sm">
      <div className="relative text-neutral-400">
        <div className="p-0 m-0 align-baseline border-0">
          <TableHeader count={virtualizer.options.count} />
          <section className="block overflow-y-auto p-0 m-0 mt-12 h-[calc(100vh-80px)] align-baseline border-0" ref={ref}>
            <div
              className="relative w-full h-full align-baseline border-0"
            >
              <table
                className="absolute top-0 left-0 p-0 m-0 w-full align-baseline border-0"
              >
                <tbody>
                {virtualizer.getVirtualItems().map((item, index) => (
                    <TableRowMatch key={`${item.key}_${index}`} data-index={item.index} match={data[item.index]} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <Basket />
    </div>
  );
};

export default Application;
