import styled from "styled-components";

const HeaderStyles = styled.header`
  .bar {
    color: white;
    background: rgba(2, 2, 2, 0.75);
    width: 100%;
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 1;
    border-bottom: 10px solid var(--black, black);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
   height: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  

  /* .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  } */
`;

const SUMMARY = "SUMMARY";
const EVENTS = "EVENTS";
const VEHICLES = "VEHICLES";
const DESTINATIONS = "DESTINATIONS";

export default function Header({onClick}) {
  const generateLinks = () => {
    const links = [SUMMARY, EVENTS, VEHICLES, DESTINATIONS];
    return links.map((linkName, i) => {
      return (
        <button  onClick={() => onClick(linkName)} key={linkName}>
          {linkName}
        </button>
      );
    });
  };
  
  return (
    <HeaderStyles>
      <div className="bar">
        <h2>DopeCars</h2>
        <div>
        {generateLinks()}
        </div>
      </div>
    </HeaderStyles>
  );
}
