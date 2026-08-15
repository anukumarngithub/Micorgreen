export type Recipe = {
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  time: string;
  servings: string;
  image: string;
};

export type Microgreen = {
  id: string;
  name: string;
  flavor: string;
  harvest: string;
  uses: string[];
  image: string;
  color: string;
  badge?: string;
  recipes: Recipe[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type WholesaleService = {
  title: string;
  description: string;
};

export const MICROGREENS: Microgreen[] = [
  {
    id: "radish",
    name: "Radish Microgreens",
    flavor: "Fresh, mildly peppery",
    harvest: "7–8 Days",
    uses: ["Salads", "Sandwiches", "Wraps", "Garnish"],
    image: "https://images.pexels.com/photos/9012023/pexels-photo-9012023.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#E53935",
    badge: "Bestseller",
    recipes: [
      {
        name: "Spicy Radish Avocado Toast",
        description: "A peppery kick on creamy avocado toast — ready in minutes.",
        image: "https://images.pexels.com/photos/10464867/pexels-photo-10464867.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "2 slices sourdough bread",
          "1 ripe avocado",
          "A handful of radish microgreens",
          "Lemon juice, chili flakes, salt",
          "Olive oil",
        ],
        steps: [
          "Toast the sourdough slices until golden.",
          "Mash the avocado with lemon juice and a pinch of salt.",
          "Spread the avocado generously on each slice.",
          "Top with a generous handful of radish microgreens.",
          "Drizzle olive oil and sprinkle chili flakes. Serve immediately.",
        ],
        time: "10 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "sunflower",
    name: "Sunflower Microgreens",
    flavor: "Crunchy, nutty",
    harvest: "8–10 Days",
    uses: ["Salads", "Bowls", "Sandwiches"],
    image: "https://images.pexels.com/photos/9031151/pexels-photo-9031151.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#F9A825",
    badge: "Popular",
    recipes: [
      {
        name: "Sunflower Buddha Bowl",
        description: "A nourishing grain bowl with a crunchy nutty topping.",
        image: "https://images.pexels.com/photos/16123121/pexels-photo-16123121.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "1 cup cooked quinoa",
          "1/2 cup roasted chickpeas",
          "Sliced cucumber & carrots",
          "A handful of sunflower microgreens",
          "Tahini, lemon, garlic dressing",
        ],
        steps: [
          "Layer cooked quinoa as the base of the bowl.",
          "Arrange chickpeas, cucumber, and carrots around the quinoa.",
          "Pile sunflower microgreens in the center.",
          "Drizzle with tahini-lemon dressing. Enjoy warm or cold.",
        ],
        time: "20 min",
        servings: "Serves 1",
      },
    ],
  },
  {
    id: "pea-shoots",
    name: "Pea Shoots",
    flavor: "Sweet, tender",
    harvest: "10–12 Days",
    uses: ["Salads", "Stir Fry", "Wraps"],
    image: "https://images.pexels.com/photos/9031150/pexels-photo-9031150.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#43A047",
    recipes: [
      {
        name: "Garlic Pea Shoot Stir-Fry",
        description: "A quick stir-fry that highlights the sweet tenderness of pea shoots.",
        image: "https://images.pexels.com/photos/1707918/pexels-photo-1707918.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "2 cups pea shoots",
          "2 cloves garlic, minced",
          "1 tbsp soy sauce",
          "1 tsp sesame oil",
          "Cooking oil",
        ],
        steps: [
          "Heat oil in a wok over high heat.",
          "Add garlic and stir for 10 seconds until fragrant.",
          "Toss in the pea shoots and stir-fry for 1 minute.",
          "Add soy sauce and sesame oil, toss well, and serve immediately.",
        ],
        time: "8 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "broccoli",
    name: "Broccoli Microgreens",
    flavor: "Mild",
    harvest: "8–10 Days",
    uses: ["Smoothies", "Salads"],
    image: "https://images.pexels.com/photos/8268853/pexels-photo-8268853.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#2E7D32",
    badge: "Superfood",
    recipes: [
      {
        name: "Green Power Smoothie",
        description: "A nutrient-packed smoothie with a mild broccoli boost.",
        image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "1 banana",
          "1/2 cup pineapple chunks",
          "A handful of broccoli microgreens",
          "1 cup coconut water",
          "1 tsp honey",
        ],
        steps: [
          "Add all ingredients to a blender.",
          "Blend until smooth and creamy.",
          "Pour into a glass and enjoy immediately.",
        ],
        time: "5 min",
        servings: "Serves 1",
      },
    ],
  },
  {
    id: "mustard",
    name: "Mustard Microgreens",
    flavor: "Spicy",
    harvest: "7–8 Days",
    uses: ["Sandwiches", "Salads"],
    image: "https://images.pexels.com/photos/36488389/pexels-photo-36488389.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#F57F17",
    recipes: [
      {
        name: "Spicy Mustard Club Sandwich",
        description: "A zesty sandwich with a fiery mustard microgreen kick.",
        image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "3 slices toasted bread",
          "Sliced grilled chicken",
          "Tomato & lettuce",
          "A handful of mustard microgreens",
          "Mayo & Dijon mustard",
        ],
        steps: [
          "Spread mayo and Dijon on the toasted bread.",
          "Layer chicken, tomato, and lettuce.",
          "Top with a generous pile of mustard microgreens.",
          "Stack, slice, and serve.",
        ],
        time: "12 min",
        servings: "Serves 1",
      },
    ],
  },
  {
    id: "red-cabbage",
    name: "Red Cabbage Microgreens",
    flavor: "Mild",
    harvest: "8–10 Days",
    uses: ["Salads", "Garnish"],
    image: "https://images.pexels.com/photos/17926907/pexels-photo-17926907.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#6A1B9A",
    recipes: [
      {
        name: "Colorful Cabbage Slaw",
        description: "A vibrant, crunchy slaw perfect as a side or taco topping.",
        image: "https://images.pexels.com/photos/7726010/pexels-photo-7726010.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "2 cups shredded red cabbage",
          "A handful of red cabbage microgreens",
          "1 grated carrot",
          "Apple cider vinegar, honey, olive oil",
          "Salt & pepper",
        ],
        steps: [
          "Toss cabbage, carrot, and microgreens in a bowl.",
          "Whisk vinegar, honey, and olive oil for the dressing.",
          "Pour over the slaw, season, and toss well.",
          "Let sit 10 minutes before serving for flavors to meld.",
        ],
        time: "15 min",
        servings: "Serves 4",
      },
    ],
  },
  {
    id: "kale",
    name: "Kale Microgreens",
    flavor: "Earthy",
    harvest: "8–10 Days",
    uses: ["Smoothies", "Salads"],
    image: "https://images.pexels.com/photos/36529715/pexels-photo-36529715.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#1B5E20",
    recipes: [
      {
        name: "Kale Microgreen Pesto",
        description: "A fresh earthy pesto that's perfect on pasta or toast.",
        image: "https://images.pexels.com/photos/4162492/pexels-photo-4162492.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "1 cup kale microgreens",
          "1/3 cup walnuts",
          "1/3 cup parmesan",
          "2 cloves garlic",
          "Olive oil, salt, lemon juice",
        ],
        steps: [
          "Toast walnuts lightly in a dry pan.",
          "Blend microgreens, walnuts, garlic, and parmesan.",
          "Slowly drizzle in olive oil while blending.",
          "Season with salt and lemon juice to taste.",
        ],
        time: "10 min",
        servings: "Makes 1 cup",
      },
    ],
  },
  {
    id: "amaranth",
    name: "Amaranth Microgreens",
    flavor: "Earthy",
    harvest: "10–12 Days",
    uses: ["Salads", "Fine Dining"],
    image: "https://images.pexels.com/photos/7824542/pexels-photo-7824542.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#AD1457",
    badge: "Chef's Choice",
    recipes: [
      {
        name: "Amaranth Plated Salad",
        description: "A restaurant-style salad with a striking magenta garnish.",
        image: "https://images.pexels.com/photos/30350304/pexels-photo-30350304.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "Mixed baby greens",
          "Sliced figs & goat cheese",
          "A handful of amaranth microgreens",
          "Balsamic glaze, olive oil",
          "Sea salt",
        ],
        steps: [
          "Arrange baby greens on a plate.",
          "Dot with figs and crumbled goat cheese.",
          "Crown with amaranth microgreens.",
          "Finish with balsamic glaze, olive oil, and sea salt.",
        ],
        time: "10 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "beetroot",
    name: "Beetroot Microgreens",
    flavor: "Sweet Earthy",
    harvest: "10–12 Days",
    uses: ["Salads", "Garnish"],
    image: "https://images.pexels.com/photos/15874889/pexels-photo-15874889.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#B71C1C",
    recipes: [
      {
        name: "Beetroot & Goat Cheese Salad",
        description: "Earthy roasted beets paired with sweet microgreens and creamy cheese.",
        image: "https://images.pexels.com/photos/27969859/pexels-photo-27969859.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "2 roasted beets, sliced",
          "A handful of beetroot microgreens",
          "Goat cheese crumbles",
          "Walnuts, arugula",
          "Olive oil & balsamic",
        ],
        steps: [
          "Layer arugula and sliced beets on a plate.",
          "Scatter goat cheese and walnuts over the top.",
          "Finish with a generous handful of beetroot microgreens.",
          "Drizzle with olive oil and balsamic. Serve.",
        ],
        time: "15 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "basil",
    name: "Basil Microgreens",
    flavor: "Sweet Basil",
    harvest: "14–18 Days",
    uses: ["Pizza", "Pasta", "Salads"],
    image: "https://images.pexels.com/photos/8268847/pexels-photo-8268847.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#33691E",
    recipes: [
      {
        name: "Caprese with Basil Microgreens",
        description: "A fresh twist on classic caprese with intensely flavored basil shoots.",
        image: "https://images.pexels.com/photos/28841111/pexels-photo-28841111.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "Fresh mozzarella, sliced",
          "Ripe tomatoes, sliced",
          "A handful of basil microgreens",
          "Olive oil, balsamic, sea salt",
        ],
        steps: [
          "Alternate tomato and mozzarella slices on a plate.",
          "Tuck basil microgreens between the slices.",
          "Drizzle with olive oil and balsamic.",
          "Finish with flaky sea salt and serve.",
        ],
        time: "8 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "coriander",
    name: "Coriander Microgreens",
    flavor: "Fresh Coriander",
    harvest: "18–21 Days",
    uses: ["Indian Food", "Chutney", "Garnish"],
    image: "https://images.pexels.com/photos/10048317/pexels-photo-10048317.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#558B2F",
    recipes: [
      {
        name: "Coriander Microgreen Chutney",
        description: "A vibrant, zingy chutney perfect with snacks and curries.",
        image: "https://images.pexels.com/photos/23266987/pexels-photo-23266987.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "1 cup coriander microgreens",
          "1 green chili, 1 inch ginger",
          "1 tbsp lemon juice",
          "Salt & a pinch of sugar",
          "2 tbsp yogurt",
        ],
        steps: [
          "Blend microgreens, chili, ginger, and lemon juice.",
          "Add yogurt, salt, and sugar; blend smooth.",
          "Adjust seasoning and consistency with water.",
          "Serve fresh with samosas, pakoras, or curries.",
        ],
        time: "7 min",
        servings: "Makes 1 cup",
      },
    ],
  },
  {
    id: "fenugreek",
    name: "Fenugreek Microgreens",
    flavor: "Mild Bitter",
    harvest: "10–12 Days",
    uses: ["Salads", "Healthy Meals"],
    image: "https://images.pexels.com/photos/15874894/pexels-photo-15874894.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#827717",
    recipes: [
      {
        name: "Methi Thepla",
        description: "Spiced flatbreads loaded with fenugreek microgreens.",
        image: "https://images.pexels.com/photos/20408462/pexels-photo-20408462.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "1 cup whole wheat flour",
          "A handful of fenugreek microgreens, chopped",
          "Turmeric, chili powder, salt, yogurt",
          "Oil for cooking",
        ],
        steps: [
          "Knead flour, microgreens, spices, and yogurt into a soft dough.",
          "Rest 15 minutes, then roll into thin rounds.",
          "Cook on a hot griddle with oil until golden on both sides.",
          "Serve hot with yogurt or pickle.",
        ],
        time: "30 min",
        servings: "Serves 3",
      },
    ],
  },
  {
    id: "arugula",
    name: "Arugula Microgreens",
    flavor: "Peppery",
    harvest: "8–10 Days",
    uses: ["Pizza", "Salads"],
    image: "https://images.pexels.com/photos/8268852/pexels-photo-8268852.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#388E3C",
    recipes: [
      {
        name: "Arugula & Pear Salad",
        description: "Peppery greens balanced by sweet pear and sharp cheese.",
        image: "https://images.pexels.com/photos/1684362/pexels-photo-1684362.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "A handful of arugula microgreens",
          "1 sliced pear",
          "Shaved parmesan",
          "Walnuts, honey, lemon",
          "Olive oil",
        ],
        steps: [
          "Toss microgreens with sliced pear and walnuts.",
          "Plate and top with shaved parmesan.",
          "Whisk olive oil, lemon, and honey for dressing.",
          "Drizzle over the salad and serve immediately.",
        ],
        time: "10 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "pak-choi",
    name: "Pak Choi Microgreens",
    flavor: "Mild",
    harvest: "8–10 Days",
    uses: ["Asian Cuisine", "Stir Fry"],
    image: "https://images.pexels.com/photos/8268850/pexels-photo-8268850.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#00838F",
    recipes: [
      {
        name: "Pak Choi Noodle Soup",
        description: "A light Asian-inspired soup with a crisp microgreen finish.",
        image: "https://images.pexels.com/photos/34216408/pexels-photo-34216408.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "4 cups vegetable broth",
          "Rice noodles",
          "A handful of pak choi microgreens",
          "Soy sauce, ginger, scallions",
          "Sesame oil",
        ],
        steps: [
          "Simmer broth with ginger and scallions for 5 minutes.",
          "Cook rice noodles separately and divide into bowls.",
          "Ladle hot broth over the noodles.",
          "Top with pak choi microgreens and a drizzle of sesame oil.",
        ],
        time: "15 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "spinach",
    name: "Spinach Microgreens",
    flavor: "Mild",
    harvest: "12–14 Days",
    uses: ["Smoothies", "Salads"],
    image: "https://images.pexels.com/photos/15874894/pexels-photo-15874894.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#2E7D32",
    recipes: [
      {
        name: "Spinach Microgreen Salad",
        description: "A light, fresh salad with tender spinach shoots and citrus.",
        image: "https://images.pexels.com/photos/10980008/pexels-photo-10980008.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "A handful of spinach microgreens",
          "Sliced strawberries",
          "Toasted almonds",
          "Feta crumbles",
          "Olive oil & balsamic",
        ],
        steps: [
          "Combine microgreens, strawberries, and almonds in a bowl.",
          "Scatter feta on top.",
          "Whisk olive oil and balsamic for dressing.",
          "Toss gently and serve immediately.",
        ],
        time: "10 min",
        servings: "Serves 2",
      },
    ],
  },
  {
    id: "wheatgrass",
    name: "Wheatgrass",
    flavor: "Fresh",
    harvest: "8–10 Days",
    uses: ["Juice"],
    image: "https://images.pexels.com/photos/46156/grass-green-nature-plant-46156.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#9E9D24",
    badge: "Detox",
    recipes: [
      {
        name: "Wheatgrass Detox Shot",
        description: "A potent cleansing shot best enjoyed fresh on an empty stomach.",
        image: "https://images.pexels.com/photos/12433988/pexels-photo-12433988.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: [
          "A handful of fresh wheatgrass",
          "1/2 apple",
          "1/2 lemon",
          "A small piece of ginger",
        ],
        steps: [
          "Juice the wheatgrass using a cold-press juicer.",
          "Juice the apple, lemon, and ginger.",
          "Mix the juices together.",
          "Pour into a shot glass and drink immediately.",
        ],
        time: "5 min",
        servings: "1 shot",
      },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long do microgreens stay fresh?",
    answer: "Our microgreens stay fresh for 5–7 days when stored properly in the refrigerator. We recommend consuming them as early as possible for maximum nutrition and flavor.",
  },
  {
    question: "How should I store microgreens?",
    answer: "Keep them refrigerated between 2°C and 5°C. Store in an airtight container or the packaging they arrive in. Do not wash until ready to use.",
  },
  {
    question: "Do you supply to restaurants and cafes?",
    answer: "Yes! We provide regular wholesale supply to restaurants, cafes, hotels, supermarkets, and organic stores in Mysuru. Contact us for bulk pricing and scheduled delivery.",
  },
  {
    question: "Are your microgreens pesticide-free?",
    answer: "Absolutely. We use clean cultivation practices with no pesticides or chemical fertilizers. Our microgreens are grown in a controlled indoor environment.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we deliver fresh microgreens directly to homes in Mysuru. Orders can be placed via WhatsApp for quick and convenient processing.",
  },
  {
    question: "Can I get a custom variety pack?",
    answer: "Yes! We can curate custom packs based on your preferences. Contact us via WhatsApp and let us know your requirements.",
  },
];

export const WHOLESALE_SERVICES = [
  {
    title: "Bulk Orders",
    description: "Flexible minimum order quantities tailored to your business needs.",
    icon: "Package",
  },
  {
    title: "Regular Deliveries",
    description: "Scheduled weekly or bi-weekly deliveries to keep your kitchen stocked.",
    icon: "Truck",
  },
  {
    title: "Custom Packaging",
    description: "Branded or private-label packaging options available on request.",
    icon: "Box",
  },
  {
    title: "Restaurant Supply",
    description: "Trusted by top restaurants and fine-dining establishments in Mysuru.",
    icon: "ChefHat",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/15874882/pexels-photo-15874882.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Fresh microgreens tray",
    span: "col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/14977353/pexels-photo-14977353.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sunflower microgreens close-up",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/3296644/pexels-photo-3296644.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pea shoots harvest",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/36033281/pexels-photo-36033281.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Broccoli microgreens",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/29843060/pexels-photo-29843060.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Microgreens bowl",
    span: "col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/17360199/pexels-photo-17360199.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Harvesting microgreens",
    span: "",
  },
];

export const WHATSAPP_NUMBER = "+91 8971313758";
export const PHONE_NUMBER = "+91 8971313758";
export const EMAIL = "anukumarn@gmail.com";
export const CITY = "Mysuru, Karnataka";
