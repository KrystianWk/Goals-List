import { type FC, type ReactNode } from 'react';

interface CeleProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

const Cele: FC<CeleProps> = ({ title, children, onDelete, id }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>USUŃ</button>
    </article>
  );
};

export default Cele;
