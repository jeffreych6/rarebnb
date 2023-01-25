# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

puts "Destroying tables..."
User.destroy_all
Listing.destroy_all
Reservation.destroy_all
Review.destroy_all

puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')
ApplicationRecord.connection.reset_pk_sequence!('reservations')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

puts "Creating users..."
demo = User.create!(
  email: 'demo@user.io', 
  password: 'password',
  first_name: 'Demo',
  last_name: 'User',
  birth_date: '1994-09-16'
)

jeffrey = User.create!(
  email: 'jeffrey@user.io', 
  password: 'password',
  first_name: 'Jeffrey',
  last_name: 'HomeServices',
  birth_date: '1994-09-16'
)

gleb = User.create!(
  email: 'gleb@user.io', 
  password: 'password',
  first_name: 'Gleb',
  last_name: 'M',
  birth_date: '1994-09-16'
)

bonnie = User.create!(
  email: 'bonnie@user.io', 
  password: 'password',
  first_name: 'Bonnie',
  last_name: 'L',
  birth_date: '1994-09-16'
)

justin = User.create!(
  email: 'justin@user.io', 
  password: 'password',
  first_name: 'Justin',
  last_name: 'H',
  birth_date: '1994-09-16'
)

raymond = User.create!(
  email: 'raymond@user.io', 
  password: 'password',
  first_name: 'Raymond',
  last_name: 'C',
  birth_date: '1994-09-16'
)

gigi = User.create!(
  email: 'gigi@user.io', 
  password: 'password',
  first_name: 'Gigi',
  last_name: 'Y',
  birth_date: '1994-09-16'
)

anthony = User.create!(
  email: 'anthony@user.io', 
  password: 'password',
  first_name: 'Anthony',
  last_name: 'C',
  birth_date: '1994-09-16'
)

arnob = User.create!(
  email: 'arnob@user.io', 
  password: 'password',
  first_name: 'Arnob',
  last_name: 'D',
  birth_date: '1994-09-16'
)

brian = User.create!(
  email: 'brian@user.io', 
  password: 'password',
  first_name: 'Brian',
  last_name: 'Y',
  birth_date: '1994-09-16'
)

cath = User.create!(
  email: 'cath@user.io', 
  password: 'password',
  first_name: 'Cath',
  last_name: 'A',
  birth_date: '1994-09-16'
)

chazz = User.create!(
  email: 'chazz@user.io', 
  password: 'password',
  first_name: 'Chazz',
  last_name: 'L',
  birth_date: '1994-09-16'
)

daniel = User.create!(
  email: 'daniel@user.io', 
  password: 'password',
  first_name: 'Daniel',
  last_name: 'K',
  birth_date: '1994-09-16'
)

ethan = User.create!(
  email: 'ethan@user.io', 
  password: 'password',
  first_name: 'Ethan',
  last_name: 'G',
  birth_date: '1994-09-16'
)

evan = User.create!(
  email: 'evan@user.io', 
  password: 'password',
  first_name: 'Evan',
  last_name: 'R',
  birth_date: '1994-09-16'
)

ish = User.create!(
  email: 'ish@user.io', 
  password: 'password',
  first_name: 'Ish',
  last_name: 'A',
  birth_date: '1994-09-16'
)

jeremy = User.create!(
  email: 'jeremy@user.io', 
  password: 'password',
  first_name: 'Jeremy',
  last_name: 'S',
  birth_date: '1994-09-16'
)

jimmy = User.create!(
  email: 'jimmy@user.io', 
  password: 'password',
  first_name: 'Jimmy',
  last_name: 'V',
  birth_date: '1994-09-16'
)

julian = User.create!(
  email: 'julian@user.io', 
  password: 'password',
  first_name: 'Julian',
  last_name: 'C',
  birth_date: '1994-09-16'
)

justink = User.create!(
  email: 'justink@user.io', 
  password: 'password',
  first_name: 'Justin',
  last_name: 'K',
  birth_date: '1994-09-16'
)

kunju = User.create!(
  email: 'kunju@user.io', 
  password: 'password',
  first_name: 'Kunju',
  last_name: 'K',
  birth_date: '1994-09-16'
)

ming = User.create!(
  email: 'ming@user.io', 
  password: 'password',
  first_name: 'Ming',
  last_name: 'Z',
  birth_date: '1994-09-16'
)

qiao = User.create!(
  email: 'qiao@user.io', 
  password: 'password',
  first_name: 'Qiao',
  last_name: 'H',
  birth_date: '1994-09-16'
)

ross = User.create!(
  email: 'ross@user.io', 
  password: 'password',
  first_name: 'Ross',
  last_name: 'M',
  birth_date: '1994-09-16'
)

yong = User.create!(
  email: 'yong@user.io', 
  password: 'password',
  first_name: 'Daniel',
  last_name: 'K',
  birth_date: '1994-09-16'
)

puts "Creating listings..."
wilderness_tower = Listing.create!(
  host_id: jeffrey.id,
  title: "Wilderness Tower",
  description: "Located in the middle of the Sørland wilderness between two ponds far from people and roads. Tree top cabin on 4 floors - a real return to nature experience! Great level of comfort with good beds, panoramic views and well-equipped kitchen. The only heat source is the wood stove and the cabin is only lit with candles and  battery lamp.  Good old-fashioned outhouse down on the forest floor.",
  property_type: "treehouse",
  price: 291,
  city: 'Konsmo',
  state: 'Adger',
  country: 'Norway',
  lat: 58.2853,
  lng: 7.3558,
  zip_code: 4525,
  guests: 6,
  bedrooms: 1,
  beds: 5,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: false,
  washer: true,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.5,
  num_ratings: 6
)

