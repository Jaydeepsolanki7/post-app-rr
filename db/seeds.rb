20.times do
    Post.create(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph)
end
