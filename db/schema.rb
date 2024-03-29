# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_11_203009) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.integer "price"
    t.string "city"
    t.string "state"
    t.string "country"
    t.float "lat"
    t.float "lng"
    t.integer "zip_code"
    t.integer "guests"
    t.integer "bedrooms"
    t.integer "beds"
    t.integer "baths"
    t.boolean "kitchen", default: true
    t.boolean "parking", default: true
    t.boolean "wifi", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "washer", default: true
    t.boolean "air_con", default: true
    t.boolean "pets", default: true
    t.string "property_type"
    t.decimal "rating", precision: 3, scale: 2, default: "0.0"
    t.integer "num_ratings", default: 0
    t.boolean "dryer", default: true
    t.boolean "tv", default: true
    t.boolean "workspace", default: true
    t.boolean "self_check_in", default: true
    t.index ["city"], name: "index_listings_on_city"
    t.index ["country"], name: "index_listings_on_country"
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "guest_id", null: false
    t.bigint "listing_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "num_guests", default: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reservations_on_guest_id"
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.bigint "listing_id", null: false
    t.integer "rating"
    t.integer "cleanliness"
    t.integer "accuracy"
    t.integer "communication"
    t.integer "location"
    t.integer "check_in"
    t.integer "value"
    t.text "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "review_date"
    t.string "author_name"
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone_number"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "birth_date", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "listings", "users", column: "host_id"
  add_foreign_key "reviews", "listings"
  add_foreign_key "reviews", "users", column: "author_id"
end
