# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
  {name: 'demo', email: 'demo@yascolor.com', password: 'password' },
  {name: 'Dwayne', email: 'dwayne@gmail.com', password: 'rfv789mn' },
  {name: 'Rhonda', email: 'rhonda@gmail.com', password: 'qk9mmv8e' },
  {name: 'Nanjie', email: 'nanjie@gmail.com', password: 'an849gd8' },
  {name: 'Daniel', email: 'daniel@gmail.com', password: '0M54ISM2' },
  {name: 'Fatima', email: 'fatima@gmail.com', password: '1n48sma8' },
  {name: 'Meagan', email: 'meagan@gmail.com', password: 'msoxu789' },
  {name: 'Sundar', email: 'sundar@gmail.com', password: 'pu9adl32' },
  {name: 'Carrie', email: 'carrie@gmail.com', password: 'a398jkad' },
  {name: 'Tyrone', email: 'tyrone@gmail.com', password: 'cmo93810' },
  {name: 'Tamika', email: 'tamika@gmail.com', password: 'dlkna00y' },
  {name: 'Rebeka', email: 'rebeka@gmail.com', password: 'pb23ksu9' }
  ])

themes = Theme.create([
  {user: User.find_by(name: 'demo'), title: "Mint Julips and Orange Blossoms", colors: [[12, 78, 100], [60, 38, 100], [96, 32, 92], [130, 36, 74], [170, 100, 64]] },
  {user: User.find_by(name: 'demo'), title: "Firenze", colors: [[70, 137, 102], [255, 240, 165], [225, 176, 59], [182, 73, 38], [142, 40, 0]] },
  {user: User.find_by(name: 'demo'), title: "Honey", colors: [[16, 91, 99], [225, 205, 213], [225, 211, 78], [219, 158, 54], [189, 73, 50]] },
  {user: User.find_by(name: 'Dwayne'), title: "Summer in Puerto Rico", colors: [[229, 70, 97], [255, 166, 68], [153, 138, 47], [44, 89, 79], [0, 45, 64]] },
  {user: User.find_by(name: 'Dwayne'), title: "Fall in Michigan", colors: [[6, 75, 70], [20, 77, 82], [57, 72, 87], [226, 61, 40], [30, 56, 42]] },
  {user: User.find_by(name: 'Nanjie'), title: "Specimens", colors: [[202, 45, 36], [168, 61, 70], [22, 72, 89], [46, 68, 94], [7, 67, 87]] },
  {user: User.find_by(name: 'Nanjie'), title: "Korea", colors: [[62, 38, 25], [79, 55, 65], [284, 14, 62], [354, 46, 45], [31, 19, 89]] },
  {user: User.find_by(name: 'Nanjie'), title: "Jean-Michel Basquiat", colors: [[348, 77, 66], [191, 98, 76], [39, 69, 94], [210, 5, 87], [262, 12, 13]] },
  {user: User.find_by(name: 'Tyrone'), title: "Mowing the Lawn", colors: [[140, 34, 41], [64, 67, 87], [247, 205, 64], [142, 149, 72], [65, 68, 34]] },
  {user: User.find_by(name: 'Rebeka'), title: "Lake Michigan", colors: [[233, 33, 27], [207, 33, 48], [187, 72, 45], [178, 38, 68], [176, 90, 37]] },
  {user: User.find_by(name: 'Rebeka'), title: "A Human Spectrum", colors: [[27, 36, 93], [23, 52, 79], [23, 81, 25], [23, 59, 51], [23, 80, 14]] }
  ])
