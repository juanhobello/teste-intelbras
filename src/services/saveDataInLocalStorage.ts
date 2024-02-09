export default function saveDataInLocalStorage(
  keyName: string,
  data: object
): void {
  try {
    localStorage.setItem(keyName, JSON.stringify(data));
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}
