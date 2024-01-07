const Sort = () => {
    return (
        <div className="flex flex-row w-full justify-end items-center">
            <div>
                <form action="page">
                    <label htmlFor="page">trang</label>
                    <input type="number" className="w-[40px]" />
                </form>
            </div>
            <form>
                <label htmlFor="sort">Sắp xếp theo</label>
                <select name="sort" id="sort" className="font-medium">
                    <option value="giá cao tới thấp">giá cao tới thấp</option>
                    <option value="giá thấp tới cao">giá thấp tới cao</option>
                    <option value="A đến Z">A đến Z</option>
                    <option value="Z đến A">Z đến A</option>
                </select>
            </form>
        </div>
    );
};

export default Sort;
