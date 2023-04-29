const sampleData = [
  {
    item: "Brief Small",
    quantity: "100",
    qUom: "Pcs",
    category: "Brief",
    size: "MD",
    color: "N/A",
    flavor: "N/A",
  },
  {
    item: "Brief Small",
    quantity: "100",
    qUom: "Pcs",
    category: "Brief",
    size: "MD",
    color: "N/A",
    flavor: "N/A",
  },
  {
    item: "Brief Small",
    quantity: "100",
    qUom: "Pcs",
    category: "Brief",
    size: "MD",
    color: "N/A",
    flavor: "N/A",
  },
  {
    item: "Brief Small",
    quantity: "100",
    qUom: "Pcs",
    category: "Brief",
    size: "MD",
    color: "N/A",
    flavor: "N/A",
  },
  {
    item: "Brief Small",
    quantity: "100",
    qUom: "Pcs",
    category: "Brief",
    size: "MD",
    color: "N/A",
    flavor: "N/A",
  },
];
class StockRoomHandler {
  static columns() {
    return [
      { defaultFlex: 1, minWidth: 200, name: "item", header: "Product" },
      { defaultFlex: 1, minWidth: 220, name: "quantity", header: "Quantity" },
      {
        defaultFlex: 1,
        minWidth: 120,
        name: "qUom",
        header: "Uom",
      },
      { defaultFlex: 1, minWidth: 120, name: "category", header: "Category" },
      { defaultFlex: 1, minWidth: 100, name: "size", header: "Size" },
      { defaultFlex: 1, minWidth: 100, name: "color", header: "Color" },
      { defaultFlex: 1, minWidth: 100, name: "flavor", header: "Flavor" },
    ];
  }

  static mapData(items) {
    return items || sampleData;
  }
}

export default StockRoomHandler;
