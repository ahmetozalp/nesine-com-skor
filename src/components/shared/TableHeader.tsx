import tableColumns from "@src/utils/columns";

const TableHeader = ({ count }: { count: number }) => {
    return (
        <section className="block fixed top-0 left-0 z-10 p-0 m-0 w-full h-12 align-baseline shadow-2xl">
            <div className="p-0 m-0 align-baseline border-0">
            <div className="flex py-0 pr-4 pl-0 m-0 leading-3 align-baseline bg-white text-neutral-400" style={{ padding: '10px 20px 0' }}>
                <div className="flex items-center py-1 px-2 m-0 w-96 align-baseline">
                <span className="p-0 m-0 align-baseline border-0">Toplam: {count}</span>
                </div>
                <div className="flex flex-grow flex-shrink p-0 m-0 align-baseline ">
                <div className="contents flex-row p-0 m-0 align-baseline">
                    <div className="flex justify-center items-center p-0 m-0 text-center align-baseline">Yorumlar</div>
                    <div className="flex justify-center items-center p-0 m-0 text-center align-baseline" />
                </div>
                {tableColumns.map((col, index) => (
                    <div className="contents flex-row p-0 m-0 align-baseline" key={`col_${index}`}>
                    <div className="justify-center items-center p-0 m-0 w-1/4 text-center align-baseline">{col}</div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
    )
  }

  export default TableHeader;