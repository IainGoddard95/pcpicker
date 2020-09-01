import React from "react";
import ItemList from "./ItemList";

const Form = (props) => {
  const components = [
    {
      name: "case",
      items: [
        {
          name: "Corsair Carbide Series SPEC-05 Mid-Tower Gaming Case (ATX)",
          formFactor: "ATX",
          price: 50,
          url:
            "https://www.amazon.co.uk/Corsair-Carbide-SPEC-05-Mid-Tower-Chassis/dp/B07BH23K53/ref=sr_1_3?dchild=1&keywords=PC+case&qid=1597929310&sr=8-3",
        },
        {
          name: "Corsair CC-9011086-WW Carbide Series 88R Windowed (Mini ATX)",
          formFactor: "Mini ATX",
          price: 48,
          url:
            "https://www.amazon.co.uk/Corsair-CC-9011086-WW-Windowed-Mini-ITX-Computer/dp/B01550Y9GA/ref=sr_1_6?dchild=1&keywords=PC%2Bcase%2Bmini%2Batx&qid=1597929386&sr=8-6&th=1",
        },
      ],
    },
    {
      name: "hardDrive",
      items: [
        {
          name: "WD Caviar Blue 500GB HDD",
          brand: "Western Digital",
          type: "HHD",
          size: 3.5,
          hardwareInterface: "SATA",
          diskSpace: 500,
          price: 34,
          url:
            "https://www.amazon.co.uk/Caviar-500GB-SATAIII-Cache-Internal/dp/B00461G3MS/ref=sr_1_8?dchild=1&keywords=HHD&qid=1597923174&sr=8-8&th=1",
        },
        {
          name: "WD Caviar Blue 1TB HDD",
          brand: "Western Digital",
          type: "HHD",
          size: 3.5,
          hardwareInterface: "SATA",
          diskSpace: 1000,
          price: 44,
          url:
            "https://www.amazon.co.uk/Caviar-500GB-SATAIII-Cache-Internal/dp/B013HNYVLA/ref=sr_1_8?dchild=1&keywords=HHD&qid=1597923174&sr=8-8&th=1",
        },
        {
          name: "WD Caviar Blue 3TB HDD",
          brand: "Western Digital",
          type: "HHD",
          size: 3.5,
          hardwareInterface: "SATA",
          diskSpace: 3000,
          price: 105,
          url:
            "https://www.amazon.co.uk/Caviar-500GB-SATAIII-Cache-Internal/dp/B07BBNJWGF/ref=sr_1_8?dchild=1&keywords=HHD&qid=1597923174&sr=8-8&th=1",
        },
        {
          name: "Crucial BX500 240GB SSD",
          brand: "Crucial",
          type: "SSD",
          size: 2.5,
          hardwareInterface: "SATA",
          diskSpace: 240,
          price: 28,
          url:
            "https://www.amazon.co.uk/Crucial-CT240BX500SSD1Z-Internal-Solid-State/dp/B07G3KRZBX/ref=sxin_7_ac_d_rm?ac_md=0-0-c3Nk-ac_d_rm&cv_ct_cx=SSD&dchild=1&keywords=SSD&pd_rd_i=B07G3KRZBX&pd_rd_r=efbc0a72-9860-4cde-a2f4-e792dcbcea36&pd_rd_w=6MqwV&pd_rd_wg=9pgKY&pf_rd_p=17aec670-a34a-456d-b214-b9a882c785b0&pf_rd_r=PCHE0CYABKC8G8HRDC16&qid=1597923777&sr=1-1-fe323411-17bb-433b-b2f8-c44f2e1370d4&th=1",
        },
        {
          name: "Crucial BX500 480GB SSD",
          brand: "Crucial",
          type: "SSD",
          size: 2.5,
          hardwareInterface: "SATA",
          diskSpace: 480,
          price: 50,
          url:
            "https://www.amazon.co.uk/Crucial-CT240BX500SSD1Z-Internal-Solid-State/dp/B07G3KRVWP/ref=sxin_7_ac_d_rm?ac_md=0-0-c3Nk-ac_d_rm&cv_ct_cx=SSD&dchild=1&keywords=SSD&pd_rd_i=B07G3KRZBX&pd_rd_r=efbc0a72-9860-4cde-a2f4-e792dcbcea36&pd_rd_w=6MqwV&pd_rd_wg=9pgKY&pf_rd_p=17aec670-a34a-456d-b214-b9a882c785b0&pf_rd_r=PCHE0CYABKC8G8HRDC16&qid=1597923777&sr=1-1-fe323411-17bb-433b-b2f8-c44f2e1370d4&th=1",
        },
        {
          name: "Crucial BX500 1TB SSD",
          brand: "Crucial",
          type: "SSD",
          size: 2.5,
          hardwareInterface: "SATA",
          diskSpace: 1000,
          price: 117,
          url:
            "https://www.amazon.co.uk/Crucial-CT240BX500SSD1Z-Internal-Solid-State/dp/B07YD5KCB5/ref=sxin_7_ac_d_rm?ac_md=0-0-c3Nk-ac_d_rm&cv_ct_cx=SSD&dchild=1&keywords=SSD&pd_rd_i=B07G3KRZBX&pd_rd_r=efbc0a72-9860-4cde-a2f4-e792dcbcea36&pd_rd_w=6MqwV&pd_rd_wg=9pgKY&pf_rd_p=17aec670-a34a-456d-b214-b9a882c785b0&pf_rd_r=PCHE0CYABKC8G8HRDC16&qid=1597923777&sr=1-1-fe323411-17bb-433b-b2f8-c44f2e1370d4&th=1",
        },
      ],
    },
    {
      name: "motherboard",
      items: [
        {
          name: "ASUS ROG Strix B450 F-Gaming (AMD/ATX/AM4/DDR4)",
          brand: "AMD",
          formFactor: "ATX",
          cpuSocketType: "AM4",
          graphicsCardInterface: "PCI-E",
          wattage: 60,
          maxMemory: 64,
          ramSlots: 4,
          memoryType: "DDR4",
          wireless: true,
          price: 109,
          url:
            "https://www.amazon.co.uk/ASUS-B450-F-GAMING-Socket-Motherboard/dp/B07F714FT7/ref=sr_1_2?dchild=1&keywords=amd+motherboard&qid=1597915568&sr=8-2",
        },
        {
          name: "MSI X570-A PRO  (AMD/ATX/AM4/DDR4)",
          brand: "AMD",
          formFactor: "ATX",
          cpuSocketType: "AM4",
          graphicsCardInterface: "PCI-E",
          wattage: 80,
          maxMemory: 12,
          ramSlots: 48,
          memoryType: "DDR4",
          wireless: false,
          price: 175,
          url:
            "https://www.amazon.co.uk/MSI-X570-PRO-Motherboard-Type-C/dp/B07TDST84Q/ref=psdc_430512031_t2_B07F714FT7",
        },
        {
          name: "ASUS ROG Strix Z390-F Gaming  (Intel/Mini ATX/LGA1151/DDR4)",
          brand: "Intel",
          formFactor: "Mini ATX",
          cpuSocketType: "LGA1151",
          graphicsCardInterface: "PCI-E",
          wattage: 60,
          maxMemory: 64,
          ramSlots: 4,
          memoryType: "DDR4",
          wireless: true,
          price: 120,
          url:
            "https://www.amazon.co.uk/ASUS-Z390-F-LGA1151-Gigabit-Motherboard/dp/B07HS7C8B8/ref=sr_1_11?dchild=1&keywords=intel+motherboard&qid=1597926698&sr=8-11",
        },
        {
          name: "MSI MPG Z490 GAMING EDGE  (Intel/ATX/LGA1200/DDR4)",
          brand: "Intel",
          formFactor: "ATX",
          cpuSocketType: "LGA1200",
          graphicsCardInterface: "PCI-E",
          wattage: 95,
          maxMemory: 12,
          ramSlots: 48,
          memoryType: "DDR4",
          wireless: true,
          price: 194,
          url:
            "https://www.amazon.co.uk/MSI-Motherboard-Bluetooth-Lightning-DisplayPort/dp/B0886NPVRJ/ref=sr_1_1_sspa?crid=2N6IIMDXUFYVP&dchild=1&keywords=msi+motherboard&qid=1597927110&sprefix=MSi+mother%2Caps%2C168&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNkI0UDJRTEtGOE5IJmVuY3J5cHRlZElkPUEwMzY3NTc3MjgxTU1XVVdLS1ZIQSZlbmNyeXB0ZWRBZElkPUEwNDEwMTcxMTBHWTk5R1c4MFlJVCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        },
        {
          name: "Gigabyte B360N  (Intel/Mini ATX/LGA1150/DDR4)",
          brand: "Intel",
          formFactor: "Mini ATX",
          cpuSocketType: "LGA1150",
          graphicsCardInterface: "PCI-Express x16",
          wattage: 50,
          maxMemory: 16,
          ramSlots: 4,
          memoryType: "DDR4",
          wireless: true,
          price: 100,
          url:
            "https://www.amazon.co.uk/Gigabyte-B360N-WIFI-Socket-Express/dp/B07BKJQB6W/ref=sr_1_2?dchild=1&keywords=mini+atx&qid=1597929052&sr=8-2",
        },
        {
          name: "AMD A780/760G  (AMD/Mini ATX/AM2/DDR3)",
          brand: "AMD",
          formFactor: "Mini ATX",
          cpuSocketType: "AM2",
          graphicsCardInterface: "PCI-E",
          wattage: 50,
          maxMemory: 4,
          ramSlots: 2,
          memoryType: "DDR3",
          wireless: false,
          price: 49,
          url:
            "https://www.amazon.co.uk/ASUS-B450-F-GAMING-Socket-Motherboard/dp/B07F714FT7/ref=sr_1_2?dchild=1&keywords=amd+motherboard&qid=1597915568&sr=8-2",
        },
      ],
    },
    {
      name: "cpu",
      items: [
        {
          name: "AMD Ryzen 7 3700X (AM4/DDR4)",
          brand: "AMD",
          cpuSocketType: "AM4",
          wattage: 65,
          processorSpeed: "4.4 GHz",
          cores: 8,
          memoryType: "DDR4",
          price: 287,
          url:
            "https://www.amazon.co.uk/AMD-Ryzen-3700X-Processor-Cache/dp/B07SXMZLPK/ref=sr_1_3?dchild=1&keywords=amd+cpu&qid=1597917309&sr=8-3",
        },
        {
          name: "AMD Ryzen 5 3600X (AM4/DDR4)",
          brand: "AMD",
          cpuSocketType: "AM4",
          wattage: 65,
          processorSpeed: "3.6 GHz",
          cores: 6,
          memoryType: "DDR4",
          price: 168,
          url:
            "https://www.amazon.co.uk/AMD-Ryzen-3600-Processor-Cache/dp/B07STGGQ18/ref=sr_1_3?dchild=1&keywords=AMD+CPU&qid=1597931792&sr=8-3",
        },
        {
          name: "AMD Phanton 2 (AM2/DDR3)",
          brand: "AMD",
          cpuSocketType: "AM2",
          wattage: 125,
          processorSpeed: "3 GHz",
          cores: 4,
          memoryType: "DDR3",
          price: 70,
          url:
            "https://www.amazon.co.uk/AMD-HDZ940XCGIBOX-Phenom-Quad-core-Processor/dp/B001NFT2RI/ref=sr_1_2?dchild=1&keywords=AMD+AM2&qid=1597933958&sr=8-2",
        },
        {
          name: "Intel Core i7 10700K (LGA1200/DDR4)",
          brand: "Intel",
          cpuSocketType: "LGA1200",
          wattage: 125,
          processorSpeed: "3.8 GHz",
          cores: 8,
          memoryType: "DDR4",
          price: 370,
          url:
            "https://www.amazon.co.uk/Intel-i7-10700K-Processor-Unlocked-BX8070110700K/dp/B086ML4XSB/ref=sr_1_4?dchild=1&keywords=Intel+LGA+1200&qid=1597935912&sr=8-4",
        },
        {
          name: "Intel Core i7 9700K (LGA1151/DDR4)",
          brand: "Intel",
          cpuSocketType: "LGA1151",
          wattage: 95,
          processorSpeed: "3.6 GHz",
          cores: 8,
          memoryType: "DDR4",
          price: 312,
          url:
            "https://www.amazon.co.uk/Intel-BX80684I79700K-I7-9700K-3-60GHZ-SKT1151-Noir/dp/B07HHN6KBZ/ref=sr_1_1?dchild=1&keywords=intel+i7&qid=1597915394&sr=8-1",
        },
        {
          name: "Intel Core i7 4790K (LGA1150/DDR3)",
          brand: "Intel",
          cpuSocketType: "LGA1150",
          wattage: 84,
          processorSpeed: "3.6 GHz",
          cores: 4,
          memoryType: "DDR3",
          price: 285,
          url:
            "https://www.amazon.co.uk/Intel-Professional-Processor-Threading-Technology/dp/B00J56YSLM/ref=sr_1_4?dchild=1&keywords=Intel+LGA+1150&qid=1597934184&sr=8-4",
        },
      ],
    },
    {
      name: "ram",
      items: [
        {
          name: "Memory Warhawk RGB Aura Sync 2 x 16GB (DDR4)",
          brand: "OLOy",
          memorySize: 32,
          memoryType: "DDR4",
          sticks: 2,
          wattage: 130,
          price: 126,
          url:
            "https://www.amazon.co.uk/OLOy-Warhawk-288-Pin-Desktop-MD4U163216BEDA/dp/B082PM82FP/ref=sr_1_22?dchild=1&keywords=RAM+DDR4&qid=1598001711&sr=8-22",
        },
        {
          name: "HyperX Fury 1 x 16GB (DDR4)",
          brand: "HyperX",
          memorySize: 16,
          memoryType: "DDR4",
          sticks: 1,
          wattage: 110,
          price: 60,
          url:
            "https://www.amazon.co.uk/HyperX-Fury-HX432C16FB3-16-Black/dp/B07WCQRMWQ/ref=sr_1_10?dchild=1&keywords=RAM+DDR4&qid=1598000773&sr=8-10",
        },
        {
          name: "Corsair Vengeance 2 x 8GB (DDR4)",
          brand: "Corsair",
          memorySize: 16,
          memoryType: "DDR4",
          sticks: 2,
          wattage: 125,
          price: 68,
          url:
            "https://www.amazon.co.uk/Corsair-CMK16GX4M2B3200C16-Vengeance-Performance-Desktop/dp/B0143UM4TC/ref=psdc_430511031_t1_B07WCQRMWQ",
        },
        {
          name: "XUM 2GB Kit 2 x 1GB (DDR3)",
          brand: "XUM",
          memorySize: 2,
          memoryType: "DDR3",
          sticks: 2,
          wattage: 85,
          price: 9,
          url:
            "https://www.amazon.co.uk/XUM-DESKTOP-Memory-1600-1X2GB/dp/B06XDDPLZP/ref=sr_1_1_sspa?dchild=1&keywords=RAM+DDR3+2gb&qid=1598001903&sr=8-1-spons&psc=1&smid=A15A71JNBE3T4J&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFk3SjNONExOOEhSJmVuY3J5cHRlZElkPUEwOTUzOTY5MUQwVk5NRE1PSFhYUiZlbmNyeXB0ZWRBZElkPUEwODk3NTY5MlJUSzVSQkVKTFBPUSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        },
      ],
    },
    {
      name: "gpu",
      items: [
        {
          name: "Gigabyte Nvidia GeForce GTX 1050Ti",
          brand: "Gigabyte",
          graphicsCardInterface: "PCI-E",
          wattage: 350,
          graphicRamSize: 4,
          price: 127,
          url:
            "https://www.amazon.co.uk/Gigabyte-Nvidia-GV-N105TD5-4GD-GDDR5-PCI/dp/B01M6ZANMP/ref=sr_1_7?dchild=1&keywords=GPU+4gb&qid=1598003735&sr=8-7",
        },
        {
          name: "MSI RADEON RX 570 ARMOR",
          brand: "AMD",
          graphicsCardInterface: "PCI-Express x16",
          wattage: 450,
          graphicRamSize: 8,
          price: 140,
          url:
            "https://www.amazon.co.uk/MSI-Radeon-Armor-Express-Graphics/dp/B0785Q6DYP/ref=sr_1_1?dchild=1&keywords=GPU&qid=1598014481&sr=8-1",
        },
        {
          name: "SUS ROG Strix GeForce RTX 2060 OC edition",
          brand: "ASUS",
          graphicsCardInterface: "PCI-E",
          wattage: 500,
          graphicRamSize: 6,
          price: 380,
          url:
            "https://www.amazon.co.uk/ASUS-GeForce-NVIDIA-Architecture-ROG-STRIX-RTX2060-O6G-Gaming/dp/B07MCCHNKL/ref=sr_1_8?dchild=1&keywords=GPU&qid=1598015088&sr=8-8",
        },
        {
          name: "Gigabyte GeForce GT 1030",
          brand: "Gigabyte",
          graphicsCardInterface: "PCI-E",
          wattage: 300,
          graphicRamSize: 2,
          price: 76,
          url:
            "https://www.amazon.co.uk/Gigabyte-GeForce-1030-Low-Profile/dp/B0719CR59P/ref=sr_1_3?dchild=1&keywords=GPU+gtx+740&qid=1598015284&sr=8-3",
        },
        {
          name: "Sapphire 11265-01-20G Radeon NITRO+ RX 580",
          brand: "AMD",
          graphicsCardInterface: "PCI-E",
          wattage: 235,
          graphicRamSize: 8,
          price: 230,
          url:
            "https://www.amazon.co.uk/Sapphire-11265-01-20G-Radeon-backplate-Graphics/dp/B071Y7CKM2/ref=sr_1_22?dchild=1&keywords=GPU+amd&qid=1598015524&sr=8-22",
        },
      ],
    },
    {
      name: "psu",
      items: [
        {
          name: "Corsair VS450 450 W",
          brand: "Corsair",
          wattage: 450,
          price: 40,
          url:
            "https://www.amazon.co.uk/Corsair-VS450-Active-Certified-Supply/dp/B078Y44N73/ref=sr_1_6?dchild=1&keywords=PSU&qid=1598016549&sr=8-6",
        },
        {
          name: "Corsair VS550 550 W",
          brand: "Corsair",
          wattage: 550,
          price: 45,
          url:
            "https://www.amazon.co.uk/Corsair-VS550-Active-Certified-Supply/dp/B078XXNC3J/ref=sr_1_4?dchild=1&keywords=PSU&qid=1598016549&sr=8-4",
        },
        {
          name: "Corsair RM850 650 W - Gold Certified",
          brand: "Corsair",
          wattage: 650,
          price: 100,
          url:
            "https://www.amazon.co.uk/Corsair-RM650-Certified-Modular-Supply/dp/B07RYNFR8R/ref=sr_1_18?dchild=1&keywords=PSU&qid=1598016549&sr=8-18",
        },
        {
          name: "Corsair RM850 850 W - Gold Certified",
          brand: "Corsair",
          wattage: 850,
          price: 125,
          url:
            "https://www.amazon.co.uk/Corsair-RM850-Certified-Modular-Supply/dp/B07S2SXVR5/ref=sr_1_5?dchild=1&keywords=PSU&qid=1598016549&sr=8-5",
        },
      ],
    },
  ];

  let listItems = components.map((x) => (
    <ItemList
      key={x.name}
      name={x.name}
      items={x.items}
      currentSpecs={props.currentSpecs}
      selectionHandler={props.selectionHandler.bind(this)}
    />
  ));

  return <div>{listItems}</div>;
};

export default Form;
