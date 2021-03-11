import React from 'react';
import { ContainerCardLoading } from './styles';
import Skeleton from '../../Skeleton/styles';
// import { Container } from './styles';

const CardLoading: React.FC = () => {
  return (
    <ContainerCardLoading>
      <span>
        <Skeleton className="avatar-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </span>
    </ContainerCardLoading>
  );
};

export default CardLoading;
