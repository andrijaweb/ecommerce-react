const BASE_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw Error("Error while fetching products!");

  const data = await res.json();
  return data;
}
