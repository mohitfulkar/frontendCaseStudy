let mockProfiles = [
  {
    id: 1,
    name: "Joe Biden",
    description:
      "46th President of the United States, serving since January 2021.",
    photo:
      "https://pbs.twimg.com/profile_images/1380530524779859970/TfwVAbyX_400x400.jpg",
    contact: "president@whitehouse.gov",
    interests: "Politics, Economy, Foreign Policy",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/joebiden",
      twitter: "https://twitter.com/POTUS",
      github: "https://github.com/joebiden",
    },
    coordinates: {
      latitude: 38.897957,
      longitude: -77.03656,
    },
    location: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    aboutMe: {
      text: "I am committed to rebuilding the nation and restoring American leadership.",
      hobbies: ["Reading", "Biking", "Traveling"],
    },
  },
  {
    id: 2,
    name: "Rishi Sunak",
    description: "Prime Minister of the United Kingdom since October 2022.",
    photo:
      "https://pbs.twimg.com/profile_images/1572638567381307394/AEahAxu5_400x400.jpg",
    contact: "rishi.sunak@parliament.uk",
    interests: "Economy, Finance, Public Policy",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/rishisunakmp",
      twitter: "https://twitter.com/RishiSunak",
      github: "https://github.com/rishisunak",
    },
    coordinates: {
      latitude: 51.503363,
      longitude: -0.127625,
    },
    location: "10 Downing St, London SW1A 2AA, UK",
    aboutMe: {
      text: "Focused on driving economic stability and growth for the UK.",
      hobbies: ["Cricket", "Reading", "Family Time"],
    },
  },
  {
    id: 3,
    name: "Justin Trudeau",
    description: "Prime Minister of Canada, serving since November 2015.",
    photo:
      "https://media.licdn.com/dms/image/v2/C4E03AQGD-PJnXZmU8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629053585597?e=1733961600&v=beta&t=AfvJop28px8zKCpYlAb4oqmwRC_GBAe5M9j6GUz8c_A",
    contact: "justin.trudeau@parl.gc.ca",
    interests: "Human Rights, Climate Change, Social Equality",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/justintrudeau",
      twitter: "https://twitter.com/JustinTrudeau",
      github: "https://github.com/justintrudeau",
    },
    coordinates: {
      latitude: 45.42153,
      longitude: -75.697193,
    },
    location: "80 Wellington St, Ottawa, ON K1A 0A3, Canada",
    aboutMe: {
      text: "Working towards a stronger and more inclusive Canada.",
      hobbies: ["Boxing", "Reading", "Hiking"],
    },
  },
  {
    id: 4,
    name: "Emmanuel Macron",
    description: "President of France, serving since May 2017.",
    photo:
      "https://pbs.twimg.com/profile_images/1550535324501164032/0lTW_4tj_400x400.jpg",
    contact: "emmanuel.macron@elysee.fr",
    interests: "Economy, European Union, Defense",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/emmanuelmacron",
      twitter: "https://twitter.com/EmmanuelMacron",
      github: "https://github.com/emmanuelmacron",
    },
    coordinates: {
      latitude: 48.870152,
      longitude: 2.316768,
    },
    location: "55 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    aboutMe: {
      text: "Dedicated to reforming France and strengthening its role in Europe.",
      hobbies: ["Reading", "Football", "Traveling"],
    },
  },
  {
    id: 5,
    name: "Angela Merkel",
    description: "Former Chancellor of Germany, served from 2005 to 2021.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/800px-Angela_Merkel_2019_cropped.jpg",
    contact: "angela.merkel@bundeskanzlerin.de",
    interests: "European Union, Climate Change, Economy",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/angelamerkel",
      twitter: "https://twitter.com/Angela_Merkel",
      github: "https://github.com/angelamerkel",
    },
    coordinates: {
      latitude: 52.518623,
      longitude: 13.376198,
    },
    location: "Willy-Brandt-Straße 1, 10557 Berlin, Germany",
    aboutMe: {
      text: "Led Germany through key economic and political reforms.",
      hobbies: ["Hiking", "Reading", "Cooking"],
    },
  },
  {
    id: 6,
    name: "Fumio Kishida",
    description: "Prime Minister of Japan, serving since October 2021.",
    photo:
      "https://pbs.twimg.com/profile_images/1547582068661440512/kWVUOKKY_400x400.jpg",
    contact: "fumio.kishida@kantei.go.jp",
    interests: "Foreign Policy, Economy, Innovation",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/fumiokishida",
      twitter: "https://twitter.com/kishida230",
      github: "https://github.com/fumiokishida",
    },
    coordinates: {
      latitude: 35.6784,
      longitude: 139.7368,
    },
    location: "2-3-1 Nagatacho, Chiyoda City, Tokyo 100-0014, Japan",
    aboutMe: {
      text: "Striving to enhance Japan's role in the global community.",
      hobbies: ["Photography", "Reading", "Traveling"],
    },
  },
  {
    id: 7,
    name: "Narendra Modi",
    description: "Prime Minister of India, serving since May 2014.",
    photo:
      "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
    contact: "narendra.modi@pmo.gov.in",
    interests: "Development, Economy, Defense",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/narendramodi",
      twitter: "https://twitter.com/narendramodi",
      github: "https://github.com/narendramodi",
    },
    coordinates: {
      latitude: 28.613939,
      longitude: 77.209023,
    },
    location: "7 Lok Kalyan Marg, New Delhi, India",
    aboutMe: {
      text: "Leading India on the path of progress and development.",
      hobbies: ["Yoga", "Reading", "Photography"],
    },
  },
  {
    id: 8,
    name: "Scott Morrison",
    description:
      "Former Prime Minister of Australia, served from 2018 to 2022.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Scott_Morrison_portrait.jpg/800px-Scott_Morrison_portrait.jpg",
    contact: "scott.morrison@aph.gov.au",
    interests: "Economy, Immigration, National Security",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/scottmorrison",
      twitter: "https://twitter.com/ScottMorrisonMP",
      github: "https://github.com/scottmorrison",
    },
    coordinates: {
      latitude: -35.3075,
      longitude: 149.124417,
    },
    location: "The Lodge, Canberra, Australia",
    aboutMe: {
      text: "Focused on building a strong and resilient Australia.",
      hobbies: ["Surfing", "Reading", "Traveling"],
    },
  },
  {
    id: 9,
    name: "Jair Bolsonaro",
    description: "Former President of Brazil, served from 2019 to 2022.",
    photo:
      "https://pbs.twimg.com/profile_images/1614784189462618112/EUGqFFah_400x400.jpg",
    contact: "jair.bolsonaro@presidencia.gov.br",
    interests: "Economy, Defense, Agriculture",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/jairbolsonaro",
      twitter: "https://twitter.com/jairbolsonaro",
      github: "https://github.com/jairbolsonaro",
    },
    coordinates: {
      latitude: -15.7975,
      longitude: -47.8919,
    },
    location: "Palácio do Planalto, Brasília - DF, Brazil",
    aboutMe: {
      text: "Worked on driving Brazil's economic growth.",
      hobbies: ["Shooting", "Traveling", "Reading"],
    },
  },
  {
    id: 10,
    name: "Pedro Sánchez",
    description: "Prime Minister of Spain, serving since June 2018.",
    photo:
      "https://pbs.twimg.com/profile_images/1807539856311988224/5X7brHkg_400x400.jpg",
    contact: "pedro.sanchez@presidencia.gob.es",
    interests: "Economy, European Union, Social Justice",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/pedrosanchez",
      twitter: "https://twitter.com/sanchezcastejon",
      github: "https://github.com/pedrosanchez",
    },
    coordinates: {
      latitude: 40.416775,
      longitude: -3.70379,
    },
    location: "Palacio de la Moncloa, Madrid, Spain",
    aboutMe: {
      text: "Committed to advancing Spain's role in the European Union.",
      hobbies: ["Cycling", "Reading", "Traveling"],
    },
  },
];

export default mockProfiles;
