import { useRef } from 'react';

type NowyCelProps = {
  onDodajCel: (cel: string, podsumowanie: string) => void;
};


export default function NowyCel({ onDodajCel }: NowyCelProps) {
  const celRef = useRef<HTMLInputElement>(null);
  const podsumowanieRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const wpisanyCel = celRef.current!.value;
    const wpisanePodsumowanie = podsumowanieRef.current!.value;

    event.currentTarget.reset();

    onDodajCel(wpisanyCel, wpisanePodsumowanie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="cel">Twój cel</label>
        <input type="text" id="cel" ref={celRef} />{' '}
      </p>
      <p>
        <label htmlFor="podsumowanie">Krótkie podsumowanie</label>{' '}
        <input id="podsumowanie" type="text" ref={podsumowanieRef} />{' '}
      </p>
      <button>Dodaj Cel</button>
    </form>
  );
}
