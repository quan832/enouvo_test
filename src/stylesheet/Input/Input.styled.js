import { Input } from 'antd';
import styled, { css } from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const InputAntd = styled(Input)`
  &:hover,
  &:focus,
  &:active {
    border-color: #12c88a !important;
  }

  border: 0.0625rem solid #dfe3e9;
  border-radius: 0.1875rem;
  background-color: #fff;
  display: block;
  font-size: 0.875rem;
  height: 48px;
  padding: 0 0.5rem;
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  box-shadow: none;
`;