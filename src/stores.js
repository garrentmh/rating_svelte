import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem abv it amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
]);
