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
  pets: true
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
  pets: true
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
  pets: true
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
  pets: true
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
  pets: true
)

# glamping = Listing.create!(
#   host_id: jeffrey.id,
#   title: "Glamping",
#   description: "Off-grid Tiny Cabin Upstate NY at Bellfire Farm - this rustic artisan cabin is our third unique lodging experience that builds on the same principles of sustainability and connection to nature via lovingly handcrafted structures. Cook over an open fire, stargaze, enjoy miles of forest and the sprawling, lush landscape. Perfect for groups of 4 and families.",
#   property_type: "tiny home",
#   price: 192,
#   city: 'Roxbury',
#   state: 'New York',
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
#   pets: true
# )

# aura_house = Listing.create!(
#   host_id: jeffrey.id,
#   title: "Aura House",
#   description: "Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise. Aura House is situated 25min away from Ubud, and 35min away from Canggu. ",
#   property_type: "entire villa",
#   price: 360,
#   city: 'Abiansemal',
#   state: 'Bali',
#   country: 'Indonesia',
#   lat: -8.5646,
#   lng: 115.2207,
#   zip_code: 80115,
#   guests: 4,
#   bedrooms: 2,
#   beds: 2,
#   baths: 2,
#   kitchen: true,
#   parking: true,
#   wifi: true,
#   washer: false,
#   air_con: true,
#   pets: true
# )

# highland_castles = Listing.create!(
#   host_id: jeffrey.id,
#   title: "Highlands Castle",
#   description: "Highlands Castle is a hidden jewel in a private setting, yet only 3-minutes from downtown Bolton Landing with conveniences of a supermarket, gourmet restaurants, wine store, brewery, unique shops, 2-public parks with picnic areas, 2-public beaches, swimming, fishing, kayaking, tennis, golf, miniature golf, hiking trails, bicycling, boat rentals, scenic boat cruises, and more!",
#   property_type: "castle",
#   price: 8295,
#   city: 'Bolton',
#   state: 'New York',
#   country: 'United States',
#   lat: 43.5571,
#   lng: -73.6551,
#   zip_code: 12804,
#   guests: 8,
#   bedrooms: 4,
#   beds: 4,
#   baths: 3,
#   kitchen: true,
#   parking: true,
#   wifi: true,
#   washer: true,
#   air_con: true,
#   pets: true
# )

# cabane_jacuzzi = Listing.create!(
#   host_id: jeffrey.id,
#   title: "Cabane Jacuzzi",
#   description: "You will be alone in the world in your treehouse. You observe the forest through the windows of your cozy nest. The jacuzzi is heated to 38°C on your terrace. In the early morning, enjoy a gourmet breakfast with bird songs. For your comfort, you have on the floor a small cabin with private bathroom and dining area. Ideal for a break of nature 1h from Paris and 30mn from Disney.",
#   property_type: "treehouse",
#   price: 291,
#   city: 'Rosoy-en-Multien',
#   state: 'Hauts-de-France',
#   country: 'France',
#   lat: 49.0953,
#   lng: 2.9875,
#   zip_code: 60620,
#   guests: 2,
#   bedrooms: 1,
#   beds: 2,
#   baths: 1,
#   kitchen: true,
#   parking: true,
#   wifi: true,
#   washer: false,
#   air_con: false,
#   pets: true
# )

# earthouse = Listing.create!(
#   host_id: jeffrey.id,
#   title: "Unique 'Earthouse' Retreat",
#   description: "Enjoy living at its finest with an unforgettable stay at this modern underground 3-bed, 3-bath home! Earthouse offers unique architectural design providing guests with an open inviting interior complete with high-end furnishings, modern decor, and abundant natural light. Whether you're exploring Springfield, visiting local colleges, making your way to Branson for the day, or getting away, this luxurious, one-of-a-kind abode will be your ideal home base!",
#   property_type: "earthen home",
#   price: 385,
#   city: 'Springfield',
#   state: 'Missouri',
#   country: 'United States',
#   lat: 37.2090,
#   lng: -93.2923,
#   zip_code: 65619,
#   guests: 8,
#   bedrooms: 3,
#   beds: 4,
#   baths: 3,
#   kitchen: true,
#   parking: true,
#   wifi: true,
#   washer: true,
#   air_con: true,
#   pets: true
# )

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
#   pets: true
# )



puts "Creating reservations..."

Reservation.create!(
  guest_id: demo.id,
  listing_id: guard_tower.id,
  start_date: '2022-12-25',
  end_date: '2022-12-31',
  num_guests: 3
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
  author_id: 1,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 1,
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  check_in: 4,
  value: 4,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 2,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 2,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 2,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 2,
  rating: 3,
  cleanliness: 3,
  accuracy: 3,
  communication: 3,
  location: 3,
  check_in: 3,
  value: 3,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 3,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 4,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Great host!",
)

Review.create!(
  author_id: 1,
  listing_id: 5,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Great host!",
)

Review.create!(
  author_id: 2,
  listing_id: 1,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Superb host!",
)

Review.create!(
  author_id: 2,
  listing_id: 2,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Superb host!",
)

Review.create!(
  author_id: 2,
  listing_id: 3,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Superb host!",
)

Review.create!(
  author_id: 2,
  listing_id: 4,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Superb host!",
)

Review.create!(
  author_id: 2,
  listing_id: 5,
  rating: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  check_in: 5,
  value: 5,
  review: "Superb host!",
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

puts "Done!"
