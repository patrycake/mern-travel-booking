import styled from "styled-components";
function SearchItem({ icon, title, description, type }) {
  return (
    <Wrap>
      <Container>
        <Logo src={icon} alt="" srcset="" />
        <Title>{title}</Title>
      </Container>
      {type === "text" ? (
        <Input type={type} name="" id="" placeholder={description} />
      ) : (
        <Summary>{description}</Summary>
      )}
    </Wrap>
  );
}

export default SearchItem;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: start;
`;
const Logo = styled.img`
  width: 15px;
  padding: 5px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 0.9em;
`;

const Summary = styled.span`
  font-size: 10px;
  color: #918d99;
  padding-left: 27px;
`;

const Input = styled.input`
  border: none;
  padding-left: 25px;
  font-size: 10px;
`;
