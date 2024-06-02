const BASE_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw Error("Error while fetching products!");

  const data = await res.json();
  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw Error("Error while fetching a product.");

  const data = await res.json();
  return data;
}

// export async function getUsers() {
//   const res = await fetch(`${BASE_URL}/users`);
//   if (!res.ok) throw Error("Error while fetching all users.");

//   const data = await res.json();
//   return data;
// }

export async function createUser(newUser) {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch {
    throw Error("Failed creating new user");
  }
}

export async function Login(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed logging in!");
  }
}
