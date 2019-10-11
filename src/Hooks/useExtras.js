import { useState } from 'react';

export function useExtras(defaultExtra) {
  const [extras, setExtras] = useState(defaultExtra || getDefaultExtra);

  function checkExtra(index) {
    const newExtras = [...extras];
    newExtras[index].checked = !newExtras[index].checked;
    setExtras(newExtras);
  }

  return {
    checkExtra,
    extras
  };
}

const extrasList = ['Ginger', 'Miso Soup', 'Wasabi', 'Chopsticks'];

function getDefaultExtra() {
  return extrasList.map(extra => ({
    name: extra,
    checked: true
  }));
}
