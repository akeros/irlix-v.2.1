export async function getCards() {
  try {
    const response = await fetch('https://61c9d20d20ac1c0017ed8ea7.mockapi.io/api/v1/cards');

    if (response.ok) {
      const data = await response.json();

     return data || [];
    } else {
      console.error("Ошибка HTTP: " + response.status);
    }
  } catch (e) {
    console.error(e);
  }
}