the_grand_tiki = Listing.create!(
  host_id: jeffrey.id,
  title: "The Grand Tiki",
  description: "Building upon the success of the Original Tiki Suite, the 2021 Grand Tiki luxury model was designed and built with many improvements in quality including an artistic roof design, tempered peak windows, Ipe hardwood deck and flooring, an automatic-start generator charging system, 50' LED TV and Blu-ray player hidden in the footboard of the custom oak bed, handmade king-size mattress, integrated blinds in the French doors, oak and reed glass bathroom pocket door, expanded 30 gallon per day fresh water tank, electric mini refrigerator, plus underwater and exterior soffit lighting!",
  property_type: "boat",
  price: 799,
  city: 'Key West',
  state: 'Florida',
  country: 'United States',
  lat: 24.5551,
  lng: -81.7800,
  zip_code: 33040,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: true,
  parking: false,
  wifi: false,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

the_shepherdess_hut = Listing.create!(
  host_id: jeffrey.id,
  title: "The Shepherdess Hut",
  description: "Reconnect with nature at this unforgettable rural retreat. Wake up to bird song on our little family-run nut orchard, take in the incredible views, explore the banks of the nearby river Taw and drift off to sleep under starry skies at night. ",
  property_type: "hut",
  price: 88,
  city: 'Devon',
  state: 'England',
  country: 'United Kingdom',
  lat: 50.7156,
  lng: -3.5309,
  guests: 3,
  bedrooms: 1,
  beds: 3,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: false,
  washer: true,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

guard_tower = Listing.create!(
  host_id: jeffrey.id,
  title: "Guard Tower",
  description: "The ULTIMATE 'GLAMPING' experience!  Featured on HGTV: The Castle House Estate brings Tiny Home living to another level, located in the heart of Joshua Tree and minutes from the National Park. This unique medieval piece of architecture blends indoor-outdoor living with an emphasis on entertaining.",
  property_type: "tower",
  price: 322,
  city: 'Joshua Tree',
  state: 'California',
  country: 'United States',
  lat: 34.1347,
  lng: -116.3131,
  zip_code: 92252,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: false,
  parking: true,
  wifi: true,
  washer: false,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

log_cabin = Listing.create!(
  host_id: jeffrey.id,
  title: "Log Cabin",
  description: "This beautiful private island property with stunning views, luxury amenities, and gorgeous landscapes is the perfect get away to relax on your very own private island paradise in upper Michigan. There is swimming, boating, fishing, campfires, hiking, ping pong, board games, BBQ's, and many more relaxing family fun activities!",
  property_type: "island",
  price: 949,
  city: 'Lupton',
  state: 'Michigan',
  country: 'United States',
  lat: 44.4311,
  lng: -84.0258,
  zip_code: 48635,
  guests: 12,
  bedrooms: 3,
  beds: 6,
  baths: 2,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

glebs_car = Listing.create!(
  host_id: gleb.id,
  title: "Gleb's Sedan",
  description: "The 2019 Honda Accord comes standard with a 192-horsepower turbocharged 1.5-liter four-cylinder engine. A continuously variable automatic transmission (CVT) and front-wheel drive are standard. This powertrain is perfectly fine for everyday driving, and it scoots the Accord off the line and up to speed briskly.",
  property_type: "car",
  price: 300,
  city: 'New York',
  state: 'New York',
  country: 'United States',
  lat: 40.7359,
  lng: -73.9911,
  zip_code: 10003,
  guests: 6,
  bedrooms: 1,
  beds: 3,
  baths: 1,
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 4.87,
  num_ratings: 23
)

glamping = Listing.create!(
  host_id: jeffrey.id,
  title: "Glamping",
  description: "Off-grid Tiny Cabin Upstate NY at Bellfire Farm - this rustic artisan cabin is our third unique lodging experience that builds on the same principles of sustainability and connection to nature via lovingly handcrafted structures. Cook over an open fire, stargaze, enjoy miles of forest and the sprawling, lush landscape. Perfect for groups of 4 and families.",
  property_type: "camper",
  price: 192,
  city: 'Roxbury',
  state: 'New York',
  country: 'United States',
  lat: 42.3002,
  lng: -74.5698,
  zip_code: 12076,
  guests: 4,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

aura_house = Listing.create!(
  host_id: jeffrey.id,
  title: "Aura House",
  description: "Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise. Aura House is situated 25min away from Ubud, and 35min away from Canggu. ",
  property_type: "treehouse",
  price: 360,
  city: 'Abiansemal',
  state: 'Bali',
  country: 'Indonesia',
  lat: -8.5646,
  lng: 115.2207,
  zip_code: 80115,
  guests: 4,
  bedrooms: 2,
  beds: 2,
  baths: 2,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: false,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.67,
  num_ratings: 6
)

highlands_castle = Listing.create!(
  host_id: jeffrey.id,
  title: "Highlands Castle",
  description: "Highlands Castle is a hidden jewel in a private setting, yet only 3-minutes from downtown Bolton Landing with conveniences of a supermarket, gourmet restaurants, wine store, brewery, unique shops, 2-public parks with picnic areas, 2-public beaches, swimming, fishing, kayaking, tennis, golf, miniature golf, hiking trails, bicycling, boat rentals, scenic boat cruises, and more!",
  property_type: "castle",
  price: 8295,
  city: 'Bolton',
  state: 'New York',
  country: 'United States',
  lat: 43.5571,
  lng: -73.6551,
  zip_code: 12804,
  guests: 8,
  bedrooms: 4,
  beds: 4,
  baths: 3,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

moose_meadow_lodge = Listing.create!(
  host_id: jeffrey.id,
  title: "Moose Meadow Lodge",
  description: "Waking up to the splashing of rainbow trout and the music of the hermit thrush as you gaze out on the pristine pond at Moose Meadow. The Treehouse is where nature and luxury come together in tranquil harmony, and where your imagination can soar. It's a perfect location to isolate yourself with your loved one, away from others.",
  property_type: "treehouse",
  price: 650,
  city: 'Waterbury',
  state: 'Vermont',
  country: 'United States',
  lat: 44.3378,
  lng: -72.7562,
  zip_code: 05671,
  guests: 4,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.5,
  num_ratings: 6
)

earthouse = Listing.create!(
  host_id: jeffrey.id,
  title: "Unique 'Earthouse' Retreat",
  description: "Enjoy living at its finest with an unforgettable stay at this modern underground 3-bed, 3-bath home! Earthouse offers unique architectural design providing guests with an open inviting interior complete with high-end furnishings, modern decor, and abundant natural light. Whether you're exploring Springfield, visiting local colleges, making your way to Branson for the day, or getting away, this luxurious, one-of-a-kind abode will be your ideal home base!",
  property_type: "earthen home",
  price: 385,
  city: 'Springfield',
  state: 'Missouri',
  country: 'United States',
  lat: 37.2090,
  lng: -93.2923,
  zip_code: 65619,
  guests: 8,
  bedrooms: 3,
  beds: 4,
  baths: 3,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.17,
  num_ratings: 6
)

forest_gully_farms = Listing.create!(
  host_id: jeffrey.id,
  title: "Forest Gully Farms",
  description: "Not your ordinary BnB! These underground huts provide a unique camping vacation near Nashville, TN. Unlike other places, we provide a private gated driveway separate from our home's driveway. Come stay in the cedar Gully huts where we provide you with your own chickens, veggies and property. You won't run into other customers here, this is a secluded getaway.  Be a farmer for a weekend or hang out by the fire pit, hike to the creek and waterfalls or pick from our food forest or veggie garden.",
  property_type: "earthen home",
  price: 375,
  city: 'Santa Fe',
  state: 'Tennessee',
  country: 'United States',
  lat: 35.7351,
  lng: -87.1281,
  zip_code: 38482,
  guests: 8,
  bedrooms: 2,
  beds: 6,
  baths: 2,
  kitchen: true,
  parking: true,
  wifi: false,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 2.83,
  num_ratings: 6
)

paradise_island = Listing.create!(
  host_id: jeffrey.id,
  title: "Paradise Island",
  description: "Take a trip to Paradise Island and feel the fantasy of  renting a island right here in Michigan its only Island rental. This will bring memories of a lifetime for your group that will top none of the past rentals. Upon arrival you will can see the special character of this exquisite estate and all it has to offer with fire and water! Rest and relax a getaway for the mind body and soul with options for experiences and getaways with our experience concierge app that gives you options for all!",
  property_type: "island",
  price: 4600,
  city: 'Battle Creek',
  state: 'Michigan',
  country: 'United States',
  lat: 42.3211,
  lng: -85.1797,
  zip_code: 49014,
  guests: 12,
  bedrooms: 4,
  beds: 6,
  baths: 4,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.5,
  num_ratings: 6
)

navajo_hogan = Listing.create!(
  host_id: jeffrey.id,
  title: "Navajo Hogan",
  description: "Our unique home will provide a once in a life time off-the-grid experience. Located in a secluded and remote location of the Western Navajo Nation, our home is easily accessible to local restaurants, stores, and not far from two natural wonders, the Grand Canyon and Monument Valley.",
  property_type: "earthen home",
  price: 215,
  city: 'Cameron',
  state: 'Arizona',
  country: 'United States',
  lat: 35.8758,
  lng: -111.4129,
  zip_code: 86020,
  guests: 2,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.5,
  num_ratings: 6
)

orchard_views = Listing.create!(
  host_id: jeffrey.id,
  title: "Orchard Views",
  description: "Wake up in a lofted bedroom wrapped in windows and descend a knotty wood staircase into the open layout of this radiant tiny home. Make coffee in a cozy kitchen, then gather around a slate fire pit in the evening and wait for the stars to emerge. Seen in Travel+Leisure, Time Out RareBnB press,  #Tinyescapeny for more pics! Tv, Lux amenities, more!",
  property_type: "camper",
  price: 192,
  city: 'Marlboro',
  state: 'New York',
  country: 'United States',
  lat: 41.6056,
  lng: -73.9715,
  zip_code: 12542,
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: false,
  air_con: true,
  pets: true,
  dryer: false,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 3.5,
  num_ratings: 6
)

lord_mill = Listing.create!(
  host_id: jeffrey.id,
  title: "Lord's Mill",
  description: "Beautiful mill of the seventeenth century restored. It enjoys all the modern comforts while preserving the authenticity of the building. In the heart of nature near the GR34, it will allow you to visit the Crozon Peninsula, its unique beaches and landscapes while relaxing in an unforgettable setting. You can also kayak and paddle in Brest harbour from the small port of Roscanvel!",
  property_type: "windmill",
  price: 120,
  city: 'Roscanvel',
  state: 'Bretagne',
  country: 'France',
  lat: 48.3154,
  lng: -4.5480,
  zip_code: 29570,
  guests: 2,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

riverside_hideout = Listing.create!(
  host_id: jeffrey.id,
  title: "Riverside Hideout",
  description: "A unique oasis tucked into the woods & hills along Tuscarawas River. Mini kitchen, bedroom,  bath & living room. Sit on the patio & take in the views of the river from the hot tub. Near Ohio/Erie Canal trail, ProFootball Hall of Fame,  Amish Country  Berlin & Walnut Creek, Atwood & Tappan Lake, Historic Zoar, Swiss Festival & Wineries.  No cleaning fee or Dog fee! Paid-Wifi.",
  property_type: "shipping container",
  price: 164,
  city: 'Dover',
  state: 'Ohio',
  country: 'United States',
  lat: 40.5206,
  lng: -81.4740,
  zip_code: 44622,
  guests: 4,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

prince_road = Listing.create!(
  host_id: jeffrey.id,
  title: "Prince Road",
  description: "Featured in Apartment Therapy and news outlets around the world, the PRCH is a unique art-filled combo of top line tech and vintage mid-century; working 50's jukebox with classic records, 65' Sony Bravia 4k OLED TV with Bose sound, Chef's Kitchen featuring a 6 burner Viking Gas Range, Slayer Commercial Espresso Machine, 50's restaurant booth , Intellibed Midnight bed in master suite and premium beds in others plus vintage MCM furniture and chargepoint 50amp Level 2 EV smart charging station.",
  property_type: "shipping container",
  price: 495,
  city: 'St. Augustine',
  state: 'Florida',
  country: 'United States',
  lat: 29.9012,
  lng: -81.3124,
  zip_code: 32080,
  guests: 6,
  bedrooms: 4,
  beds: 5,
  baths: 2,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

bedrock_homestead = Listing.create!(
  host_id: jeffrey.id,
  title: "Bedrock Homestead",
  description: "Winter is here, restaurants closed. Please be prepared with groceries and water. 4 wheel drive with high clearance is necessary! You'll enjoy a view of the Grand Staircase Monument from this fascinating work of art. Grant lives here year-round farming and raising animals. Bedrock is a master example of sustainable living, and a work of beauty created from the natural surrounding land. a Full Cave rental is also available for total privacy, through RareBnB listing--Bedrock Full Cave.",
  property_type: "cave",
  price: 950,
  city: 'Boulder',
  state: 'Utah',
  country: 'United States',
  lat: 37.9221,
  lng: -111.4395,
  zip_code: 84716,
  guests: 8,
  bedrooms: 3,
  beds: 4,
  baths: 2,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

rocks_and_glasses = Listing.create!(
  host_id: jeffrey.id,
  title: "Between Rocks and Glasses",
  description: "Between Rocks and Crystals is located in a mountainous area where you can find abundant nature, desert areas, peace, tranquility and very good energy since it is located in a place where the wonders of nature produce quartz, channeler and conductor of good energies.",
  property_type: "cave",
  price: 44,
  city: 'Ráquira',
  state: 'Boyaca',
  country: 'Colombia',
  lat: 5.5383,
  lng: -73.6322,
  zip_code: 153801,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: false,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

alpaca_farm = Listing.create!(
  host_id: jeffrey.id,
  title: "Alpaca Farm",
  description: "",
  property_type: "farm",
  price: 120,
  city: 'Hillsboro',
  state: 'Oregon',
  country: 'United States',
  lat: 45.5201,
  lng: -122.9898,
  zip_code: 97123,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: true,
  washer: true,
  air_con: true,
  pets: true,
  dryer: true,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

the_barn_loft = Listing.create!(
  host_id: jeffrey.id,
  title: "The Barn Loft",
  description: "",
  property_type: "farm",
  price: 105,
  city: 'Benton',
  state: 'Tennessee',
  country: 'United States',
  lat: 35.1742,
  lng: -84.6535,
  zip_code: 37307,
  guests: 3,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: false,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

desert_adventure = Listing.create!(
  host_id: jeffrey.id,
  title: "Desert Adventure",
  description: "Sleeping in the open-air desert under thousands of stars . Try glamping out, having your very own desert 'hotel', a vacation like no other. A perfect and unforgettable desert adventure. Be at one with nature while we ensure the best, most comfortable conditions for you: large glamping tents with solar lighting, comfortable mattresses, bedding, duvets, pillows, towels etc.. Including desert breakfast & dinner",
  property_type: "tent",
  price: 594,
  city: "Be'er Milka",
  state: 'South District',
  country: 'Israel',
  lat: 30.9341,
  lng: 34.4056,
  zip_code: 8551700,
  guests: 4,
  bedrooms: 1,
  beds: 2,
  baths: 3,
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: false,
  workspace: false,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

glamping_ficus = Listing.create!(
  host_id: jeffrey.id,
  title: "Glamping Ficus",
  description: "Romantic get-together? A proposal, an anniversary, or just a break from reality? I don't know a better place than our Fikus Glamping:) The whole is maintained in an unprecedented climate of greenery and wood. The tent has a mini kitchen equipped with everything you need. You can also use the entire facility, including a bonfire, gazebo, swimming pool, pond. We will also do our best to make your stay more enjoyable and help you prepare a surprise. We are open to ideas ;-)",
  property_type: "tent",
  price: 62,
  city: 'Dąbrówka',
  state: 'Mazowieckie',
  country: 'Poland',
  lat: 52.4837,
  lng: 21.2978,
  zip_code: 05252,
  guests: 2,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  kitchen: false,
  parking: true,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: false,
  workspace: false,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

houseboat = Listing.create!(
  host_id: jeffrey.id,
  title: "Houseboat",
  description: "116 R, also known as Johnny Buck Rock. This four-season, solar powered houseboat showcases a cozy main floor with kitchen, living and dining room. 2 beds (1 queen - 1 double), 1 bathroom. 600 sq ft of deck space. Swim, fish and local eateries near by! You'll love this unique and romantic escape. Aluminum boat included to get to your vacation destination!",
  property_type: "boat",
  price: 262,
  city: 'Mallorytown',
  state: 'Ontario',
  country: 'Canada',
  lat: 44.4774,
  lng: -75.8794,
  zip_code: 00000,
  guests: 4,
  bedrooms: 2,
  beds: 2,
  baths: 1,
  kitchen: true,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true,
  dryer: false,
  tv: true,
  workspace: true,
  self_check_in: true,
  rating: 0,
  num_ratings: 0
)

# Listing.create!(
#   host_id: jeffrey.id,
#   title: "",
#   description: "",
#   property_type: "",
#   price: 192,
#   city: '',
#   state: '',
#   country: 'United States',
#   lat: 42.3002,
#   lng: -74.5698,
#   zip_code: 12076,
#   guests: 4,
#   bedrooms: 1,
#   beds: 2,
#   baths: 1,
#   kitchen: true,
#   parking: true,
#   wifi: false,
#   washer: false,
#   air_con: false,
#   pets: true,
#   dryer: true,
#   tv: true,
#   workspace: true,
#   self_check_in: true,
#   rating: 0,
#   num_ratings: 0
# )




puts "Creating reservations..."

Reservation.create!(
  guest_id: demo.id,
  listing_id: the_grand_tiki.id,
  start_date: '2022-11-30',
  end_date: '2022-12-05',
  num_guests: 1
)

Reservation.create!(
  guest_id: demo.id,
  listing_id: guard_tower.id,
  start_date: '2022-12-05',
  end_date: '2022-12-12',
  num_guests: 2
)

Reservation.create!(
  guest_id: demo.id,
  listing_id: glebs_car.id,
  start_date: '2022-06-01',
  end_date: '2022-12-15',
  num_guests: 6
)

Reservation.create!(
  guest_id: demo.id,
  listing_id: log_cabin.id,
  start_date: '2022-12-25',
  end_date: '2022-12-31',
  num_guests: 3
)

puts "Creating reviews..."
# Need to make author_id and listing_id unique for each review

Review.create!(
  author_id: jeffrey.id,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 2,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 3,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 4,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 5,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 6,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Wish I could drive this baby home",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 7,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 8,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: 2,
  listing_id: 9,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 10,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 11,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 12,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 13,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 14,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

Review.create!(
  author_id: jeffrey.id,
  listing_id: 15,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "This was the best RareBnB I've ever stayed at! Best host ever!",
  review_date: '2023-01-05',
  author_name: jeffrey.first_name
)

##

Review.create!(
  author_id: gleb.id,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 2,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 3,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 4,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 5,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 6,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "My car is awesome",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 7,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 8,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 9,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 10,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 11,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 12,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 13,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 14,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

Review.create!(
  author_id: gleb.id,
  listing_id: 15,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Absolutely loved staying in the middle of nowhere!",
  review_date: '2022-11-15',
  author_name: gleb.first_name
)

#

Review.create!(
  author_id: bonnie.id,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 2,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 3,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 4,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 5,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 6,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Took it for a ride around the block",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 7,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 8,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 9,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 10,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 11,
  rating: 3,
  cleanliness: 5,
  accuracy: 3,
  communication: 3,
  location: 1,
  check_in: 3,
  value: 3,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 12,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 13,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 14,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: bonnie.id,
  listing_id: 15,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Best host ever",
  review_date: '2022-10-15',
  author_name: bonnie.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 1,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 2,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 3,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 4,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 5,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Drives better than my porsche!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 7,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 8,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 9,
  rating: 1,
  cleanliness: 1,
  accuracy: 1,
  communication: 1,
  location: 1,
  check_in: 1,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 10,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 11,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 12,
  rating: 5,
  cleanliness: 5,
  accuracy: 2,
  communication: 5,
  location: 1,
  check_in: 5,
  value: 1,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 13,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 14,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: justin.id,
  listing_id: 15,
  rating: 2,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 2,
  check_in: 2,
  value: 2,
  review: "Great host!",
  review_date: '2022-12-15',
  author_name: justin.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 2,
  rating: 2,
  cleanliness: 3,
  accuracy: 2,
  communication: 1,
  location: 3,
  check_in: 2,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 3,
  rating: 4,
  cleanliness: 1,
  accuracy: 2,
  communication: 3,
  location: 2,
  check_in: 3,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 4,
  rating: 4,
  cleanliness: 3,
  accuracy: 2,
  communication: 1,
  location: 2,
  check_in: 3,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 5,
  rating: 3,
  cleanliness: 4,
  accuracy: 2,
  communication: 3,
  location: 2,
  check_in: 1,
  value: 2,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Reminded me of Tokyo Drift!",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 7,
  rating: 2,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 2,
  check_in: 2,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 8,
  rating: 4,
  cleanliness: 4,
  accuracy: 1,
  communication: 1,
  location: 4,
  check_in: 1,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 9,
  rating: 4,
  cleanliness: 1,
  accuracy: 2,
  communication: 2,
  location: 4,
  check_in: 1,
  value: 2,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 10,
  rating: 4,
  cleanliness: 2,
  accuracy: 2,
  communication: 2,
  location: 4,
  check_in: 1,
  value: 2,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 11,
  rating: 4,
  cleanliness: 4,
  accuracy: 3,
  communication: 2,
  location: 2,
  check_in: 3,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 12,
  rating: 2,
  cleanliness: 2,
  accuracy: 1,
  communication: 2,
  location: 2,
  check_in: 4,
  value: 2,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 13,
  rating: 4,
  cleanliness: 4,
  accuracy: 3,
  communication: 2,
  location: 4,
  check_in: 3,
  value: 4,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 14,
  rating: 4,
  cleanliness: 4,
  accuracy: 2,
  communication: 3,
  location: 1,
  check_in: 2,
  value: 3,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: raymond.id,
  listing_id: 15,
  rating: 4,
  cleanliness: 1,
  accuracy: 4,
  communication: 4,
  location: 3,
  check_in: 3,
  value: 2,
  review: "10/10. Would book again",
  review_date: '2022-10-15',
  author_name: raymond.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 1,
  value: 2,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 2,
  rating: 4,
  cleanliness: 3,
  accuracy: 2,
  communication: 4,
  location: 2,
  check_in: 1,
  value: 4,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 3,
  rating: 2,
  cleanliness: 2,
  accuracy: 1,
  communication: 2,
  location: 4,
  check_in: 3,
  value: 4,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 4,
  rating: 2,
  cleanliness: 5,
  accuracy: 2,
  communication: 4,
  location: 4,
  check_in: 3,
  value: 1,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 5,
  rating: 3,
  cleanliness: 4,
  accuracy: 1,
  communication: 4,
  location: 2,
  check_in: 4,
  value: 3,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Could be better. Really should have leather seats.",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 7,
  rating: 4,
  cleanliness: 3,
  accuracy: 2,
  communication: 1,
  location: 1,
  check_in: 2,
  value: 2,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 8,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 3,
  check_in: 4,
  value: 2,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 9,
  rating: 2,
  cleanliness: 3,
  accuracy: 3,
  communication: 1,
  location: 5,
  check_in: 3,
  value: 1,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 10,
  rating: 3,
  cleanliness: 2,
  accuracy: 2,
  communication: 4,
  location: 1,
  check_in: 3,
  value: 2,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 11,
  rating: 2,
  cleanliness: 3,
  accuracy: 3,
  communication: 4,
  location: 4,
  check_in: 1,
  value: 2,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 12,
  rating: 4,
  cleanliness: 4,
  accuracy: 2,
  communication: 1,
  location: 4,
  check_in: 1,
  value: 4,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 13,
  rating: 2,
  cleanliness: 4,
  accuracy: 4,
  communication: 1,
  location: 2,
  check_in: 4,
  value: 4,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 14,
  rating: 2,
  cleanliness: 3,
  accuracy: 2,
  communication: 1,
  location: 4,
  check_in: 2,
  value: 3,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: gigi.id,
  listing_id: 15,
  rating: 3,
  cleanliness: 4,
  accuracy: 1,
  communication: 2,
  location: 1,
  check_in: 2,
  value: 4,
  review: "Omg, I would buy this place if this were Zillow",
  review_date: '2022-10-15',
  author_name: gigi.first_name
)

Review.create!(
  author_id: anthony.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: anthony.first_name
)

Review.create!(
  author_id: arnob.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: arnob.first_name
)

Review.create!(
  author_id: brian.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: brian.first_name
)

Review.create!(
  author_id: cath.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: cath.first_name
)

Review.create!(
  author_id: chazz.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 2,
  accuracy: 5,
  communication: 5,
  location: 2,
  check_in: 2,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: chazz.first_name
)

Review.create!(
  author_id: daniel.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: daniel.first_name
)

Review.create!(
  author_id: ethan.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: ethan.first_name
)

Review.create!(
  author_id: evan.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: evan.first_name
)

Review.create!(
  author_id: ish.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: ish.first_name
)

Review.create!(
  author_id: jeremy.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: jeremy.first_name
)

Review.create!(
  author_id: jimmy.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: jimmy.first_name
)

Review.create!(
  author_id: julian.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: julian.first_name
)

Review.create!(
  author_id: justink.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: justink.first_name
)

Review.create!(
  author_id: kunju.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: kunju.first_name
)

Review.create!(
  author_id: ming.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: ming.first_name
)

Review.create!(
  author_id: ross.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: ross.first_name
)

Review.create!(
  author_id: yong.id,
  listing_id: 6,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Best host ever",
  review_date: '2010-10-15',
  author_name: yong.first_name
)


puts "Attaching listing photos..."

wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_1.webp'), filename: 'wilderness_tower_1.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_2.webp'), filename: 'wilderness_tower_2.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_3.webp'), filename: 'wilderness_tower_3.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_4.webp'), filename: 'wilderness_tower_4.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_5.webp'), filename: 'wilderness_tower_5.webp')

the_grand_tiki.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_grand_tiki/the_grand_tiki_1.webp'), filename: 'the_grand_tiki_1.webp')
the_grand_tiki.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_grand_tiki/the_grand_tiki_2.webp'), filename: 'the_grand_tiki_2.webp')
the_grand_tiki.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_grand_tiki/the_grand_tiki_3.webp'), filename: 'the_grand_tiki_3.webp')
the_grand_tiki.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_grand_tiki/the_grand_tiki_4.webp'), filename: 'the_grand_tiki_4.webp')
the_grand_tiki.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_grand_tiki/the_grand_tiki_5.webp'), filename: 'the_grand_tiki_5.webp')

the_shepherdess_hut.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_shepherdess_hut/the_shepherdess_hut_1.webp'), filename: 'the_shepherdess_hut_1.webp')
the_shepherdess_hut.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_shepherdess_hut/the_shepherdess_hut_2.webp'), filename: 'the_shepherdess_hut_2.webp')
the_shepherdess_hut.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_shepherdess_hut/the_shepherdess_hut_3.webp'), filename: 'the_shepherdess_hut_3.webp')
the_shepherdess_hut.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_shepherdess_hut/the_shepherdess_hut_4.webp'), filename: 'the_shepherdess_hut_4.webp')
the_shepherdess_hut.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_shepherdess_hut/the_shepherdess_hut_5.webp'), filename: 'the_shepherdess_hut_5.webp')

guard_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/guard_tower/guard_tower_1.webp'), filename: 'guard_tower_1.webp')
guard_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/guard_tower/guard_tower_2.webp'), filename: 'guard_tower_2.webp')
guard_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/guard_tower/guard_tower_3.webp'), filename: 'guard_tower_3.webp')
guard_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/guard_tower/guard_tower_4.webp'), filename: 'guard_tower_4.webp')
guard_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/guard_tower/guard_tower_5.webp'), filename: 'guard_tower_5.webp')

log_cabin.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/log_cabin/log_cabin_1.webp'), filename: 'log_cabin_1.webp')
log_cabin.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/log_cabin/log_cabin_2.webp'), filename: 'log_cabin_2.webp')
log_cabin.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/log_cabin/log_cabin_3.webp'), filename: 'log_cabin_3.webp')
log_cabin.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/log_cabin/log_cabin_4.webp'), filename: 'log_cabin_4.webp')
log_cabin.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/log_cabin/log_cabin_5.webp'), filename: 'log_cabin_5.webp')

glamping.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping/glamping_1.webp'), filename: 'glamping_1.webp')
glamping.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping/glamping_2.webp'), filename: 'glamping_2.webp')
glamping.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping/glamping_3.webp'), filename: 'glamping_3.webp')
glamping.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping/glamping_4.webp'), filename: 'glamping_4.webp')
glamping.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping/glamping_5.webp'), filename: 'glamping_5.webp')

aura_house.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/aura_house/aura_house_1.webp'), filename: 'aura_house_1.webp')
aura_house.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/aura_house/aura_house_2.webp'), filename: 'aura_house_2.webp')
aura_house.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/aura_house/aura_house_3.webp'), filename: 'aura_house_3.webp')
aura_house.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/aura_house/aura_house_4.webp'), filename: 'aura_house_4.webp')
aura_house.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/aura_house/aura_house_5.webp'), filename: 'aura_house_5.webp')

highlands_castle.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/highlands_castle/highlands_castle_1.webp'), filename: 'highlands_castle_1.webp')
highlands_castle.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/highlands_castle/highlands_castle_2.webp'), filename: 'highlands_castle_2.webp')
highlands_castle.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/highlands_castle/highlands_castle_3.webp'), filename: 'highlands_castle_3.webp')
highlands_castle.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/highlands_castle/highlands_castle_4.webp'), filename: 'highlands_castle_4.webp')
highlands_castle.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/highlands_castle/highlands_castle_5.webp'), filename: 'highlands_castle_5.webp')

earthouse.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/earthouse/earthouse_1.jpeg'), filename: 'earthouse_1.jpeg')
earthouse.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/earthouse/earthouse_2.webp'), filename: 'earthouse_2.wepb')
earthouse.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/earthouse/earthouse_3.webp'), filename: 'earthouse_3.wepb')
earthouse.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/earthouse/earthouse_4.webp'), filename: 'earthouse_4.wepb')
earthouse.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/earthouse/earthouse_5.webp'), filename: 'earthouse_5.wepb')

glebs_car.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glebs_car/glebs_car_1.jpeg'), filename: 'glebs_car_1.jpeg')
glebs_car.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glebs_car/glebs_car_2.jpg'), filename: 'glebs_car_2.jpg')
glebs_car.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glebs_car/glebs_car_3.jpeg'), filename: 'glebs_car_3.jpeg')
glebs_car.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glebs_car/glebs_car_4.jpeg'), filename: 'glebs_car_4.jpeg')
glebs_car.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glebs_car/glebs_car_5.jpeg'), filename: 'glebs_car_5.jpeg')

forest_gully_farms.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/forest_gully_farms/forest_gully_farms_1.webp'), filename: 'forest_gullty_farms_1.webp')
forest_gully_farms.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/forest_gully_farms/forest_gully_farms_2.webp'), filename: 'forest_gully_farms_2.webp')
forest_gully_farms.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/forest_gully_farms/forest_gully_farms_3.webp'), filename: 'forest_gully_farms_3.webp')
forest_gully_farms.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/forest_gully_farms/forest_gully_farms_4.webp'), filename: 'forest_gully_farms_4.webp')
forest_gully_farms.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/forest_gully_farms/forest_gully_farms_5.webp'), filename: 'forest_gully_farms_5.webp')

moose_meadow_lodge.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/moose_meadow_lodge/moose_meadow_lodge_1.webp'), filename: 'moose_meadow_lodge_1.webp')
moose_meadow_lodge.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/moose_meadow_lodge/moose_meadow_lodge_2.webp'), filename: 'moose_meadow_lodge_2.webp')
moose_meadow_lodge.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/moose_meadow_lodge/moose_meadow_lodge_3.webp'), filename: 'moose_meadow_lodge_3.webp')
moose_meadow_lodge.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/moose_meadow_lodge/moose_meadow_lodge_4.webp'), filename: 'moose_meadow_lodge_4.webp')
moose_meadow_lodge.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/moose_meadow_lodge/moose_meadow_lodge_5.webp'), filename: 'moose_meadow_lodge_5.webp')

navajo_hogan.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/navajo_hogan/navajo_hogan_1.webp'), filename: 'navajo_hogan_1.webp')
navajo_hogan.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/navajo_hogan/navajo_hogan_2.webp'), filename: 'navajo_hogan_2.webp')
navajo_hogan.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/navajo_hogan/navajo_hogan_3.webp'), filename: 'navajo_hogan_3.webp')
navajo_hogan.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/navajo_hogan/navajo_hogan_4.webp'), filename: 'navajo_hogan_4.webp')
navajo_hogan.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/navajo_hogan/navajo_hogan_5.webp'), filename: 'navajo_hogan_5.webp')

orchard_views.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/orchard_views/orchard_views_1.webp'), filename: 'orchard_views_1.webp')
orchard_views.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/orchard_views/orchard_views_2.webp'), filename: 'orchard_views_2.webp')
orchard_views.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/orchard_views/orchard_views_3.webp'), filename: 'orchard_views_3.webp')
orchard_views.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/orchard_views/orchard_views_4.webp'), filename: 'orchard_views_4.webp')
orchard_views.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/orchard_views/orchard_views_5.webp'), filename: 'orchard_views_5.webp')

paradise_island.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/paradise_island/paradise_island_1.webp'), filename: 'paradise_island_1.webp')
paradise_island.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/paradise_island/paradise_island_2.webp'), filename: 'paradise_island_2.webp')
paradise_island.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/paradise_island/paradise_island_3.webp'), filename: 'paradise_island_3.webp')
paradise_island.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/paradise_island/paradise_island_4.webp'), filename: 'paradise_island_4.webp')
paradise_island.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/paradise_island/paradise_island_5.webp'), filename: 'paradise_island_5.webp')

lord_mill.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/lord_mill/lord_mill_1.webp'), filename: 'lord_mill_1.webp')
lord_mill.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/lord_mill/lord_mill_2.webp'), filename: 'lord_mill_2.webp')
lord_mill.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/lord_mill/lord_mill_3.webp'), filename: 'lord_mill_3.webp')
lord_mill.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/lord_mill/lord_mill_4.webp'), filename: 'lord_mill_4.webp')
lord_mill.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/lord_mill/lord_mill_5.webp'), filename: 'lord_mill_5.webp')

riverside_hideout.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/riverside_hideout/riverside_hideout_1.webp'), filename: 'riverside_hideout_1.webp')
riverside_hideout.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/riverside_hideout/riverside_hideout_2.webp'), filename: 'riverside_hideout_2.webp')
riverside_hideout.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/riverside_hideout/riverside_hideout_3.webp'), filename: 'riverside_hideout_3.webp')
riverside_hideout.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/riverside_hideout/riverside_hideout_4.webp'), filename: 'riverside_hideout_4.webp')
riverside_hideout.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/riverside_hideout/riverside_hideout_5.webp'), filename: 'riverside_hideout_5.webp')

prince_road.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/prince_road/prince_road_1.webp'), filename: 'prince_road_1.webp')
prince_road.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/prince_road/prince_road_2.webp'), filename: 'prince_road_2.webp')
prince_road.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/prince_road/prince_road_3.webp'), filename: 'prince_road_3.webp')
prince_road.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/prince_road/prince_road_4.webp'), filename: 'prince_road_4.webp')
prince_road.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/prince_road/prince_road_5.webp'), filename: 'prince_road_5.webp')

bedrock_homestead.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/bedrock_homestead/bedrock_homestead_1.webp'), filename: 'bedrock_homestead_1.webp')
bedrock_homestead.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/bedrock_homestead/bedrock_homestead_2.webp'), filename: 'bedrock_homestead_2.webp')
bedrock_homestead.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/bedrock_homestead/bedrock_homestead_3.webp'), filename: 'bedrock_homestead_3.webp')
bedrock_homestead.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/bedrock_homestead/bedrock_homestead_4.webp'), filename: 'bedrock_homestead_4.webp')
bedrock_homestead.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/bedrock_homestead/bedrock_homestead_5.webp'), filename: 'bedrock_homestead_5.webp')

rocks_and_glasses.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/rocks_and_glasses/rocks_and_glasses_1.webp'), filename: 'rocks_and_glasses_1.webp')
rocks_and_glasses.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/rocks_and_glasses/rocks_and_glasses_2.webp'), filename: 'rocks_and_glasses_2.webp')
rocks_and_glasses.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/rocks_and_glasses/rocks_and_glasses_3.webp'), filename: 'rocks_and_glasses_3.webp')
rocks_and_glasses.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/rocks_and_glasses/rocks_and_glasses_4.webp'), filename: 'rocks_and_glasses_4.webp')
rocks_and_glasses.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/rocks_and_glasses/rocks_and_glasses_5.webp'), filename: 'rocks_and_glasses_5.webp')

alpaca_farm.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/alpaca_farm/alpaca_farm_1.webp'), filename: 'alpaca_farm_1.webp')
alpaca_farm.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/alpaca_farm/alpaca_farm_2.webp'), filename: 'alpaca_farm_2.webp')
alpaca_farm.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/alpaca_farm/alpaca_farm_3.webp'), filename: 'alpaca_farm_3.webp')
alpaca_farm.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/alpaca_farm/alpaca_farm_4.webp'), filename: 'alpaca_farm_4.webp')
alpaca_farm.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/alpaca_farm/alpaca_farm_5.webp'), filename: 'alpaca_farm_5.webp')

the_barn_loft.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_barn_loft/the_barn_loft_1.webp'), filename: 'the_barn_loft_1.webp')
the_barn_loft.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_barn_loft/the_barn_loft_2.webp'), filename: 'the_barn_loft_2.webp')
the_barn_loft.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_barn_loft/the_barn_loft_3.webp'), filename: 'the_barn_loft_3.webp')
the_barn_loft.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_barn_loft/the_barn_loft_4.webp'), filename: 'the_barn_loft_4.webp')
the_barn_loft.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/the_barn_loft/the_barn_loft_5.webp'), filename: 'the_barn_loft_5.webp')

desert_adventure.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/desert_adventure/desert_adventure_1.webp'), filename: 'desert_adventure_1.webp')
desert_adventure.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/desert_adventure/desert_adventure_2.webp'), filename: 'desert_adventure_2.webp')
desert_adventure.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/desert_adventure/desert_adventure_3.webp'), filename: 'desert_adventure_3.webp')
desert_adventure.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/desert_adventure/desert_adventure_4.webp'), filename: 'desert_adventure_4.webp')
desert_adventure.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/desert_adventure/desert_adventure_5.webp'), filename: 'desert_adventure_5.webp')

glamping_ficus.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping_ficus/glamping_ficus_1.webp'), filename: 'glamping_ficus_1.webp')
glamping_ficus.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping_ficus/glamping_ficus_2.webp'), filename: 'glamping_ficus_2.webp')
glamping_ficus.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping_ficus/glamping_ficus_3.webp'), filename: 'glamping_ficus_3.webp')
glamping_ficus.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping_ficus/glamping_ficus_4.webp'), filename: 'glamping_ficus_4.webp')
glamping_ficus.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/glamping_ficus/glamping_ficus_5.webp'), filename: 'glamping_ficus_5.webp')

houseboat.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/houseboat/houseboat_1.webp'), filename: 'houseboat_1.webp')
houseboat.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/houseboat/houseboat_2.webp'), filename: 'houseboat_2.webp')
houseboat.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/houseboat/houseboat_3.webp'), filename: 'houseboat_3.webp')
houseboat.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/houseboat/houseboat_4.webp'), filename: 'houseboat_4.webp')
houseboat.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/houseboat/houseboat_5.webp'), filename: 'houseboat_5.webp')



demo.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
jeffrey.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/jeffrey.webp'), filename: 'jeffrey.webp')
gleb.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/gleb.png'), filename: 'gleb.png')
gigi.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/gigi.png'), filename: 'gigi.png')
raymond.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/raymond.png'), filename: 'raymond.png')
bonnie.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
justin.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
anthony.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
arnob.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
brian.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
cath.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
chazz.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
daniel.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
ethan.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
evan.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
ish.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
jeremy.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
jimmy.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
julian.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
justink.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
kunju.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
ming.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
qiao.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
ross.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')
yong.photo.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/profiles/profile.png'), filename: 'profile.png')

puts "Done!"
