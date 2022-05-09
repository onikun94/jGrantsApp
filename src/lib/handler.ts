export const handleInsertWord = (name: string) => {
  let innerText = document.getElementById('inputText') as HTMLInputElement;
  innerText.value = name;
};
