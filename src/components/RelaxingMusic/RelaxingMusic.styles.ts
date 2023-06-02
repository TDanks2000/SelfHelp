import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 25px;
`;

export const Wrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 15px;
`;
