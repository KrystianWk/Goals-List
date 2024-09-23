import Cel from './Cele';
import { type Cel as ACel } from '../App';

type ListaCeliProps = {
  cele: ACel[];
  onDeleteCel: (id: number) => void;
};

export default function ListaCeli({ cele, onDeleteCel }: ListaCeliProps) {
  return (
    <ul>
      {cele.map((cel) => (
        <li key={cel.id}>
          <Cel id={cel.id} onDelete={onDeleteCel} title={cel.tytul}>
            <p>{cel.opis}</p>
          </Cel>
        </li>
      ))}
    </ul>
  );
}
