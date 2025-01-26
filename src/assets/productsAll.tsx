


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  color: string;
  storage: string;
  brand: string;
  stock: number;
}

const productsAll: Product[] = [
    // iPhone 15
    {
      id: 1,
      name: "iPhone 15",
      description: "iPhone 15 มาพร้อมกับการออกแบบที่ทันสมัยและชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUtONFJuV1pCdWVXaWp6ZXpQQi9FWXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGV4VWh5Y2UwMXBvc0pMNmE5MmxpdHg&traceId=1",
      price: 32900,
      color: "Pink",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
    {
      id: 2,
      name: "iPhone 15",
      description: "iPhone 15 มาพร้อมกับการออกแบบที่ทันสมัยและชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk&traceId=1",
      price: 32900,
      color: "Blue",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
    {
      id: 3,
      name: "iPhone 15",
      description: "iPhone 15 มาพร้อมกับการออกแบบที่ทันสมัยและชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVBYaW5IbkNlYTVSSU9KZTY4cW9ENTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0R2N1VyNEplcjgvcjN0dkF3OE9LSmZmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1",
      price: 32900,
      color: "Yellow",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
  
    // iPhone 15 Plus
    {
      id: 4,
      name: "iPhone 15 Plus",
      description: "iPhone 15 Plus มาพร้อมกับหน้าจอขนาดใหญ่และชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGNDaFdYdHQ0L2VyT2lVS3J0dUtUeHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGNRa0oyZnFZVE9NMW9kWWxjNlk3YUw&traceId=1",
      price: 35900,
      color: "Pink",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
    {
      id: 5,
      name: "iPhone 15 Plus",
      description: "iPhone 15 Plus มาพร้อมกับหน้าจอขนาดใหญ่และชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K1c3RFBiSWNRam1BTnIzd0dDWHVMRXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGRiamlXYWZNMllJdDVjL2VWTktPdWs&traceId=1",
      price: 35900,
      color: "Blue",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
    {
      id: 6,
      name: "iPhone 15 Plus",
      description: "iPhone 15 Plus มาพร้อมกับหน้าจอขนาดใหญ่และชิป A16 Bionic",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K3IraXRtcU5ZQzFyR0o2ZWRlT1gzcTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0RIdDljQkJUS0FHR3FmR0lmaWxIVm1mbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1",
      price: 35900,
      color: "Yellow",
      storage: "128GB",
      brand: "Apple",
      stock: 5,
    },
  
    // iPhone 16
    {
      id: 7,
      name: "iPhone 16",
      description: "iPhone 16 มาพร้อมกับฟีเจอร์ใหม่ที่ล้ำสมัยยิ่งขึ้น, รองรับ 5G และมีกล้องที่ดีขึ้นกว่ารุ่นก่อน",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L28rSU1jVGx4VGxCNEFSdVNXdG1RdzJrQmVLSXFrTCsvY1VvVmRlZkVnMzJKTG1lVWJJT2RXQWE0Mm9rU1V0V0E5L1ZBdzY3RU1aTVdUR3lMZHFNVzE0RzhwM3RLeUk1S0YzTkJVVmF2Ly9R&traceId=1",
      price: 45900,
      color: "Blue",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 8,
      name: "iPhone 16",
      description: "iPhone 16 มาพร้อมกับฟีเจอร์ใหม่ที่ล้ำสมัยยิ่งขึ้น, รองรับ 5G และมีกล้องที่ดีขึ้นกว่ารุ่นก่อน",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUtONFJuV1pCdWVXaWp6ZXpQQi9FWXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZqTWwxUjR3emtKcFNGYngyU0EvOWU&traceId=1",
      price: 45900,
      color: "Purple",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 9,
      name: "iPhone 16",
      description: "iPhone 16 มาพร้อมกับฟีเจอร์ใหม่ที่ล้ำสมัยยิ่งขึ้น, รองรับ 5G และมีกล้องที่ดีขึ้นกว่ารุ่นก่อน",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-white?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OWhabGVFdVhnaExpMWhzbVh0SzhIT09MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMytjRGRjd0V1bkY3a0xXbUtlY3VlTmc&traceId=1",
      price: 45900,
      color: "Silver",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
  
    // iPhone 16 Plus
    {
      id: 10,
      name: "iPhone 16 Plus",
      description: "iPhone 16 Plus มาพร้อมกับหน้าจอใหญ่และชิป A17 Bionic พร้อมกล้องที่พัฒนาขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUp1NDJCalJ6MnpHSm1KdCtRZ0FvSDJrQmVLSXFrTCsvY1VvVmRlZkVnMzJKTG1lVWJJT2RXQWE0Mm9rU1V0V0R6SkNnaG1kYkl1VUVsNXVsVGJrQ0s0UmdXWi9jaTBCeEx5VFNDNXdWbmdB&traceId=1",
      price: 48900,
      color: "Blue",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 11,
      name: "iPhone 16 Plus",
      description: "iPhone 16 Plus มาพร้อมกับหน้าจอใหญ่และชิป A17 Bionic พร้อมกล้องที่พัฒนาขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OGNDaFdYdHQ0L2VyT2lVS3J0dUtUeHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGMxRnJpVFI4NGhndHdQd2RyT05hdjY&traceId=1",
      price: 48900,
      color: "Purple",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 12,
      name: "iPhone 16 Plus",
      description: "iPhone 16 Plus มาพร้อมกับหน้าจอใหญ่และชิป A17 Bionic พร้อมกล้องที่พัฒนาขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-white?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L2JhVVdqaTJRWXhaTUQrck5qRnZDNE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzhadjUrVm5Sd0NSMGhLdzZzam8vcmw&traceId=1",
      price: 48900,
      color: "Silver",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
  
    // iPhone 16 Pro
    {
      id: 13,
      name: "iPhone 16 Pro",
      description: "iPhone 16 Pro มาพร้อมกับจอ ProMotion, ชิป A18 Bionic และกล้องที่ดีเยี่ยมขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJn&traceId=1",
      price: 58900,
      color: "Desert Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 14,
      name: "iPhone 16 Pro",
      description: "iPhone 16 Pro มาพร้อมกับจอ ProMotion, ชิป A18 Bionic และกล้องที่ดีเยี่ยมขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NVJrY0tZVVQzOFFrQ2FwbFZZamEzeEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hWSm5HQVhUeDlTTVJFSzVnTlpqdUV3&traceId=1",
      price: 58900,
      color: "Natural Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 15,
      name: "iPhone 16 Pro",
      description: "iPhone 16 Pro มาพร้อมกับจอ ProMotion, ชิป A18 Bionic และกล้องที่ดีเยี่ยมขึ้น",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1",
      price: 58900,
      color: "Black Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
  
    // iPhone 16 Pro Max
    {
      id: 16,
      name: "iPhone 16 Pro Max",
      description: "iPhone 16 Pro Max มาพร้อมกับจอใหญ่และกล้องที่พัฒนาขึ้น รองรับ 5G",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFUeEZnNlNyc3llcmZiYmQ5TGppeHJ3&traceId=1",
      price: 64900,
      color: "Desert Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 17,
      name: "iPhone 16 Pro Max",
      description: "iPhone 16 Pro Max มาพร้อมกับจอใหญ่และกล้องที่พัฒนาขึ้น รองรับ 5G",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NkkwYXJHRXdBd0xZTDNUS0M2eUNlY0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2h6UkM0eXdTUkFqNnFqYk5ZcGUzV2tB&traceId=1",
      price: 64900,
      color: "Natural Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    },
    {
      id: 18,
      name: "iPhone 16 Pro Max",
      description: "iPhone 16 Pro Max มาพร้อมกับจอใหญ่และกล้องที่พัฒนาขึ้น รองรับ 5G",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bGlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1Rqb3p6Q2ZyUTlqTERzaHFUOVhnZGR3&traceId=1",
      price: 64900,
      color: "Black Titanium",
      storage: "128GB",
      brand: "Apple",
      stock: 5
    }
  ];
  

export default productsAll;
