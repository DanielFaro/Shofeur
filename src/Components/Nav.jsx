import styled from "styled-components";

const NavStyles= styled.nav`
  .bar {
    color: white;
    background: rgba(2, 2, 2, 0.75);
    width: 100%;
    height: 100px;
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
   margin-right: 20px;
   color: white;
   background: #20556f;

    &:hover {
      cursor: pointer;
    }
  }
`;

const SUMMARY = "SUMMARY";
const EVENTS = "EVENTS";
const VEHICLES = "VEHICLES";
const ATTRACTIONS = "ATTRACTIONS";

// Nav bar which is fixed at page top and provides links to page sections
export default function Nav({onClick}) {
  const generateLinks = () => {
    const links = [SUMMARY, EVENTS, VEHICLES, ATTRACTIONS];
    return links.map((linkName, i) => {
      return (
        <button  onClick={() => onClick(linkName)} key={linkName}>
          {linkName}
        </button>
      );
    });
  };
  
  return (
    <NavStyles>
      <div className="bar">
        <h2>LuxuryRentals</h2>
        <div>
          {generateLinks()}
        </div>
      </div>
    </NavStyles>
  );
}
