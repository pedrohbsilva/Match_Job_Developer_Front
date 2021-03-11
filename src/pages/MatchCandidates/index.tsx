import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../../components/Card';
import { CanditatesPropsInfo } from '../../interfaces';
import {
  Container,
  ContainerCardBox,
  ContainerTextMessage,
  TextStyle,
} from './styles';
import { useMatchJobDeveloper } from '../../hooks';
import Filters from '../../components/Filters';
import CardLoading from '../../components/Shimmer/CardLoading';

/**
 * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
 * @return {React.ReactElement} Brief description of the returning value here.
 */

const MatchCandidates = (): React.ReactElement => {
  const [results, setResults] = useState<CanditatesPropsInfo[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    acceptRemote,
    city,
    minExperience,
    maxExperience,
    technologies,
  } = useMatchJobDeveloper();

  useEffect(() => {
    const searchCandidates = async (): Promise<void> => {
      setLoading(true);
      const response = await api.post(
        '/candidates/search_for_specific_candidates',
        {
          city,
          tech: technologies,
          min_exp: minExperience,
          max_exp: maxExperience,
          accept_remote: acceptRemote,
        },
      );
      setMessage(response.data[0].message);
      setResults(response.data[1].candidates);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    searchCandidates();
  }, [acceptRemote, city, minExperience, maxExperience, technologies]);

  if (loading) {
    return (
      <>
        <Filters />
        <Container>
          <ContainerCardBox>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </ContainerCardBox>
        </Container>
      </>
    );
  }

  if (results.length === 0) {
    return (
      <>
        <Filters />
        <ContainerTextMessage>{message}</ContainerTextMessage>
      </>
    );
  }
  return (
    <>
      <Filters />
      <Container>
        <TextStyle data-testid="result-candidates-job">
          Encontramos
          <span>
            {results.length}{' '}
            {results.length !== 1 ? 'desenvolvedores' : 'desenvolvedor'}
          </span>
          para sua empresa
        </TextStyle>
        <ContainerCardBox>
          {results.map((result) => (
            <Card
              key={result.candidate_id}
              acceptRemote={result.accept_remote}
              experience={result.experience}
              cityName={result.city_name}
              technologies={result.technologies}
              candidateId={result.candidate_id}
              candidateName={result.candidate_name}
              candidatePhoto={result.candidate_photo}
            />
          ))}
        </ContainerCardBox>
      </Container>
    </>
  );
};

export default MatchCandidates;
