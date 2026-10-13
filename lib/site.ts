export const site = {
  name: "Ember Room",
  tagline: "Cocktails, fire & late plates.",
  description:
    "A fictional late-night cocktail house and supper bar — built as a hospitality portfolio concept.",
  address: "Wijnhaven 42, Rotterdam",
  email: "hello@emberroom.example",
  instagram: "@emberroom",
  heroImage:
    "https://images.unsplash.com/photo-1767510533362-4d5dbdaaf8c7?auto=format&fit=crop&fm=jpg&q=86&w=2200",
  roomImage:
    "https://images.unsplash.com/photo-1779300007516-eebee9151c19?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  foodImage:
    "https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  drinkImage:
    "https://images.unsplash.com/photo-1625862692743-3f57873bb37c?auto=format&fit=crop&fm=jpg&q=84&w=1800",
};

export const nav = [
  { href: "/story", label: "Story" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
];

export const menuSections = [
  {
    title: "From the fire",
    items: [
      ["Charred leek", "hazelnut, cultured cream, smoked oil", "15"],
      ["Coal roasted beet", "black garlic, plum, rye", "16"],
      ["Flat iron", "fermented pepper, bone marrow jus", "29"],
      ["Sea bass", "burnt lemon, brown butter, caper leaf", "27"],
    ],
  },
  {
    title: "Late plates",
    items: [
      ["Ember fries", "beef fat, rosemary salt", "8"],
      ["Mushroom toast", "miso, lovage, aged cheese", "13"],
      ["Fried chicken", "hot honey, pickled celery", "16"],
      ["Dark chocolate", "olive oil, sea salt", "11"],
    ],
  },
  {
    title: "House cocktails",
    items: [
      ["Low Flame", "rye, cacao, coffee, orange", "14"],
      ["Night Orchard", "calvados, verjus, sage, soda", "13"],
      ["Smoke Signal", "mezcal, pear, chilli, lime", "14"],
      ["Soft Landing", "0.0 aperitif, peach tea, thyme", "11"],
    ],
  },
] as const;
