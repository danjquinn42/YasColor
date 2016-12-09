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
  {user: User.find_by(name: 'demo'), title: "Mint Julips and Orange Blossoms", colors: [[12, 100, 61] , [60, 100, 81] , [96, 66, 77] , [139, 34, 61] , [170, 100, 32] ] },
  {user: User.find_by(name: 'demo'), title: "Firenze", colors: [[149, 32, 41] , [50, 100, 82] , [36, 100, 62] , [15, 65, 43] , [17, 100, 28] ] },
  {user: User.find_by(name: 'demo'), title: "Honey", colors: [[16, 91, 99], [225, 205, 213], [225, 211, 78], [219, 158, 54], [189, 73, 50]] },
  {user: User.find_by(name: 'Dwayne'), title: "Summer in Puerto Rico", colors: [[350,75,59], [31,100,63], [52,53,39], [167,34,26], [198,100,13]] },
  {user: User.find_by(name: 'Dwayne'), title: "Fall in Michigan", colors: [[6,60,44], [20,64,50], [57,71,56], [226,44,28], [30,39,30]] },
  {user: User.find_by(name: 'Nanjie'), title: "Specimens", colors: [[201,30,28], [168,44,49], [46,84,62], [22,74,57], [7,69,58]] },
  {user: User.find_by(name: 'Nanjie'), title: "Korea", colors: [[31,43,81], [354,30,35], [62,23,20], [284,10,58], [79,38,47]] },
  {user: User.find_by(name: 'Nanjie'), title: "Jean-Michel Basquiat", colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]] },
  {user: User.find_by(name: 'Tyrone'), title: "Mowing the Lawn", colors: [[356,61,34], [235,14,30], [65,35,43], [46,92,61], [65,33,20]] },
  {user: User.find_by(name: 'Rebeka'), title: "Lake Michigan", colors: [[232,20,23], [207,20,40], [176,28,55], [187,56,29], [176,83,20]] },
  {user: User.find_by(name: 'Rebeka'), title: "A Human Spectrum", colors: [[27,70,76], [23,49,58], [23,42,36], [23,68,15], [23,67,8]] }
  ])
