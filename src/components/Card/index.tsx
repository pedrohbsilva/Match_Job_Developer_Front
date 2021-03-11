/* eslint-disable camelcase */

import React from 'react';

import {
  ContainerCard,
  ImgCard,
  NameCard,
  TextCard,
  FooterCard,
  FooterCardItems,
  FooterCardText,
} from './styles';
import { CardProps } from '../../interfaces';

/**
 * @summary Component that renders the candidate's information.
 * @param {boolean} acceptRemote - Information that tells whether the user accepts or not to work remotely.
 * @param {number} candidateId - Id of Candidate.
 * @param {string} candidateName - Candidate's name
 * @param {string} candidatePhoto - Candidate's photo
 * @param {string} cityName - Candidate city
 * @param {string} experience - Candidate's work experience period.
 * @param {TechnologiesProps} technologies - Technologies used by the candidate.
 * @return {React.ReactElement} Returns a user card with your information in a unique style.
 */

const Card = ({
  acceptRemote,
  candidateId,
  candidateName,
  candidatePhoto,
  cityName,
  experience,
  technologies,
}: CardProps): React.ReactElement => {
  return (
    <>
      <ContainerCard>
        <ImgCard src={candidatePhoto} alt="Candidate_image" />
        <NameCard>
          Nome: <b>{candidateName}</b>
          {' - '}
          id: <b>{candidateId}</b>
        </NameCard>
        <TextCard>
          Aceita trabalhar remoto?
          <b>{acceptRemote ? ' Sim' : ' Não'}</b>
        </TextCard>
        <TextCard>
          Localidade: <b>{cityName}</b>
        </TextCard>
        <TextCard>
          Tempo de experiência: entre {experience}{' '}
          {experience === '0-1' ? 'ano' : 'anos'}
        </TextCard>
        <FooterCard>
          {technologies.map((tech) => (
            <FooterCardItems
              key={tech.name}
              data-testid="tech"
              style={{
                background: tech.is_main_tech
                  ? 'var(--blueViolet)'
                  : 'var(--lightGrey)',
                color: tech.is_main_tech ? 'var(--white)' : 'var(--black)',
              }}
              title={
                tech.is_main_tech
                  ? 'Tecnologia principal do candidato'
                  : 'Tecnologia secundária do candidato'
              }
            >
              <FooterCardText>{tech.name}</FooterCardText>
            </FooterCardItems>
          ))}
        </FooterCard>
      </ContainerCard>
    </>
  );
};

export default Card;
