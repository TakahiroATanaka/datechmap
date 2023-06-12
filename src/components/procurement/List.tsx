import { Card } from './Card';
import { Procurement } from '@/types';

type Props = {
  procurements: Procurement[];
};

export const List = (props: Props) => {
  return (
    <div className="grid grid-cols-1 content-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {props.procurements.map((procurement) => {
        return (
          <Card
            category={procurement.category}
            key={procurement.title}
            path={procurement.path}
            publishedAt={procurement.date}
            title={procurement.title}
          />
        );
      })}
    </div>
  );
};
