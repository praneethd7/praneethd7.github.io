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
  npsUrl: string;
  description: string;
}

export const nationalParks: NationalPark[] = [
  {
    id: "acadia",
    npsUrl: "https://www.nps.gov/acad/index.htm",
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
    npsUrl: "https://www.nps.gov/yell/index.htm",
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
    npsUrl: "https://www.nps.gov/grca/index.htm",
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
    npsUrl: "https://www.nps.gov/noca/index.htm",
    name: "North Cascades National Park",
    state: ["WA"],
    region: "West",
    visited: true,
    coords: { x: 145, y: 70 },
    visitYear: 2025,
    photoUrl: "/assets/diablo_lake.jpeg",
    photoCaption: "The turquoise waters of Diablo Lake, North Cascades",
    description: "A wilderness of forested valleys, cascading waterfalls, and over 300 glaciers, earning it the nickname the 'American Alps'."
  },
  {
    id: "everglades",
    npsUrl: "https://www.nps.gov/ever/index.htm",
    name: "Everglades National Park",
    state: ["FL"],
    region: "South",
    visited: true,
    coords: { x: 810, y: 535 },
    visitYear: 2026,
    photoUrl: "/assets/wildlife_alligators.webp",
    photoCaption: "Alligators basking in the Everglades wetlands",
    description: "The largest subtropical wilderness in the United States, protecting an unparalleled ecosystem of sawgrass marshes, mangrove forests, and diverse wildlife."
  },
  {
    id: "zion",
    npsUrl: "https://www.nps.gov/zion/index.htm",
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
    npsUrl: "https://www.nps.gov/maca/index.htm",
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
    npsUrl: "https://www.nps.gov/grsa/index.htm",
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
    npsUrl: "https://www.nps.gov/romo/index.htm",
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
    npsUrl: "https://www.nps.gov/whsa/index.htm",
    name: "White Sands National Park",
    state: ["NM"],
    region: "West",
    visited: true,
    coords: { x: 310, y: 370 },
    visitYear: 2025,
    photoUrl: "/assets/white_sands.jpg",
    photoCaption: "Stunning gypsum dunes glistening at White Sands",
    description: "Protects the world's largest gypsum sand dune field, creating a stunning landscape of glistening white sands."
  },
  {
    id: "carlsbad-caverns",
    npsUrl: "https://www.nps.gov/cave/index.htm",
    name: "Carlsbad Caverns National Park",
    state: ["NM"],
    region: "West",
    visited: true,
    coords: { x: 335, y: 395 },
    visitYear: 2025,
    photoUrl: "/assets/carlsbad_caverns.jpg",
    photoCaption: "Elaborate limestone formations inside Carlsbad Caverns",
    description: "Features more than 119 limestone caves, including the massive 'Big Room', decorated with elaborate stalactites and stalagmites."
  },
  {
    id: "big-bend",
    npsUrl: "https://www.nps.gov/bibe/index.htm",
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
    npsUrl: "https://www.nps.gov/crla/index.htm",
    name: "Crater Lake National Park",
    state: ["OR"],
    region: "West",
    visited: true,
    coords: { x: 105, y: 140 },
    visitYear: 2022,
    photoUrl: "/assets/crater_lake.jpeg",
    photoCaption: "The deep blue waters of Crater Lake",
    description: "Famous for its deep blue water and water clarity, the lake was formed by the collapse of the volcano Mount Mazama."
  },
  {
    id: "olympic",
    npsUrl: "https://www.nps.gov/olym/index.htm",
    name: "Olympic National Park",
    state: ["WA"],
    region: "West",
    visited: true,
    coords: { x: 95, y: 70 },
    visitYear: 2025,
    photoUrl: "/assets/olympic_hoh_rainforest.jpg",
    photoCaption: "Hanging moss in the Hoh Rain Forest, Olympic",
    description: "Features diverse ecosystems including glacier-capped mountains, temperate rainforests, and rugged Pacific ocean shorelines."
  },
  {
    id: "cuyahoga-valley",
    npsUrl: "https://www.nps.gov/cuva/index.htm",
    name: "Cuyahoga Valley National Park",
    state: ["OH"],
    region: "Midwest",
    visited: true,
    coords: { x: 740, y: 245 },
    visitYear: 2023,
    photoUrl: "/assets/cuyahoga_valley.jpeg",
    photoCaption: "Historic canal trails in Cuyahoga Valley",
    description: "Protects the winding Cuyahoga River between Cleveland and Akron, featuring historic canal trails and waterfalls."
  },
  {
    id: "gateway-arch",
    npsUrl: "https://www.nps.gov/jeff/index.htm",
    name: "Gateway Arch National Park",
    state: ["MO"],
    region: "Midwest",
    visited: true,
    coords: { x: 585, y: 275 },
    visitYear: 2023,
    photoUrl: "/assets/gateway_arch.jpeg",
    photoCaption: "The iconic Gateway Arch in St. Louis",
    description: "A monument symbolizing the westward expansion of the United States, located in St. Louis."
  },
  {
    id: "great-smoky-mountains",
    npsUrl: "https://www.nps.gov/grsm/index.htm",
    name: "Great Smoky Mountains National Park",
    state: ["TN", "NC"],
    region: "South",
    visited: true,
    coords: { x: 720, y: 340 },
    visitYear: 2023,
    photoUrl: "/assets/great_smoky_mountains.jpeg",
    photoCaption: "Sunset silhouette of evergreens over blue-misted ridges at Clingmans Dome (Kuwohi)",
    description: "America's most visited national park, renowned for its blue-misted ridge lines and rich biodiversity."
  },
  {
    id: "shenandoah",
    npsUrl: "https://www.nps.gov/shen/index.htm",
    name: "Shenandoah National Park",
    state: ["VA"],
    region: "South",
    visited: true,
    coords: { x: 775, y: 270 },
    visitYear: 2023,
    photoUrl: "/assets/shenandoah.jpeg",
    photoCaption: "Scenic rocky overlook of the lush valleys along Skyline Drive in Shenandoah",
    description: "Protects a long, narrow strip of the Blue Ridge Mountains, traversed by the scenic Skyline Drive."
  },
  // Unvisited Parks
  {
    id: "arches",
    npsUrl: "https://www.nps.gov/arch/index.htm",
    name: "Arches National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 215, y: 255 },
    description: "Protects over 2,000 natural sandstone arches, including the famous Delicate Arch."
  },
  {
    id: "badlands",
    npsUrl: "https://www.nps.gov/badl/index.htm",
    name: "Badlands National Park",
    state: ["SD"],
    region: "Midwest",
    visited: false,
    coords: { x: 385, y: 180 },
    description: "A expanse of layered rock formations, steep canyons, and towering spires, mixed with one of the largest grass prairies."
  },
  {
    id: "biscayne",
    npsUrl: "https://www.nps.gov/bisc/index.htm",
    name: "Biscayne National Park",
    state: ["FL"],
    region: "South",
    visited: false,
    coords: { x: 820, y: 550 },
    description: "Protects aquamarine waters, emerald islands, and fish-filled coral reefs. Ninety-five percent of the park is water."
  },
  {
    id: "black-canyon",
    npsUrl: "https://www.nps.gov/blca/index.htm",
    name: "Black Canyon of the Gunnison National Park",
    state: ["CO"],
    region: "West",
    visited: false,
    coords: { x: 290, y: 260 },
    description: "Protects some of the steepest cliffs, oldest rock, and craggiest spires in North America, carved by the Gunnison River."
  },
  {
    id: "bryce-canyon",
    npsUrl: "https://www.nps.gov/brca/index.htm",
    name: "Bryce Canyon National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 195, y: 270 },
    description: "Famous for its giant natural amphitheaters filled with red, orange, and white hoodoos."
  },
  {
    id: "canyonlands",
    npsUrl: "https://www.nps.gov/cany/index.htm",
    name: "Canyonlands National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 210, y: 265 },
    description: "A colorful landscape of canyons, mesas, and arches carved by the Colorado River and Green River."
  },
  {
    id: "capitol-reef",
    npsUrl: "https://www.nps.gov/care/index.htm",
    name: "Capitol Reef National Park",
    state: ["UT"],
    region: "West",
    visited: false,
    coords: { x: 200, y: 260 },
    description: "Protects a massive warp in the earth's crust, featuring canyons, cliffs, domes, and bridges."
  },
  {
    id: "channel-islands",
    npsUrl: "https://www.nps.gov/chis/index.htm",
    name: "Channel Islands National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 395 },
    description: "Encompasses five remarkable islands off the coast of Southern California, with unique wildlife and sea caves."
  },
  {
    id: "congaree",
    npsUrl: "https://www.nps.gov/cong/index.htm",
    name: "Congaree National Park",
    state: ["SC"],
    region: "South",
    visited: false,
    coords: { x: 770, y: 370 },
    description: "Preserves the largest intact expanse of old-growth bottomland hardwood forest in the southeastern United States."
  },
  {
    id: "death-valley",
    npsUrl: "https://www.nps.gov/deva/index.htm",
    name: "Death Valley National Park",
    state: ["CA", "NV"],
    region: "West",
    visited: false,
    coords: { x: 120, y: 310 },
    description: "The hottest, driest, and lowest national park in North America, featuring salt flats, sand dunes, and badlands."
  },
  {
    id: "denali",
    npsUrl: "https://www.nps.gov/dena/index.htm",
    name: "Denali National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 105, y: 500 },
    description: "Home to North America's tallest peak, Denali, and millions of acres of wild tundra, glaciers, and wildlife."
  },
  {
    id: "dry-tortugas",
    npsUrl: "https://www.nps.gov/drto/index.htm",
    name: "Dry Tortugas National Park",
    state: ["FL"],
    region: "South",
    visited: false,
    coords: { x: 780, y: 560 },
    description: "A remote park in the Gulf of Mexico, accessible only by boat or seaplane, featuring Fort Jefferson and vibrant coral reefs."
  },
  {
    id: "gates-of-the-arctic",
    npsUrl: "https://www.nps.gov/gaar/index.htm",
    name: "Gates of the Arctic National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 100, y: 465 },
    description: "An entirely roadless wilderness park in northern Alaska, protecting pristine Arctic ecosystems."
  },
  {
    id: "glacier",
    npsUrl: "https://www.nps.gov/glac/index.htm",
    name: "Glacier National Park",
    state: ["MT"],
    region: "West",
    visited: false,
    coords: { x: 250, y: 60 },
    description: "Features spectacular carved peaks, valleys, and glaciers, traversed by the famous Going-to-the-Sun Road."
  },
  {
    id: "glacier-bay",
    npsUrl: "https://www.nps.gov/glba/index.htm",
    name: "Glacier Bay National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 180, y: 535 },
    description: "A massive marine park in Alaska, featuring tidewater glaciers, fjords, and marine wildlife."
  },
  {
    id: "grand-teton",
    npsUrl: "https://www.nps.gov/grte/index.htm",
    name: "Grand Teton National Park",
    state: ["WY"],
    region: "West",
    visited: false,
    coords: { x: 260, y: 180 },
    description: "Encompasses the dramatic Teton Range, rising abruptly over Jackson Hole, with pristine alpine lakes."
  },
  {
    id: "great-basin",
    npsUrl: "https://www.nps.gov/grba/index.htm",
    name: "Great Basin National Park",
    state: ["NV"],
    region: "West",
    visited: false,
    coords: { x: 155, y: 250 },
    description: "Protects Wheeler Peak, bristlecone pine groves (the oldest trees on Earth), and Lehman Caves."
  },
  {
    id: "guadalupe-mountains",
    npsUrl: "https://www.nps.gov/gumo/index.htm",
    name: "Guadalupe Mountains National Park",
    state: ["TX"],
    region: "South",
    visited: false,
    coords: { x: 335, y: 410 },
    description: "Features the highest peak in Texas, Guadalupe Peak, and a pristine fossilized Permian reef."
  },
  {
    id: "haleakala",
    npsUrl: "https://www.nps.gov/hale/index.htm",
    name: "Haleakalā National Park",
    state: ["HI"],
    region: "West",
    visited: false,
    coords: { x: 230, y: 550 },
    description: "Protects the massive Haleakalā shield volcano on Maui, featuring a desert-like crater and coastal rainforest."
  },
  {
    id: "hawaii-volcanoes",
    npsUrl: "https://www.nps.gov/havo/index.htm",
    name: "Hawaiʻi Volcanoes National Park",
    state: ["HI"],
    region: "West",
    visited: false,
    coords: { x: 240, y: 565 },
    description: "Protects two of the world's most active volcanoes, Kīlauea and Mauna Loa, on the Big Island."
  },
  {
    id: "hot-springs",
    npsUrl: "https://www.nps.gov/hosp/index.htm",
    name: "Hot Springs National Park",
    state: ["AR"],
    region: "South",
    visited: false,
    coords: { x: 555, y: 360 },
    description: "An urban park protecting historic bathhouses built around natural thermal springs in Arkansas."
  },
  {
    id: "indiana-dunes",
    npsUrl: "https://www.nps.gov/indu/index.htm",
    name: "Indiana Dunes National Park",
    state: ["IN"],
    region: "Midwest",
    visited: false,
    coords: { x: 645, y: 220 },
    description: "Protects the sandy shores, high dunes, marshes, and forests along the southern coast of Lake Michigan."
  },
  {
    id: "isle-royale",
    npsUrl: "https://www.nps.gov/isro/index.htm",
    name: "Isle Royale National Park",
    state: ["MI"],
    region: "Midwest",
    visited: false,
    coords: { x: 600, y: 110 },
    description: "A remote, isolated island wilderness in Lake Michigan/Superior, famous for its moose and wolf studies."
  },
  {
    id: "joshua-tree",
    npsUrl: "https://www.nps.gov/jotr/index.htm",
    name: "Joshua Tree National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 105, y: 395 },
    description: "Features bizarre Joshua trees, giant boulders, and a rugged desert landscape bridging the Mojave and Colorado deserts."
  },
  {
    id: "katmai",
    npsUrl: "https://www.nps.gov/katm/index.htm",
    name: "Katmai National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 70, y: 555 },
    description: "Famous for brown bears catching salmon at Brooks Falls and the Valley of Ten Thousand Smokes."
  },
  {
    id: "kenai-fjords",
    npsUrl: "https://www.nps.gov/kefj/index.htm",
    name: "Kenai Fjords National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 115, y: 525 },
    description: "Protects the massive Harding Icefield, glaciers calving into the sea, and coastal fjords in Alaska."
  },
  {
    id: "kings-canyon",
    npsUrl: "https://www.nps.gov/kica/index.htm",
    name: "Kings Canyon National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 315 },
    description: "Home to giant sequoia groves (including the General Grant tree) and a deep glaciated canyon."
  },
  {
    id: "kobuk-valley",
    npsUrl: "https://www.nps.gov/kova/index.htm",
    name: "Kobuk Valley National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 65, y: 470 },
    description: "Protects active sand dunes in the Arctic, crossed by caribou migration routes."
  },
  {
    id: "lake-clark",
    npsUrl: "https://www.nps.gov/lacl/index.htm",
    name: "Lake Clark National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 90, y: 525 },
    description: "Features active volcanoes, jagged peaks, glaciers, turquoise lakes, and wild salmon runs."
  },
  {
    id: "lassen-volcanic",
    npsUrl: "https://www.nps.gov/lavo/index.htm",
    name: "Lassen Volcanic National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 180 },
    description: "Features boiling mud pots, steaming sulfur vents, and Lassen Peak, the world's largest plug dome volcano."
  },
  {
    id: "mesa-verde",
    npsUrl: "https://www.nps.gov/meve/index.htm",
    name: "Mesa Verde National Park",
    state: ["CO"],
    region: "West",
    visited: false,
    coords: { x: 280, y: 280 },
    description: "Protects over 5,000 archaeological sites, including some of the best-preserved Ancestral Puebloan cliff dwellings."
  },
  {
    id: "mount-rainier",
    npsUrl: "https://www.nps.gov/mora/index.htm",
    name: "Mount Rainier National Park",
    state: ["WA"],
    region: "West",
    visited: false,
    coords: { x: 120, y: 85 },
    description: "Centers around the towering glacier-capped Mount Rainier, an active stratovolcano."
  },
  {
    id: "new-river-gorge",
    npsUrl: "https://www.nps.gov/neri/index.htm",
    name: "New River Gorge National Park",
    state: ["WV"],
    region: "South",
    visited: false,
    coords: { x: 745, y: 295 },
    description: "Protects a deep river canyon famous for whitewater rafting, rock climbing, and the massive steel arch bridge."
  },
  {
    id: "petrified-forest",
    npsUrl: "https://www.nps.gov/pefo/index.htm",
    name: "Petrified Forest National Park",
    state: ["AZ"],
    region: "West",
    visited: false,
    coords: { x: 210, y: 330 },
    description: "Features large deposits of petrified wood, badlands, and archaeological sites in the Painted Desert."
  },
  {
    id: "pinnacles",
    npsUrl: "https://www.nps.gov/pinn/index.htm",
    name: "Pinnacles National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 65, y: 295 },
    description: "Protects the remains of an ancient volcano, featuring caves, rock formations, and nesting California condors."
  },
  {
    id: "redwood",
    npsUrl: "https://www.nps.gov/redw/index.htm",
    name: "Redwood National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 60, y: 135 },
    description: "Home to the tallest trees on Earth, the coast redwoods, as well as rivers and rugged coastline."
  },
  {
    id: "saguaro",
    npsUrl: "https://www.nps.gov/sagu/index.htm",
    name: "Saguaro National Park",
    state: ["AZ"],
    region: "West",
    visited: false,
    coords: { x: 190, y: 375 },
    description: "Protects vast forests of the giant saguaro cactus, the symbol of the American West."
  },
  {
    id: "sequoia",
    npsUrl: "https://www.nps.gov/sequ/index.htm",
    name: "Sequoia National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 80, y: 325 },
    description: "Home to the giant sequoias, including the General Sherman tree, the largest living tree on Earth by volume."
  },
  {
    id: "theodore-roosevelt",
    npsUrl: "https://www.nps.gov/thro/index.htm",
    name: "Theodore Roosevelt National Park",
    state: ["ND"],
    region: "Midwest",
    visited: false,
    coords: { x: 380, y: 110 },
    description: "Where the Great Plains meet the Badlands. Home to bison, wild horses, and scenic drives."
  },
  {
    id: "virgin-islands",
    npsUrl: "https://www.nps.gov/viis/index.htm",
    name: "Virgin Islands National Park",
    state: ["VI"],
    region: "South",
    visited: false,
    coords: { x: 910, y: 550 },
    description: "Protects white sand beaches, coral reefs, historic sugar plantations, and tropical forests."
  },
  {
    id: "voyageurs",
    npsUrl: "https://www.nps.gov/voya/index.htm",
    name: "Voyageurs National Park",
    state: ["MN"],
    region: "Midwest",
    visited: false,
    coords: { x: 520, y: 95 },
    description: "A water-based park on the Canadian border, famous for boating, canoeing, fishing, and northern lights."
  },
  {
    id: "wind-cave",
    npsUrl: "https://www.nps.gov/wica/index.htm",
    name: "Wind Cave National Park",
    state: ["SD"],
    region: "Midwest",
    visited: false,
    coords: { x: 375, y: 195 },
    description: "Famous for its unique calcite 'boxwork' formations and above-ground bison prairies."
  },
  {
    id: "wrangell-st-elias",
    npsUrl: "https://www.nps.gov/wrst/index.htm",
    name: "Wrangell-St. Elias National Park",
    state: ["AK"],
    region: "West",
    visited: false,
    coords: { x: 155, y: 505 },
    description: "America's largest national park by area, containing massive volcanoes, glaciers, and historic mining towns."
  },
  {
    id: "yosemite",
    npsUrl: "https://www.nps.gov/yose/index.htm",
    name: "Yosemite National Park",
    state: ["CA"],
    region: "West",
    visited: false,
    coords: { x: 78, y: 300 },
    description: "Renowned for its granite monoliths, waterfalls, giant sequoia groves, and diverse wildlife."
  },
  {
    id: "american-samoa",
    npsUrl: "https://www.nps.gov/npsa/index.htm",
    name: "National Park of American Samoa",
    state: ["AS"],
    region: "West",
    visited: false,
    coords: { x: 215, y: 565 },
    description: "Protects coral reefs, rainforests, volcanic peaks, and Samoan culture across three volcanic islands."
  }
];
