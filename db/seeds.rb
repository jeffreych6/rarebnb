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

puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')
ApplicationRecord.connection.reset_pk_sequence!('reservations')

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
  last_name: 'Cheng',
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
  description: "Come relax and enjoy the beautiful and serene waters of Key West in a truly unique way!",
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

puts "Creating reservations..."

Reservation.create!(
  guest_id: demo.id,
  listing_id: guard_tower.id,
  start_date: '2022-12-01',
  end_date: '2022-12-10',
  num_guests: 3
)

Reservation.create!(
  guest_id: demo.id,
  listing_id: log_cabin.id,
  start_date: '2022-12-01',
  end_date: '2022-12-10',
  num_guests: 3
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
