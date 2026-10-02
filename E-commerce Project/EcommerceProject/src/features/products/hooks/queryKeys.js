export const productsQueryKeys = {
  all: ["products"], // all means all products data ["products"] is the key for all products data
  lists: () => [...productsQueryKeys.all, "list"], // list means all products data in list format ["products", "list"] is the key for all products data in list format
};
