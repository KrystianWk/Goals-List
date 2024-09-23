import Cel from './components/Cele.tsx';
import celeIMG from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';
import ListaCeli from './components/ListaCeli.tsx';
import NowyCel from './components/NowyCel.tsx';

export type Cel = {
  tytul: string;
  opis: string;
  id: number;
};

export default function App() {
  const [cele, setCele] = useState<Cel[]>([]);

  function handleDodajCel(cel: string, podsumowanie: string) {
    setCele((poprzednieCele) => {
      const nowyCel: Cel = {
        tytul: cel,
        opis: podsumowanie,
        id: Math.random(),
      };
      return [...poprzednieCele, nowyCel];
    });
  }

  function handleUsunCel(id: number) {
    setCele((poprzednieCele) => poprzednieCele.filter((cel) => cel.id !== id));
  }

  return (
    <main>
      <Header image={{ src: celeIMG, alt: 'Logo aplikacji' }}>
        <h1>Twoje Cele</h1>
      </Header>
      <NowyCel onDodajCel={handleDodajCel} />

      <ListaCeli onDeleteCel={handleUsunCel} cele={cele} />
    </main>
  );
}
