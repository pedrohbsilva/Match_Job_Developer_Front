import React, { useState, useEffect, ChangeEvent } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {
  ContainerFilter,
  FormControlFilter,
  ContainerFilterItem,
  TextTitleFilter,
} from './styles';
import { FilterProps } from '../../interfaces';
import api from '../../services/api';
import { useMatchJobDeveloper } from '../../hooks';

/**
 * @summary Component that generates the filters of city, technology, time of experience and remote work.
 * @return {React.ReactElement} Returns filters for city, technology, time of experience and remote work.
 */

const Filters = (): React.ReactElement => {
  const [technologyFilter, setTechnologyFilter] = useState<FilterProps[]>([]);
  const [citiesFilter, setCitiesFilter] = useState<FilterProps[]>([]);
  const {
    acceptRemote,
    setAcceptRemote,
    city,
    setCity,
    minExperience,
    setMinExperience,
    maxExperience,
    setMaxExperience,
    technologies,
    setTechnologies,
  } = useMatchJobDeveloper();

  const [value, setValue] = React.useState<number[]>([
    minExperience,
    maxExperience,
  ]);

  /**
* @summary
When executing this function, it executes 2 context methods to update the minimum and maximum experience value.
* @param {number} min - Minimum amount of experience.
* @param {number} max -Maximum experience value.
* @return {void} No information is returned.
*/

  const handleExperience = (min: number, max: number): void => {
    setMinExperience(min);
    setMaxExperience(max);
  };

  /**
* @summary
When this function is executed, it updates the value state, and executes the HandleExperience function
* @param {any} event - Not used.
* @param {number | number[]} newValue -array of number.
* @return {void} No information is returned.
*/

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue as number[]);
    const newNumbersForExperience = newValue as number[];
    handleExperience(newNumbersForExperience[0], newNumbersForExperience[1]);
  };

  useEffect(() => {
    const load = async (): Promise<void> => {
      const citiesResponse = await api.get('/cities/get_all_cities');
      const technologiesResponse = await api.get(
        '/technologies/get_all_technologies',
      );
      setCitiesFilter(citiesResponse.data);
      setTechnologyFilter(technologiesResponse.data);
    };
    load();
  }, []);

  /**
   * @summary This function creates an array of objects from a numeric value using the Array.from method
   * @return {Object[]} returns an array of objects.
   */

  const marks = Array.from({ length: 14 }, (_, number) => {
    const object = {
      value: number,
      label: String(number),
    };
    return object;
  });

  return (
    <ContainerFilter>
      <TextTitleFilter>
        <span>Candidatos</span>
        para sua vaga
      </TextTitleFilter>
      <ContainerFilterItem>
        <FormControlFilter>
          <InputLabel>Tecnologia</InputLabel>
          <Select
            value={technologies}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setTechnologies(e.target.value as number);
            }}
          >
            <MenuItem value={0}>
              <em>Nenhuma</em>
            </MenuItem>
            {technologyFilter.map((tech) => (
              <MenuItem key={tech.id} value={tech.id}>
                {tech.name}
              </MenuItem>
            ))}
          </Select>
        </FormControlFilter>
        <FormControlFilter>
          <InputLabel>Cidade</InputLabel>
          <Select
            value={city}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setCity(e.target.value as number);
            }}
          >
            <MenuItem value={0}>
              <em>Nenhuma</em>
            </MenuItem>
            {citiesFilter.map((cityFilter) => (
              <MenuItem key={cityFilter.id} value={cityFilter.id}>
                {cityFilter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControlFilter>
        <FormControlFilter>
          <InputLabel>Aceita trabalho remoto?</InputLabel>
          <Select
            value={acceptRemote}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setAcceptRemote(e.target.value as number);
            }}
          >
            <MenuItem value={-1}>
              <em>Indiferente</em>
            </MenuItem>
            <MenuItem value={0}>Não</MenuItem>
            <MenuItem value={1}>Sim</MenuItem>
          </Select>
        </FormControlFilter>
      </ContainerFilterItem>
      <ContainerFilterItem>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InputLabel id="range-slider">Tempo de Experiência</InputLabel>
          <Slider
            style={{ width: 300 }}
            min={0}
            max={13}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            marks={marks}
            aria-labelledby="range-slider"
          />
        </div>
      </ContainerFilterItem>
    </ContainerFilter>
  );
};

export default Filters;