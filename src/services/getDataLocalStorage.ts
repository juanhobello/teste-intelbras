export default function getDataLocalStorage(keyName: string) {
  try {
    const data = localStorage.getItem(keyName);

    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}
