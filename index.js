var restaurants = [];
restaurants = [{
    'id': 1,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/1-1135AD.jpg',
    'name': '1135 AD, JAIPUR',
    'description': 'Named for the year that the ruling Rajput dynasty came to local prominence, 1135 AD offers an opulent introduction to the cuisine of Rajasthan, as well as splendid surroundings (located as it is within the Amber Fort). You can dine beneath crystal chandeliers and gilded ceilings, or be serenaded by musicians from a table on the open-air terrace. '
},{
    'id': 2,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/2-1559AD.jpg',
    'name': '1559 AD, UDAIPUR',
    'description': 'Another Rajasthani dining destination named in honour of an important date—in this case, 1559 was the year that Udaipur was founded by Maharana Udai Singhji—1559 AD overlooks the lovely waters of Lake Pichola. Follow diners in the know to its beautiful garden area, where you can sample from an eclectic menu of Indian, Continental, and Thai dishes.'
},{
    'id': 3,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/3-6BallygungePlace.jpg',
    'name': '6 BALLYGUNGE PLACE, KOLKATA',
    'description': 'For an authentic tasting tour of the flavours of West Bengal, drop by 6 Ballygunge Place in Kolkata. From rohu fish simmered in mustard gravy to coconut-laced cholar dal, from spicy prawn curry to enchorer dalna (a seasonal curry that features green jackfruit), the restaurant serves up bold and beautifully traditional plates.'
},{
    'id': 4,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/4-Aish.jpg',
    'name': 'AISH, HYDERABAD',
    'description': 'The Nizams were the ruling dynasty that oversaw Hyderabad for two centuries, all the way up until Indian independence. Aish, housed within the city’s elegant Park Hotel, at once pays tribute to that long legacy and borrows more than a pinch of its regal pomp. Under an elegant carved ceiling, diners can discover the menu of classic Hyderabadi fare.'
},{
    'id': 5,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/5-Agashiye.jpg',
    'name': 'AGASHIYE, AHMEDABAD',
    'description': 'India has always been an ideal destination for adventurous vegetarians, and Agashiye shows off the versatility of the country’s vegetable-led cookery. A thali is the best way to sample widely, and return visits are recommended, as the menu changes daily. Located across two sprawling terraces within a local heritage hotel, Agashiye also serves up plenty of style.'
},{
    'id': 6,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/6-Ambrai.jpg',
    'name': 'AMBRAI, UDAIPUR',
    'description': 'Though you’ll be able to drink in views of the Jag Mandir, Lake Palace, City Palace, and other top-tier Udaipur attractions from your al fresco table, Ambrai’s delectable cookery can still compete with the exceptional scenery. Housed in the Hotel Amet Haveli, the restaurant excels at fiery laal maas curry and kebab platters as well as non-Indian dishes.'
},{
    'id': 7,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/7-Amethyst.jpg',
    'name': 'AMETHYST, CHENNAI',
    'description': 'It calls buzzing Chennai home, but Amethyst still manages to feel like a dreamy, oasis retreat. Housed in a restored warehouse, complete with lush gardens and wraparound terraces, the café is a magnet for see-and-be-seen types. Explore the globetrotting menu, and go for a browse in the companion boutique.'
},{
    'id': 8,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/8-Bademiya.jpg',
    'name': 'BADEMIYA, MUMBAI',
    'description': 'You certainly won’t find crystal chandeliers or plush furnishings at Bademiya—but for what it lacks in ambiance, the humble eatery is still one of the best restaurants in India. Before it went brick-and-mortar, Bademiya was a street food outlet, and its legendary seekh kebabs are still worth crossing town for. '
},{
    'id': 9,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/9-Bawarchi.jpg',
    'name': 'BAWARCHI, HYDERABAD',
    'description': 'One of Hyderabad’s greatest legacies is biryani: a fragrant dish of mingled rice, curried meat, fish, or vegetables, and plenty of spice. For some of the best examples of the city’s beloved dish, it’s worth venturing to the locals-approved Bawarchi, which serves five different versions of the classic.'
},{
    'id': 10,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/10-BharawanDaDhaba.jpg',
    'name': 'BHARAWAN DA DHABA, AMRITSAR',
    'description': 'If the food at Bharawan Da Dhaba is delicious, you have its legacy to thank: founded all the way back in 1912, the restaurant has certainly had time to perfect its recipes. The atmosphere here is casual—dhabas are typically roadside eateries that serve up food to passing motorists—but the vegetarian fare is some of the best in Amritsar.'
},{
    'id': 11,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/11-BlackSheepBistro.jpg',
    'name': 'BLACK SHEEP BISTRO, GOA',
    'description': 'Wander the pretty streets of Panjim and, if luck is on your side, you’ll stumble upon the exceptional Black Sheep Bistro. A highlight amongst the new crop of high-style eateries in Goa, the restaurant is a destination for its adventurous Indian-meets-Western menu, as well as its impressive cocktail list.'
},{
    'id': 12,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/12-BritanniaAndCo.jpg',
    'name': 'BRITANNIA & COMPANY, MUMBAI',
    'description': 'Many Londoners will have encountered Mumbai’s Irani café culture during a meal at Dishoom. But for a taste of the original, it’s hard to do better than the storied Britannia & Company. Founded in 1923, the restaurant’s menu includes a range of classic Parsi dishes, including berry pulav and mutton dhansak.'
},{
    'id': 13,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/13-Bukhara.jpg',
    'name': 'BUKHARA, DELHI',
    'description': 'Not just one of the best restaurants in India, but officially ranked amongst Asia’s finest eateries, legendary Bukhara has been an essential dining destination for over 35 years. Located within the ITC Maurya, the restaurant’s exquisite tandoori fare and elegant service have made it an icon of Indian hospitality. '
},{
    'id': 14,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/14-CaffePalladio.jpg',
    'name': 'CAFFÉ PALLADIO, JAIPUR',
    'description': 'It may sound surprising that, for a taste of marvellously prepared Sicilian fare, one need only venture to Jaipur. But the stunning Caffé Palladio really has perfected its pasta alla norma. Luxuriate in the exquisite Mediterranean flavours as you while away the afternoon on the restaurant’s shade-dappled, orange blossom-scented terrace.'
},{
    'id': 15,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/15-Crystal.jpg',
    'name': 'CRYSTAL RESTAURANT, AMRITSAR',
    'description': 'Just steps from the Maharaja Ranjit Singh Museum, visitors will discover the beguiling flavours of Crystal Restaurant. Lauded as one of Amritsar’s best eateries, it serves up a tempting array of North Indian classics, including the house speciality of murg tawa frontier.'
},{
    'id': 16,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/16-Embassy.jpg',
    'name': 'THE EMBASSY, DELHI',
    'description': 'Situated in Delhi’s elegant Connaught Place, The Embassy has offered diners a rarefied atmosphere since opening its doors in 1948. Today, the timeless restaurant still attracts crowds in search of giant samosas and the comforts of nostalgia.'
},{
    'id': 17,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/17-FattyBao.jpg',
    'name': 'THE FATTY BAO, BANGALORE',
    'description': 'At Bangalore’s trendy Fatty Bao, the baos are, unsurprisingly, a highlight. From classic char siu (barbecue park) and roast duck to fried aubergine and spicy fried fish, the restaurant’s pillowy buns are fabulously moreish. Once you’ve eaten your fill, cocktails on the roof bar await.'
},{
    'id': 18,
    'img': 'https://www.greavesindia.co.uk/wp-content/uploads/2017/11/18-GingerHouse.jpg',
    'name': 'GINGER HOUSE, COCHIN',
    'description': 'In Cochin’s historic Jew Town district, the waterfront Ginger House bills itself as a “museum restaurant.” What that means: prior to dining, you’ll be able to browse the antiques and sculptures that fill the companion Heritage Arts showroom, including a traditional carved wooden snake boat.'
}]