export interface Device {
  name: string;
  codename: string;
  brand: string;
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    battery: string;
    camera: string;
  };
  maintainer: {
    name: string;
    github: string;
    telegram?: string;
  };
  changelog: Array<{
    version: string;
    date: string;
    changes: string[];
  }>;
}

export const devices: Device[] = [
  {
    name: "Pixel 7 Pro",
    codename: "cheetah",
    brand: "Google",
    image: "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      processor: "Google Tensor G2",
      ram: "12GB LPDDR5",
      storage: "128GB / 256GB / 512GB UFS 3.1",
      display: "6.7\" LTPO OLED, 1440 x 3120, 120Hz",
      battery: "5000mAh",
      camera: "50MP + 48MP + 12MP"
    },
    maintainer: {
      name: "Alice Johnson",
      github: "alicejohnson",
      telegram: "alice_j"
    },
    changelog: [
      {
        version: "Orion OS 2.5",
        date: "2025-06-10",
        changes: [
          "Updated to Android 15 base",
          "Improved battery optimization",
          "Added new camera features",
          "Fixed WiFi connectivity issues",
          "Updated security patch to June 2025"
        ]
      },
      {
        version: "Orion OS 2.0",
        date: "2025-01-15",
        changes: [
          "Major UI overhaul",
          "Added customizable gesture controls",
          "Improved night mode photography",
          "Enhanced gaming performance",
          "Fixed Bluetooth audio latency"
        ]
      }
    ]
  },
  {
    name: "Galaxy S24 Ultra",
    codename: "beyond",
    brand: "Samsung",
    image: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB LPDDR5X",
      storage: "256GB / 512GB / 1TB UFS 4.0",
      display: "6.9\" Dynamic AMOLED 2X, 1440 x 3200, 120Hz",
      battery: "5500mAh",
      camera: "200MP + 50MP + 12MP + 10MP"
    },
    maintainer: {
      name: "Bob Mitchell",
      github: "bobmitch",
      telegram: "bob_mitchell"
    },
    changelog: [
      {
        version: "Orion OS 2.5",
        date: "2025-06-12",
        changes: [
          "Updated to Android 15 base",
          "S Pen functionality improvements",
          "Camera AI enhancements",
          "Better DeX integration",
          "Fixed system UI lag issues"
        ]
      },
      {
        version: "Orion OS 2.0",
        date: "2025-01-20",
        changes: [
          "Initial release for S24 Ultra",
          "Custom camera features",
          "Enhanced privacy controls",
          "Optimized battery management",
          "Debloated Samsung features"
        ]
      }
    ]
  },
  {
    name: "OnePlus 12",
    codename: "ace",
    brand: "OnePlus",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB / 16GB LPDDR5X",
      storage: "256GB / 512GB UFS 4.0",
      display: "6.8\" LTPO AMOLED, 1440 x 3168, 120Hz",
      battery: "5400mAh",
      camera: "50MP + 50MP + 64MP"
    },
    maintainer: {
      name: "Charlie Davis",
      github: "charlied",
      telegram: "charlie_davis"
    },
    changelog: [
      {
        version: "Orion OS 2.5",
        date: "2025-06-05",
        changes: [
          "Updated to Android 15 base",
          "Alert slider customization options",
          "Improved haptic feedback system",
          "Added gaming optimization mode",
          "Fixed random reboots"
        ]
      },
      {
        version: "Orion OS 2.0",
        date: "2025-01-10",
        changes: [
          "Initial support for OnePlus 12",
          "Enhanced Oxygen OS features",
          "Improved camera night mode",
          "Custom kernel optimizations",
          "Added screen-off gestures"
        ]
      }
    ]
  },
  {
    name: "Xiaomi 14 Pro",
    codename: "zircon",
    brand: "Xiaomi",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB / 16GB LPDDR5X",
      storage: "256GB / 512GB / 1TB UFS 4.0",
      display: "6.73\" LTPO OLED, 1440 x 3200, 120Hz",
      battery: "5000mAh",
      camera: "50MP + 50MP + 50MP + 50MP"
    },
    maintainer: {
      name: "Diana Wong",
      github: "dianawong",
      telegram: "diana_w"
    },
    changelog: [
      {
        version: "Orion OS 2.5",
        date: "2025-06-15",
        changes: [
          "Updated to Android 15 base",
          "MIUI feature integration",
          "Camera algorithm improvements",
          "Better thermal management",
          "Fixed fingerprint sensor issues"
        ]
      },
      {
        version: "Orion OS 2.0",
        date: "2025-01-25",
        changes: [
          "Initial release for Xiaomi 14 Pro",
          "Debloated MIUI elements",
          "Added native call recording",
          "Battery optimization",
          "Enhanced notification system"
        ]
      }
    ]
  }
];