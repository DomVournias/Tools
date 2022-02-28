import { createGlobalStyle } from "styled-components";
import { device } from "./GlobalStyles";

const Typography = createGlobalStyle`

  h1,h2,h3,h4,h5,p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h1 {
    font-weight: 900;
    text-transform: uppercase;
    
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    font-weight: 500;
  }

  h4 {
    font-weight: 400;
  }

  h5{
    font-weight: 900;
  }
  
  @media ${device.mobileS} {
    h1 {
    font-size: 20px;
    }
    h2 {
      font-size: 23px;
    }
    h3 {
      font-size: 21px;
    }
    h4 {
      font-size: 19px;
    }
    h5 {
      font-size: 15px;
    }
    p {
      font-size: 15px;
    }
  }

  @media ${device.mobileM} {
    h1 {
    font-size: 24px;
    }
    h2 {
      font-size: 27px;
    }
    h3 {
      font-size: 25px;
    }
    h4 {
      font-size: 22px;
    }
    h5 {
      font-size: 17px;
    }
    p {
      font-size: 17px;
    }
  }

  @media ${device.mobileL} {
    h1 {
    font-size: 24px;
    }
    h2 {
      font-size: 27px;
    }
    h3 {
      font-size: 25px;
    }
    h4 {
      font-size: 22px;
    }
    h5 {
      font-size: 17px;
    }
    p {
      font-size: 17px;
    }
  }

  @media ${device.tablet} {
    h1 {
    font-size: 30px;
    }
    h2 {
      font-size: 34px;
    }
    h3 {
      font-size: 30px;
    }
    h4 {
      font-size: 26px;
    }
    h5 {
      font-size: 19px;
    }
    p {
      font-size: 18px;
    }
  }

  @media ${device.laptop} {
    h1 {
    font-size: 32px;
    }
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 34px;
    }
    h4 {
      font-size: 30px;
    }
    h5 {
      font-size: 22px;
    }
    p {
      font-size: 20px;
    }
  }

  @media ${device.laptopL} {
    h1 {
    font-size: 54px;
    }
    h2 {
      font-size: 60px;
    }
    h3 {
      font-size: 54px;
    }
    h4 {
      font-size: 46px;
    }
    h5 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
      font-weight: 600;
    }
  }

  
`;

export default Typography;
