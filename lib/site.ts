export type MenuItem = readonly [name: string, description: string, price: string];
export type MenuSection = Readonly<{
  title: string;
  note: string;
  items: readonly MenuItem[];
}>;

export const site = {
  name: "LOW EMBER",
  shortName: "LE",
  tagline: "Fire after dark.",
  description:
    "LOW EMBER is a late-night open-fire kitchen, cocktail bar and listening room in Rotterdam.",
  location: "Scheepvaartkwartier · Rotterdam",
  locationNote: "Directions are shared with confirmed reservations.",
  instagram: "@lowember.rotterdam",
  heroImage:
    "https://images.unsplash.com/photo-1767510533362-4d5dbdaaf8c7?auto=format&fit=crop&fm=jpg&q=88&w=2200",
  roomImage:
    "https://images.unsplash.com/photo-1779300007516-eebee9151c19?auto=format&fit=crop&fm=jpg&q=86&w=1800",
  foodImage:
    "https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?auto=format&fit=crop&fm=jpg&q=86&w=1800",
  drinkImage:
    "https://images.unsplash.com/photo-1625862692743-3f57873bb37c?auto=format&fit=crop&fm=jpg&q=86&w=1800",
} as const;

export const hours = [
  { day: "Monday–Wednesday", value: "Closed" },
  { day: "Thursday", value: "17:30–00:30" },
  { day: "Friday–Saturday", value: "17:30–01:30" },
  { day: "Sunday", value: "17:30–23:30" },
] as const;

export const nav = [
  { href: "/story", label: "Story" },
  { href: "/menu", label: "Menu" },
  { href: "/private-nights", label: "Private Nights" },
  { href: "/dietary", label: "Dietary" },
  { href: "/reservations", label: "Reservations" },
] as const;

export const menuSections: readonly MenuSection[] = [
  {
    title: "From the fire",
    note: "Live flame, smoke and sharp edges.",
    items: [
      ["Charred leek", "hazelnut, cultured cream, smoked oil", "15"],
      ["Coal-roasted beet", "black garlic, plum, rye", "16"],
      ["Flat iron", "fermented pepper, bone marrow jus", "29"],
      ["Sea bass", "burnt lemon, brown butter, caper leaf", "27"],
    ],
  },
  {
    title: "Late plates",
    note: "For the table, the bar or the last round.",
    items: [
      ["Ember fries", "beef fat, rosemary salt", "8"],
      ["Mushroom toast", "miso, lovage, aged cheese", "13"],
      ["Fried chicken", "hot honey, pickled celery", "16"],
      ["Dark chocolate", "olive oil, sea salt", "11"],
    ],
  },
  {
    title: "House cocktails",
    note: "Dry, bright, smoky when it earns it.",
    items: [
      ["Low Flame", "rye, cacao, coffee, orange", "14"],
      ["Night Orchard", "calvados, verjus, sage, soda", "13"],
      ["Smoke Signal", "mezcal, pear, chilli, lime", "14"],
      ["Side B", "gin, fino, green apple, bay", "13"],
    ],
  },
  {
    title: "Zero proof",
    note: "Built with the same attention as the bar list.",
    items: [
      ["Soft Landing", "0.0 aperitif, peach tea, thyme", "11"],
      ["Orange Static", "blood orange, lapsang, tonic", "10"],
      ["Garden Tape", "cucumber, verjus, dill, soda", "10"],
    ],
  },
] as const;

export const privateNightFormats = [
  {
    title: "Long-table dinner",
    description: "A single table, a shared fire-led menu and a slower rhythm for teams, birthdays and people worth gathering.",
  },
  {
    title: "Brand night",
    description: "A flexible evening built around drinks, plates and sound, with room for a launch, listening session or client night.",
  },
  {
    title: "Full-room evening",
    description: "Take over the room for a private dinner that can move naturally into cocktails and records after ten.",
  },
] as const;

export const dietaryNotes = [
  "Vegetarian and vegan dishes are always part of the menu, though the selection changes with the night.",
  "Tell us about allergies or dietary needs when you reserve so the kitchen can assess what can be adapted safely.",
  "Our kitchen handles common allergens and cannot promise zero cross-contact. If your allergy is severe, include clear details in your reservation note.",
] as const;
