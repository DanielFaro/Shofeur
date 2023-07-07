import styled from 'styled-components';
import React from 'react';

const AttractionsSummaryStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
    text-align: left;
  }
`;

// AttractionSummary provides a list of common attractions in LosAngeles
export default function AttractionsSummary() {
  return (
    <AttractionsSummaryStyles>
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
    </AttractionsSummaryStyles>
  );
}


