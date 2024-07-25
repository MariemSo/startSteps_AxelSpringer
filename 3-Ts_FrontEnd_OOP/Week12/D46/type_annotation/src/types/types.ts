export interface Post {
  id: number;
  title: string;
  content?: string;
  user: { name: string; age: number };
}
export type Param = {
  params: {
    id: string;
  };
};
export const posts: Post[] = [
  {
    id: 1,
    title: "post 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    user: {
      name: "ahmed",
      age: 20,
    },
  },

  {
    id: 2,
    title: "post 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    user: {
      name: "Miou",
      age: 21,
    },
  },

  {
    id: 3,
    title: "post 3",
    user: {
      name: "Regi",
      age: 10,
    },
  },
];
