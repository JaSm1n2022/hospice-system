import SearchLookupTextField from "components/TextField/SearchLookUpTextField";
import { useState } from "react";
import StockRoomHandler from "./components/StockRoomHandler";
import StockRoomViewTable from "./components/StockRoomViewTable";
// test nvm use 14
function StockRoomView() {
  const columns = StockRoomHandler.columns();
  const dataSource = StockRoomHandler.mapData(null);
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchLookupTextField placeholder="Search Item" />
      <StockRoomViewTable columns={columns} dataSource={dataSource} />;
    </div>
  );
}

export default StockRoomView;
