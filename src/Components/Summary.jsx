import styled from 'styled-components';
import React from 'react';

const SummaryStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
    text-align: left;
  }
`;

// Summary at top of page
export default function Summary() {
  return (
    <SummaryStyles>
        <header>Why Luxury Rentals?</header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Id interdum velit 
          laoreet id donec. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Amet 
          mauris commodo quis imperdiet massa tincidunt nunc. Mi bibendum neque egestas congue quisque. 
          Proin sagittis nisl rhoncus mattis rhoncus. Morbi tempus iaculis urna id volutpat lacus laoreet 
          non curabitur. Odio morbi quis commodo odio aenean. Tempus quam pellentesque nec nam. Cras 
          semper auctor neque vitae tempus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. 
          Aliquam ultrices sagittis orci a scelerisque purus semper eget duis.
        </p>
        <p>Imperdiet sed euismod nisi porta lorem. Sodales ut eu sem integer vitae justo eget magna. Eget
          egestas purus viverra accumsan in. Praesent tristique magna sit amet purus gravida quis blandit
            turpis. Pretium aenean pharetra magna ac placerat. Viverra maecenas accumsan lacus vel. Et tortor
            at risus viverra adipiscing at. Molestie ac feugiat sed lectus vestibulum. Libero justo laoreet 
            sit amet. Non pulvinar neque laoreet suspendisse interdum. Volutpat maecenas volutpat blandit 
            aliquam etiam erat. Vel eros donec ac odio tempor. At consectetur lorem donec massa sapien. In 
            tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Fusce ut placerat orci nulla 
            pellentesque dignissim enim sit. Duis convallis convallis tellus id interdum velit laoreet id 
            donec. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Diam vulputate ut pharetra 
            sit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        </p>
    </SummaryStyles>
  );
}


