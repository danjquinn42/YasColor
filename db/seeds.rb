# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Theme.destroy_all
ThemeSave.destroy_all
ColorSwatch.destroy_all


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
  {user: User.find_by(name: 'demo'), title: "Honey", colors: [[186,72,23], [53,100,92], [45,100,65], [38,70,54], [10,58,47]] },
  {user: User.find_by(name: 'Dwayne'), title: "Summer in Puerto Rico", colors: [[350,75,59], [31,100,63], [52,53,39], [167,34,26], [198,100,13]] },
  {user: User.find_by(name: 'Dwayne'), title: "Fall in Michigan", colors: [[6,60,44], [20,64,50], [57,71,56], [226,44,28], [30,39,30]] },
  {user: User.find_by(name: 'Nanjie'), title: "Specimens", colors: [[201,30,28], [168,44,49], [46,84,62], [22,74,57], [7,69,58]] },
  {user: User.find_by(name: 'Nanjie'), title: "Korea", colors: [[31,43,81], [354,30,35], [62,23,20], [284,10,58], [79,38,47]] },
  {user: User.find_by(name: 'Nanjie'), title: "Jean-Michel Basquiat", colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]] },
  {user: User.find_by(name: 'Tyrone'), title: "Mowing the Lawn", colors: [[356,61,34], [235,14,30], [65,35,43], [46,92,61], [65,33,20]] },
  {user: User.find_by(name: 'Rebeka'), title: "Lake Michigan", colors: [[232,20,23], [207,20,40], [176,28,55], [187,56,29], [176,83,20]] },

  {user: User.find_by(name: 'Rebeka'), title: "A Human Spectrum", colors: [[27,70,76], [23,49,58], [23,42,36], [23,68,15], [23,67,8]] },
  {user: User.find_by(name: 'Carrie'), title: "Christmas", colors: [[149,30,39], [60,11,72], [75,33,98], [29,42,58], [7,85,24]] },
  {user: User.find_by(name: 'demo'), title: "Beach Towel", colors: [[152,36,70], [48,100,84], [2,100,71], [41,100,68], [128,37,76]] },
  {user: User.find_by(name: 'Dwayne'), title: "Petrol", colors: [[0,0,16], [176,14,41], [107,9,58], [48,70,83], [15,31,19]] },
  {user: User.find_by(name: 'Dwayne'), title: "Mustang", colors: [[0,0,0], [219,31,22], [220,16,56], [0,0,100], [36,100,50]] },
  {user: User.find_by(name: 'Nanjie'), title: "Sandstone", colors: [[56,52,79], [54,19,57], [55,54,86], [194,94,26], [180,100,9]] },
  {user: User.find_by(name: 'Nanjie'), title: "Circus", colors: [[311,67,11], [0,100,43], [11,100,50], [33,100,50], [177,93,24]] },
  {user: User.find_by(name: 'Nanjie'), title: "Watermelon", colors: [[68,50,36], [71,50,69], [0,0,100], [16,100,83], [351,100,76]] },
  {user: User.find_by(name: 'Tyrone'), title: "Citrus Grove", colors: [[24,100,43], [34,100,50], [50,100,47], [67,93,33], [69,53,25]] },
  {user: User.find_by(name: 'Rebeka'), title: "Vintage Ralph Lauren", colors: [[0,40,31], [215,11,21], [90,3,49], [39,53,77], [12,46,59]] },

  {user: User.find_by(name: 'Rebeka'), title: "Olives and Orange", colors: [[51,19,64], [59,26,37], [62,37,19], [63,28,16], [15,100,38]] },
  {user: User.find_by(name: 'Carrie'), title: "Megasonic Teenage Warhead", colors: [[146,16,80], [152,9,37], [345,9,17], [344,37,24], [346,78,58]] },
  {user: User.find_by(name: 'demo'), title: "Vitamine C", colors: [[194,100,17], [165,63,33], [71,69,54], [52,100,55], [28,100,50]] },
  {user: User.find_by(name: 'Dwayne'), title: "Camping Sunset", colors: [[302,45,12], [325,100,16], [337,97,26], [352,66,48], [3,85,58]] },
  {user: User.find_by(name: 'Dwayne'), title: "Gold and Curry", colors: [[36,62,49], [14,53,33], [25,72,45], [46,79,49], [56,71,29]] },
  {user: User.find_by(name: 'Nanjie'), title: "Parsley Sage Rosemary and Thyme", colors: [[76,48,39], [67,48,26], [67,48,44], [59,45,30], [67,48,35]] },
  {user: User.find_by(name: 'Nanjie'), title: "Flat UI Terminal Theme", colors: [[211,31,27], [145,77,41], [146,80,38], [147,38,62], [8,88,57]] },

  {user: User.find_by(name: 'Tyrone'), title: "Mowing the Lawn", colors: [[356,61,34], [235,14,30], [65,35,43], [46,92,61], [65,33,20]] },

  {user: User.find_by(name: 'Dwayne'), title: "Fall in Michigan copy", colors: [[6,60,44], [20,64,50], [57,71,56], [226,44,28], [30,39,30]] },
  {user: User.find_by(name: 'Nanjie'), title: "Specimens copy", colors: [[201,30,28], [168,44,49], [46,84,62], [22,74,57], [7,69,58]] },
  {user: User.find_by(name: 'Nanjie'), title: "Korea copy", colors: [[31,43,81], [354,30,35], [62,23,20], [284,10,58], [79,38,47]] },
  {user: User.find_by(name: 'Nanjie'), title: "Jean-Michel Basquiat copy", colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]] },
  {user: User.find_by(name: 'Tyrone'), title: "Mowing the Lawn copy", colors: [[356,61,34], [235,14,30], [65,35,43], [46,92,61], [65,33,20]] },
  {user: User.find_by(name: 'Rebeka'), title: "Lake Michigan copy", colors: [[232,20,23], [207,20,40], [176,28,55], [187,56,29], [176,83,20]] },
  {user: User.find_by(name: 'Rebeka'), title: "Exporter", colors: [[33,12,48], [240,11,20], [14,78,60], [60,100,95], [180,29,70]] },
  ])

  theme_saves = ThemeSave.create([
    {user: User.find_by(name: 'demo'), theme: Theme.find_by(title: "Gold and Curry")},
    {user: User.find_by(name: 'demo'), theme: Theme.find_by(title: "Camping Sunset")},
    {user: User.find_by(name: 'demo'), theme: Theme.find_by(title: "Fall in Michigan")},
    {user: User.find_by(name: 'demo'), theme: Theme.find_by(title: "Olives and Orange")},
    {user: User.find_by(name: 'demo'), theme: Theme.find_by(title: "Honey")}
    ])
