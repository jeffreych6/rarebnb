# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all
Listing.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:
demo = User.create!(
  email: 'demo@user.io', 
  password: 'password',
  first_name: 'Jeffrey',
  last_name: 'HomeServices',
  birth_date: '1994-09-16'
)

justin = User.create!(
  email: 'justin@user.io', 
  password: 'password',
  first_name: 'Justin',
  last_name: 'H',
  birth_date: '1994-09-16'
)

bonnie = User.create!(
  email: 'bonnie@user.io', 
  password: 'password',
  first_name: 'Bonnie',
  last_name: 'L',
  birth_date: '1994-09-16'
)

gleb = User.create!(
  email: 'gleb@user.io', 
  password: 'password',
  first_name: 'Gleb',
  last_name: 'M',
  birth_date: '1994-09-16'
)

daniel = User.create!(
  email: 'daniel@user.io', 
  password: 'password',
  first_name: 'Daniel',
  last_name: 'K',
  birth_date: '1994-09-16'
)

jeremy = User.create!(
  email: 'jeremy@user.io', 
  password: 'password',
  first_name: 'Jeremy',
  last_name: 'S',
  birth_date: '1994-09-16'
)

puts "Creating listings..."
# Create one user with an easy to remember username, email, and password:
wilderness_tower = Listing.create!(
  host_id: demo.id,
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
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true
)

the_grand_tiki = Listing.create!(
  host_id: demo.id,
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
  kitchen: false,
  parking: true,
  wifi: false,
  washer: false,
  air_con: true,
  pets: true
)

Listing.create!(
  host_id: demo.id,
  title: "Bonnie's Basement",
  description: "No water, heating, or electricity. Perfect for extended stays. Cash ONLY!",
  property_type: "house",
  price: 250,
  city: 'Long Island',
  state: 'New York',
  country: 'United States',
  lat: 40.7891,
  lng: -73.1350,
  zip_code: 11779,
  guests: 8,
  bedrooms: 2,
  beds: 2,
  baths: 1,
  kitchen: true,
  parking: false,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true
)

Listing.create!(
  host_id: demo.id,
  title: "Daniel's Closet",
  description: "No water, heating, or electricity. Perfect for a change in environment!",
  property_type: "house",
  price: 120,
  city: 'Long Island',
  state: 'New York',
  country: 'United States',
  lat: 40.7891,
  lng: -73.1350,
  zip_code: 11779,
  guests: 2,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  kitchen: false,
  parking: false,
  wifi: true,
  washer: false,
  air_con: false,
  pets: true
)

Listing.create!(
  host_id: demo.id,
  title: "Jeremy's Bike",
  description: "No water, heating, or electricity. Perfect for a brief stay. Just take a seat!",
  property_type: "house",
  price: 50,
  city: 'Long Island',
  state: 'New York',
  country: 'United States',
  lat: 40.7891,
  lng: -73.1350,
  zip_code: 11779,
  guests: 2,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  kitchen: false,
  parking: false,
  wifi: false,
  washer: false,
  air_con: false,
  pets: true
)

puts "Attaching listing photos..."

wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_1.webp'), filename: 'wilderness_tower_1.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_2.webp'), filename: 'wilderness_tower_2.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_3.webp'), filename: 'wilderness_tower_3.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_4.webp'), filename: 'wilderness_tower_4.webp')
wilderness_tower.photos.attach(io: URI.open('https://rarebnb-seeds.s3.amazonaws.com/rarebnb_listings/wilderness_tower/wilderness_tower_5.webp'), filename: 'wilderness_tower_5.webp')


puts "Done!"
