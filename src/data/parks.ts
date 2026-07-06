export interface NationalPark {
  id: string;
  name: string;
  state: string[];
  region: 'West' | 'Midwest' | 'South' | 'Northeast';
  visited: boolean;
  coords: { x: number; y: number }; // Relative coordinates on the 959x593 SVG map
  visitYear?: number;
  photoUrl?: string;
  photoCaption?: string;
  description: string;
}

export const nationalParks: NationalPark[] = [
  {
    id: "acadia",
    name: "Acadia National Park",
    state: ["ME"],
    region: "Northeast",
    visited: true,
    coords: { x: 915, y: 105 },
    visitYear: 2023,
    photoUrl: "/assets/echo_lake_autumn.jpeg",
    photoCaption: "Echo Lake in autumn foliage, Acadia",
    description: "Features rocky shorelines, granite peaks, islands, and lakes. Home to Cadillac Mountain, the tallest peak on the U.S. Atlantic coast."
  },
  {
    id: "yellowstone",
    name: "Yellowstone National Park",
    state: ["WY", "MT", "ID"],
    region: "West",
    visited: true,
    coords: { x: 260, y: 160 },
    visitYear: 2022,
    photoUrl: "/assets/yellowstone_mammoth_hot_springs.jpeg",
    photoCaption: "Travertine terraces at Mammoth Hot Springs",
    description: "The world's first national park, sitting atop a volcanic hot spot. Famous for geysers, hot springs, and abundant wildlife including grizzly bears and bison."
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon National Park",
    state: ["AZ"],
    region: "West",
    visited: true,
    coords: { x: 180, y: 310 },
    visitYear: 2021,
    photoUrl: "/assets/grand_canyon_clouds.jpeg",
    photoCaption: "Sunrise clouds drifting through the Grand Canyon",
    description: "A powerful and inspiring landscape, carved by the Colorado River, exposing millions of years of geological history in its layered red rock bands."
  },
  {
    id: "north-cascades",
    name: "North Cascades National Park",
    state: ["WA"],
    region: "West",
    visited: true,
    coords: { x: 145, y: 70 },
    visitYear: 2022,
    photoUrl: "/assets/diablo_lake.jpeg",
    photoCaption: "The turquoise waters of Diablo Lake, North Cascades",
    description: "A wilderness of forested valleys, cascading waterfalls, and over 300 glaciers, earning it the nickname the 'American Alps'."
  },
  {
    id: "everglades",
    name: "Everglades National Park",
    state: ["FL"],
    region: "South",
    visited: true,
    coords: { x: 810, y: 535 },
    visitYear: 2024,
    photoUrl: "/assets/wildlife_alligators.webp",
    photoCaption: "Alligators basking in the Everglades wetlands",
    description: "The largest subtropical wilderness in the United States, protecting an unparalleled ecosystem of sawgrass marshes, mangrove forests, and diverse wildlife."
  },
  {
    id: "zion",
    name: "Zion National Park",
    state: ["UT"],
    region: "West",
    visited: true,
    coords: { x: 185, y: 280 },
    visitYear: 2021,
    photoUrl: "/assets/zion_canyon.jpg",
    photoCaption: "Towering red rock cliffs of Zion Canyon",
    description: "Features towering cream, pink, and red sandstone cliffs. Famous for hikes like Angels Landing and the Narrows, carved by the Virgin River."
  },
  {
    id: "mammoth-cave",
    name: "Mammoth Cave National Park",
    state: ["KY"],
    region: "South",
    visited: true,
    coords: { x: 670, y: 300 },
    visitYear: 2023,
    description: "Protects the world's longest known cave system, with vast chambers, deep shafts, and fascinating limestone labyrinths."
  },
  {
    id: "great-sand-dunes",
    name: "Great Sand Dunes National Park",
    state: ["CO"],
    region: "West",
    visited: true,
    coords: { x: 330, y: 275 },
    visitYear: 2022,
    photoUrl: "/assets/great_sand_dunes.jpg",
    photoCaption: "Glistening sand dunes of Great Sand Dunes",
    description: "Home to the tallest sand dunes in North America, nestled against the rugged Sangre de Cristo Mountains."
  },
  {
    id: "rocky-mountain",
    name: "Rocky Mountain National Park",
    state: ["CO"],
    region: "West",
    visited: true,
    coords: { x: 320, y: 220 },
    visitYear: 2022,
    photoUrl: "/assets/rocky_mountain_lake.jpg",
    photoCaption: "Pristine alpine lake reflections in Rocky Mountain",
    description: "Features majestic mountain views, alpine lakes, diverse wildlife, and the high-elevation Trail Ridge Road crossing the Continental Divide."
  },
  {
    id: "white-sands",
    name: "White Sands National Park",
    state: ["NM"],
    region: "West",
    visited: true,
    coords: { x: 310, y: 370 },
    visitYear: 2021,
    description: "Protects the world's largest gypsum sand dune field, creating a stunning landscape of glistening white sands."
  },
  {
    id: "carlsbad-caverns",
    name: "Carlsbad Caverns National Park",
    state: ["NM"],
    region: "West",
    visited: true,
    coords: { x: 335, y: 395 },
    visitYear: 2021,
    description: "Features more than 119 limestone caves, including the massive 'Big Room', decorated with elaborate stalactites and stalagmites."
  },
  {
    id: "big-bend",
    name: "Big Bend National Park",
    state: ["TX"],
    region: "South",
    visited: true,
    coords: { x: 390, y: 470 },
    visitYear: 2019,
    description: "A vast desert expanse situated in the bend of the Rio Grande, encompassing the Chisos Mountains and deep canyons."
  },
  {
    id: "crater-lake",
    name: "Crater Lake National Park",
    state: ["OR"],
    region: "West",
    visited: true,
    coords: { x: 105, y: 140 },
    visitYear: 2022,
    description: "Famous for its deep blue water and water clarity, the lake was formed by the collapse of the volcano Mount Mazama."
  },
  {
    id: "olympic",
    name: "Olympic National Park",
    state: ["WA"],
    region: "West",
    visited: true,
    coords: { x: 95, y: 70 },
    visitYear: 2022,
    photoUrl: "/assets/olympic_hoh_rainforest.jpg",
    photoCaption: "Hanging moss in the Hoh Rain Forest, Olympic",
    description: "Features diverse ecosystems including glacier-capped mountains, temperate rainforests, and rugged Pacific ocean shorelines."
  },
  {
    id: "cuyahoga-valley",
    name: "Cuyahoga Valley National Park",
    state: ["OH"],
    region: "Midwest",
    visited: true,
    coords: { x: 740, y: 245 },
    visitYear: 2023,
    description: "Protects the winding Cuyahoga River between Cleveland and Akron, featuring historic canal trails and waterfalls."
  },
  {
    id: "gateway-arch",
    name: "Gateway Arch National Park",
    state: ["MO"],
    region: "Midwest",
    visited: true,
    coords: { x: 585, y: 275 },
    visitYear: 2023,
    description: "A monument symbolizing the westward expansion of the United States, located in St. Louis."
  },
  {
    id: "great-smoky-mountains",
    name: "Great Smoky Mountains National Park",
    state: ["TN", "NC"],
    region: "South",
    visited: true,
    coords: { x: 720, y: 340 },
    visitYear: 2023,
    description: "America's most visited national park, renowned for its blue-misted ridge lines and rich biodiversity."
  },
  {
    id: "shenandoah",
    name: "Shenandoah National Park",
    state: ["VA"],
    region: "South",
    visited: true,
    coords: { x: 775, y: 270 },
    visitYear: 2023,
    description: "Protects a long, narrow strip of the Blue Ridge Mountains, traversed by the scenic Skyline Drive."
  },
  // Unvisited Parks
  {
    id: "arches",
    name: "Arches National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 215, y: 255 },
    description: "Protects over 2,000 natural sandstone arches, including the famous Delicate Arch."
  },
  {
    id: "badlands",
    name: "Badlands National Park",
    state: ["SD"],
    region: "Midwest",
    visited: false,
    coords: { x: 385, y: 180 },
    description: "A expanse of layered rock formations, steep canyons, and towering spires, mixed with one of the largest grass prairies."
  },
  {
    id: "biscayne",
    name: "Biscayne National Park",
    state: ["FL"],
    region: "South",
    visited: false,
    coords: { x: 820, y: 550 },
    description: "Protects aquamarine waters, emerald islands, and fish-filled coral reefs. Ninety-five percent of the park is water."
  },
  {
    id: "black-canyon",
    name: "Black Canyon of the Gunnison National Park",
    state: ["CO"],
    region: "West",
    visited: false,
    coords: { x: 290, y: 260 },
    description: "Protects some of the steepest cliffs, oldest rock, and craggiest spires in North America, carved by the Gunnison River."
  },
  {
    id: "bryce-canyon",
    name: "Bryce Canyon National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 195, y: 270 },
    description: "Famous for its giant natural amphitheaters filled with red, orange, and white hoodoos."
  },
  {
    id: "canyonlands",
    name: "Canyonlands National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 210, y: 265 },
    description: "A colorful landscape of canyons, mesas, and arches carved by the Colorado River and Green River."
  },
  {
    id: "capitol-reef",
    name: "Capitol Reef National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 200, y: 260 },
    description: "Protects a massive warp in the earth's crust, featuring canyons, cliffs, domes, and bridges."
  },
  {
    id: "channel-islands",
    name: "Channel Islands National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 395 },
    description: "Encompasses five remarkable islands off the coast of Southern California, with unique wildlife and sea caves."
  },
  {
    id: "congaree",
    name: "Congaree National Park",
    state: ["SC"],
    region: "South",
    visited: false,
    coords: { x: 770, y: 370 },
    description: "Preserves the largest intact expanse of old-growth bottomland hardwood forest in the southeastern United States."
  },
  {
    id: "death-valley",
    name: "Death Valley National Park",
    state: ["CA", "NV"],
    region: "West",
    visited: false,
    coords: { x: 120, y: 310 },
    description: "The hottest, driest, and lowest national park in North America, featuring salt flats, sand dunes, and badlands."
  },
  {
    id: "denali",
    name: "Denali National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 105, y: 500 },
    description: "Home to North America's tallest peak, Denali, and millions of acres of wild tundra, glaciers, and wildlife."
  },
  {
    id: "dry-tortugas",
    name: "Dry Tortugas National Park",
    state: ["FL"],
    region: "South",
    visited: false,
    coords: { x: 780, y: 560 },
    description: "A remote park in the Gulf of Mexico, accessible only by boat or seaplane, featuring Fort Jefferson and vibrant coral reefs."
  },
  {
    id: "gates-of-the-arctic",
    name: "Gates of the Arctic National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 100, y: 465 },
    description: "An entirely roadless wilderness park in northern Alaska, protecting pristine Arctic ecosystems."
  },
  {
    id: "glacier",
    name: "Glacier National Park",
    state: ["MT"],
    region: "West",
    visited: false,
    coords: { x: 250, y: 60 },
    description: "Features spectacular carved peaks, valleys, and glaciers, traversed by the famous Going-to-the-Sun Road."
  },
  {
    id: "glacier-bay",
    name: "Glacier Bay National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 180, y: 535 },
    description: "A massive marine park in Alaska, featuring tidewater glaciers, fjords, and marine wildlife."
  },
  {
    id: "grand-teton",
    name: "Grand Teton National Park",
    state: ["WY"],
    region: "West",
    visited: false,
    coords: { x: 260, y: 180 },
    description: "Encompasses the dramatic Teton Range, rising abruptly over Jackson Hole, with pristine alpine lakes."
  },
  {
    id: "great-basin",
    name: "Great Basin National Park",
    state: ["NV"],
    region: "West",
    visited: false,
    coords: { x: 155, y: 250 },
    description: "Protects Wheeler Peak, bristlecone pine groves (the oldest trees on Earth), and Lehman Caves."
  },
  {
    id: "guadalupe-mountains",
    name: "Guadalupe Mountains National Park",
    state: ["TX"],
    region: "South",
    visited: false,
    coords: { x: 335, y: 410 },
    description: "Features the highest peak in Texas, Guadalupe Peak, and a pristine fossilized Permian reef."
  },
  {
    id: "haleakala",
    name: "Haleakalā National Park",
    state: ["HI"],
    region: "West",
    visited: false,
    coords: { x: 230, y: 550 },
    description: "Protects the massive Haleakalā shield volcano on Maui, featuring a desert-like crater and coastal rainforest."
  },
  {
    id: "hawaii-volcanoes",
    name: "Hawaiʻi Volcanoes National Park",
    state: ["HI"],
    region: "West",
    visited: false,
    coords: { x: 240, y: 565 },
    description: "Protects two of the world's most active volcanoes, Kīlauea and Mauna Loa, on the Big Island."
  },
  {
    id: "hot-springs",
    name: "Hot Springs National Park",
    state: ["AR"],
    region: "South",
    visited: false,
    coords: { x: 555, y: 360 },
    description: "An urban park protecting historic bathhouses built around natural thermal springs in Arkansas."
  },
  {
    id: "indiana-dunes",
    name: "Indiana Dunes National Park",
    state: ["IN"],
    region: "Midwest",
    visited: false,
    coords: { x: 645, y: 220 },
    description: "Protects the sandy shores, high dunes, marshes, and forests along the southern coast of Lake Michigan."
  },
  {
    id: "isle-royale",
    name: "Isle Royale National Park",
    state: ["MI"],
    region: "Midwest",
    visited: false,
    coords: { x: 600, y: 110 },
    description: "A remote, isolated island wilderness in Lake Michigan/Superior, famous for its moose and wolf studies."
  },
  {
    id: "joshua-tree",
    name: "Joshua Tree National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 105, y: 395 },
    description: "Features bizarre Joshua trees, giant boulders, and a rugged desert landscape bridging the Mojave and Colorado deserts."
  },
  {
    id: "katmai",
    name: "Katmai National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 70, y: 555 },
    description: "Famous for brown bears catching salmon at Brooks Falls and the Valley of Ten Thousand Smokes."
  },
  {
    id: "kenai-fjords",
    name: "Kenai Fjords National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 115, y: 525 },
    description: "Protects the massive Harding Icefield, glaciers calving into the sea, and coastal fjords in Alaska."
  },
  {
    id: "kings-canyon",
    name: "Kings Canyon National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 315 },
    description: "Home to giant sequoia groves (including the General Grant tree) and a deep glaciated canyon."
  },
  {
    id: "kobuk-valley",
    name: "Kobuk Valley National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 65, y: 470 },
    description: "Protects active sand dunes in the Arctic, crossed by caribou migration routes."
  },
  {
    id: "lake-clark",
    name: "Lake Clark National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 90, y: 525 },
    description: "Features active volcanoes, jagged peaks, glaciers, turquoise lakes, and wild salmon runs."
  },
  {
    id: "lassen-volcanic",
    name: "Lassen Volcanic National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 180 },
    description: "Features boiling mud pots, steaming sulfur vents, and Lassen Peak, the world's largest plug dome volcano."
  },
  {
    id: "mesa-verde",
    name: "Mesa Verde National Park",
    state: ["CO"],
    region: "West",
    visited: false,
    coords: { x: 280, y: 280 },
    description: "Protects over 5,000 archaeological sites, including some of the best-preserved Ancestral Puebloan cliff dwellings."
  },
  {
    id: "mount-rainier",
    name: "Mount Rainier National Park",
    state: ["WA"],
    region: "West",
    visited: false,
    coords: { x: 120, y: 85 },
    description: "Centers around the towering glacier-capped Mount Rainier, an active stratovolcano."
  },
  {
    id: "new-river-gorge",
    name: "New River Gorge National Park",
    state: ["WV"],
    region: "South",
    visited: false,
    coords: { x: 745, y: 295 },
    description: "Protects a deep river canyon famous for whitewater rafting, rock climbing, and the massive steel arch bridge."
  },
  {
    id: "petrified-forest",
    name: "Petrified Forest National Park",
    state: ["AZ"],
    region: "West",
    visited: false,
    coords: { x: 210, y: 330 },
    description: "Features large deposits of petrified wood, badlands, and archaeological sites in the Painted Desert."
  },
  {
    id: "pinnacles",
    name: "Pinnacles National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 65, y: 295 },
    description: "Protects the remains of an ancient volcano, featuring caves, rock formations, and nesting California condors."
  },
  {
    id: "redwood",
    name: "Redwood National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 60, y: 135 },
    description: "Home to the tallest trees on Earth, the coast redwoods, as well as rivers and rugged coastline."
  },
  {
    id: "saguaro",
    name: "Saguaro National Park",
    state: ["AZ"],
    region: "West",
    visited: false,
    coords: { x: 190, y: 375 },
    description: "Protects vast forests of the giant saguaro cactus, the symbol of the American West."
  },
  {
    id: "sequoia",
    name: "Sequoia National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 325 },
    description: "Home to the giant sequoias, including the General Sherman tree, the largest living tree on Earth by volume."
  },
  {
    id: "theodore-roosevelt",
    name: "Theodore Roosevelt National Park",
    state: ["ND"],
    region: "Midwest",
    visited: false,
    coords: { x: 380, y: 110 },
    description: "Where the Great Plains meet the Badlands. Home to bison, wild horses, and scenic drives."
  },
  {
    id: "virgin-islands",
    name: "Virgin Islands National Park",
    state: ["VI"],
    region: "South",
    visited: false,
    coords: { x: 910, y: 550 },
    description: "Protects white sand beaches, coral reefs, historic sugar plantations, and tropical forests."
  },
  {
    id: "voyageurs",
    name: "Voyageurs National Park",
    state: ["MN"],
    region: "Midwest",
    visited: false,
    coords: { x: 520, y: 95 },
    description: "A water-based park on the Canadian border, famous for boating, canoeing, fishing, and northern lights."
  },
  {
    id: "wind-cave",
    name: "Wind Cave National Park",
    state: ["SD"],
    region: "Midwest",
    visited: false,
    coords: { x: 375, y: 195 },
    description: "Famous for its unique calcite 'boxwork' formations and above-ground bison prairies."
  },
  {
    id: "wrangell-st-elias",
    name: "Wrangell-St. Elias National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 155, y: 505 },
    description: "America's largest national park by area, containing massive volcanoes, glaciers, and historic mining towns."
  },
  {
    id: "yosemite",
    name: "Yosemite National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 78, y: 300 },
    description: "Renowned for its granite monoliths, waterfalls, giant sequoia groves, and diverse wildlife."
  },
  {
    id: "american-samoa",
    name: "National Park of American Samoa",
    state: ["AS"],
    region: "West",
    visited: false,
    coords: { x: 215, y: 565 },
    description: "Protects coral reefs, rainforests, volcanic peaks, and Samoan culture across three volcanic islands."
  }
];
