import { ProductType } from "@/types/products.type";
import { PRODUCT_IMAGES } from "./constants";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Mushroom Accent Lamp",
    category: "Home",
    collection: "best-seller",
    price: 1499,
    rating: 4.8,
    image: PRODUCT_IMAGES.cloudDeskLight,
    images: [PRODUCT_IMAGES.cloudDeskLight],
    description:
      "A soft ambient lamp that adds a warm, playful glow to shelves, side tables and cozy corners.",
    colors: ["Cream", "Terracotta", "Olive"],
    tags: ["cozy", "ambient", "decor"],
    vendor: "Crisda Studio",
    stock: 12,
    deliveryDays: "3–5 Days",
    reviewCount: 127,
  },

  {
    id: 2,
    name: "Sculptural Ceramic Vase",
    category: "Home",
    collection: "hyped",
    price: 1199,
    rating: 4.7,
    image:
      PRODUCT_IMAGES.sculpturalCeramicVase,
    images: [PRODUCT_IMAGES.sculpturalCeramicVase],
    description:
      "An organic-shaped ceramic vase designed to stand beautifully even without flowers.",
    colors: ["Sand", "White", "Brown"],
    tags: ["ceramic", "minimal", "sculptural"],
    vendor: "Crisda Studio",
    stock: 8,
    deliveryDays: "3–5 Days",
    reviewCount: 94,
  },

  {
    id: 3,
    name: "Wavy Decorative Mirror",
    category: "Home",
    collection: "hyped",
    price: 1899,
    rating: 4.9,
    image:
      PRODUCT_IMAGES.wavyDecorativeMirror,
    images: [PRODUCT_IMAGES.wavyDecorativeMirror],
    description:
      "A playful wavy mirror that turns an ordinary wall into a visual feature.",
    colors: ["White", "Oak", "Black"],
    tags: ["mirror", "wall-decor", "aesthetic"],
    vendor: "Crisda Studio",
    stock: 6,
    deliveryDays: "4–6 Days",
    reviewCount: 156,
  },

  {
    id: 4,
    name: "Textured Stone Tray",
    category: "Home",
    collection: "value-for-money",
    price: 699,
    rating: 4.6,
    image:
      PRODUCT_IMAGES.texturedStoneTray,
    images: [PRODUCT_IMAGES.texturedStoneTray],
    description:
      "A compact textured tray for perfumes, candles, jewelry and other little objects.",
    colors: ["Stone", "Beige"],
    tags: ["tray", "organizer", "decor"],
    vendor: "Crisda Studio",
    stock: 18,
    deliveryDays: "2–4 Days",
    reviewCount: 73,
  },

  {
    id: 5,
    name: "Abstract Candle Holder",
    category: "Home",
    collection: "best-seller",
    price: 799,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.abstractCandleHolder,
    images: [PRODUCT_IMAGES.abstractCandleHolder],
    description:
      "A sculptural candle holder that adds character to coffee tables and shelves.",
    colors: ["Cream", "Black", "Orange"],
    tags: ["candle", "sculptural", "cozy"],
    vendor: "Crisda Studio",
    stock: 15,
    deliveryDays: "2–4 Days",
    reviewCount: 118,
  },

  // =========================
  // DESK
  // =========================

  {
    id: 6,
    name: "Cloud Desk Light",
    category: "Desk",
    collection: "hyped",
    price: 1599,
    rating: 4.9,
    image:
      PRODUCT_IMAGES.cloudDeskLight,
    images: [PRODUCT_IMAGES.cloudDeskLight],
    description:
      "A soft diffused desk light designed to make workspaces feel calmer and more inviting.",
    colors: ["White", "Cream"],
    tags: ["desk", "lighting", "cozy"],
    vendor: "Crisda Studio",
    stock: 9,
    deliveryDays: "3–5 Days",
    reviewCount: 141,
  },

  {
    id: 7,
    name: "Mini Plant Pot Set",
    category: "Desk",
    collection: "value-for-money",
    price: 599,
    rating: 4.7,
    image:
      PRODUCT_IMAGES.miniPlantPotSet,
    images: [PRODUCT_IMAGES.miniPlantPotSet],
    description:
      "Small decorative planters that bring a little natural texture to your desk.",
    colors: ["Terracotta", "Cream", "Green"],
    tags: ["plants", "desk", "nature"],
    vendor: "Crisda Studio",
    stock: 24,
    deliveryDays: "2–4 Days",
    reviewCount: 86,
  },

  {
    id: 8,
    name: "Retro Desk Organizer",
    category: "Desk",
    collection: "best-seller",
    price: 899,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.retroDeskOrganizer,
    images: [PRODUCT_IMAGES.retroDeskOrganizer],
    description:
      "A colorful desktop organizer that keeps small essentials together without looking boring.",
    colors: ["Yellow", "Green", "Blue"],
    tags: ["organizer", "colorful", "desk"],
    vendor: "Crisda Studio",
    stock: 14,
    deliveryDays: "2–4 Days",
    reviewCount: 109,
  },

  {
    id: 9,
    name: "Minimal Monitor Shelf",
    category: "Desk",
    collection: "value-for-money",
    price: 1299,
    rating: 4.6,
    image:
      PRODUCT_IMAGES.minimalMonitorShelf,
    images: [PRODUCT_IMAGES.minimalMonitorShelf],
    description:
      "A simple raised shelf that adds structure and visual balance to a workspace.",
    colors: ["Oak", "Walnut", "Black"],
    tags: ["desk", "shelf", "workspace"],
    vendor: "Crisda Studio",
    stock: 7,
    deliveryDays: "4–6 Days",
    reviewCount: 61,
  },

  {
    id: 10,
    name: "Ceramic Pen Cup",
    category: "Desk",
    collection: "value-for-money",
    price: 449,
    rating: 4.5,
    image:
      PRODUCT_IMAGES.ceramicPenCup,
    images: [PRODUCT_IMAGES.ceramicPenCup],
    description:
      "A small ceramic holder that turns everyday desk essentials into part of the decor.",
    colors: ["Cream", "Pink", "Blue"],
    tags: ["ceramic", "desk", "organizer"],
    vendor: "Crisda Studio",
    stock: 30,
    deliveryDays: "2–4 Days",
    reviewCount: 48,
  },

  // =========================
  // OFFICE
  // =========================

  {
    id: 11,
    name: "Abstract Desk Sculpture",
    category: "Office",
    collection: "hyped",
    price: 999,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.abstractDeskSculpture,
    images: [PRODUCT_IMAGES.abstractDeskSculpture],
    description:
      "A small abstract sculpture that adds personality to otherwise ordinary office spaces.",
    colors: ["Black", "White", "Gold"],
    tags: ["sculpture", "office", "decor"],
    vendor: "Crisda Studio",
    stock: 11,
    deliveryDays: "3–5 Days",
    reviewCount: 92,
  },

  {
    id: 12,
    name: "Wooden Memo Stand",
    category: "Office",
    collection: "value-for-money",
    price: 399,
    rating: 4.5,
    image:
      PRODUCT_IMAGES.woodenMemoStand,
    images: [PRODUCT_IMAGES.woodenMemoStand],
    description:
      "A tiny wooden stand for displaying notes, photographs and small reminders.",
    colors: ["Oak", "Walnut"],
    tags: ["wood", "memo", "office"],
    vendor: "Crisda Studio",
    stock: 35,
    deliveryDays: "2–4 Days",
    reviewCount: 42,
  },

  {
    id: 13,
    name: "Geometric Bookend",
    category: "Office",
    collection: "best-seller",
    price: 799,
    rating: 4.7,
    image:
      PRODUCT_IMAGES.geometricBookend,
    images: [PRODUCT_IMAGES.geometricBookend],
    description:
      "A sculptural bookend that keeps books organized while adding a subtle design element.",
    colors: ["Black", "Stone", "Terracotta"],
    tags: ["books", "sculptural", "office"],
    vendor: "Crisda Studio",
    stock: 13,
    deliveryDays: "3–5 Days",
    reviewCount: 77,
  },

  // =========================
  // BEDROOM
  // =========================

  {
    id: 14,
    name: "Soft Ambient Night Light",
    category: "Bedroom",
    collection: "best-seller",
    price: 899,
    rating: 4.9,
    image:
      PRODUCT_IMAGES.softAmbientNightLight,
    images: [PRODUCT_IMAGES.softAmbientNightLight],
    description:
      "A warm little light designed for bedside tables and quiet nighttime corners.",
    colors: ["Cream", "Amber", "White"],
    tags: ["night-light", "bedroom", "cozy"],
    vendor: "Crisda Studio",
    stock: 16,
    deliveryDays: "2–4 Days",
    reviewCount: 134,
  },

  {
    id: 15,
    name: "Organic Ceramic Trinket Dish",
    category: "Bedroom",
    collection: "value-for-money",
    price: 499,
    rating: 4.7,
    image:
      PRODUCT_IMAGES.organicCeramicTrinketDish,
    images: [PRODUCT_IMAGES.organicCeramicTrinketDish],
    description:
      "A small organic-shaped dish for rings, watches and other tiny everyday objects.",
    colors: ["Cream", "Pink", "Sand"],
    tags: ["ceramic", "jewelry", "bedroom"],
    vendor: "Crisda Studio",
    stock: 22,
    deliveryDays: "2–4 Days",
    reviewCount: 69,
  },

  {
    id: 16,
    name: "Textured Bedside Tray",
    category: "Bedroom",
    collection: "hyped",
    price: 899,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.texturedBedsideTray,
    images: [PRODUCT_IMAGES.texturedBedsideTray],
    description:
      "A tactile decorative tray that gives bedside essentials a dedicated little home.",
    colors: ["Beige", "Brown", "Cream"],
    tags: ["tray", "bedroom", "organization"],
    vendor: "Crisda Studio",
    stock: 10,
    deliveryDays: "3–5 Days",
    reviewCount: 83,
  },

  // =========================
  // COZY CORNERS
  // =========================

  {
    id: 17,
    name: "Woven Storage Basket",
    category: "Cozy Corner",
    collection: "best-seller",
    price: 999,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.wovenStorageBasket,
    images: [PRODUCT_IMAGES.wovenStorageBasket],
    description:
      "A soft woven basket that hides everyday clutter while keeping a warm natural aesthetic.",
    colors: ["Natural", "Beige", "Brown"],
    tags: ["storage", "woven", "cozy"],
    vendor: "Crisda Studio",
    stock: 8,
    deliveryDays: "4–6 Days",
    reviewCount: 101,
  },

  {
    id: 18,
    name: "Decorative Table Book",
    category: "Cozy Corner",
    collection: "hyped",
    price: 1299,
    rating: 4.6,
    image:
      PRODUCT_IMAGES.decorativeTableBook,
    images: [PRODUCT_IMAGES.decorativeTableBook],
    description:
      "A visually striking book that works as both a reading piece and a coffee-table accent.",
    colors: ["Neutral", "Black", "White"],
    tags: ["books", "coffee-table", "decor"],
    vendor: "Crisda Studio",
    stock: 5,
    deliveryDays: "3–5 Days",
    reviewCount: 57,
  },

  {
    id: 19,
    name: "Textured Throw Cushion",
    category: "Cozy Corner",
    collection: "value-for-money",
    price: 699,
    rating: 4.7,
    image:
      PRODUCT_IMAGES.texturedThrowCushion,
    images: [PRODUCT_IMAGES.texturedThrowCushion],
    description:
      "A textured cushion that adds softness, warmth and visual depth to a favorite corner.",
    colors: ["Cream", "Rust", "Olive"],
    tags: ["cushion", "soft", "cozy"],
    vendor: "Crisda Studio",
    stock: 20,
    deliveryDays: "2–4 Days",
    reviewCount: 74,
  },

  {
    id: 20,
    name: "Sculptural Incense Holder",
    category: "Cozy Corner",
    collection: "hyped",
    price: 599,
    rating: 4.8,
    image:
      PRODUCT_IMAGES.sculpturalIncenseHolder,
    images: [],
    description:
      "A small sculptural incense holder designed to make quiet moments feel more intentional.",
    colors: ["Stone", "Black", "Terracotta"],
    tags: ["incense", "sculptural", "relaxing"],
    vendor: "Crisda Studio",
    stock: 17,
    deliveryDays: "2–4 Days",
    reviewCount: 88,
  },
];
